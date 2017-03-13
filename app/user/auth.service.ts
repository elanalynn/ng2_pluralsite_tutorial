import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { IUser } from './user.model'

@Injectable()

export class AuthService {
  public currentUser: IUser

  constructor(private http: Http) {}

  public loginUser(userName: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers})
    let loginInfo = {
      username: userName,
      password,
    }
    let url = `/api/login/`
    return this.http.post(url, JSON.stringify(loginInfo), options).do((resp) => {
      if (resp) {
        this.currentUser = <IUser>resp.json().user
      }
    }).catch((error) => {
      return Observable.of(false)
    })
  }

  public isAuthenticated() {
    return !!this.currentUser
  }

  public updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers})
    let url = `/api/users/${this.currentUser.id}`

    return this.http.put(url, JSON.stringify(this.currentUser), options)
  }

  public checkAuthenticationStatus() {
    return this.http.get('/api/currentIdentity').map((response: any) => {
      if (response._body) {
        return response.json()
      } else {
        return {}
      }
    }).do((currentUser) => {
      if (!!currentUser.userName) {
        this.currentUser = currentUser
      }
    }).subscribe()
  }

  public logout() {
    this.currentUser = undefined

    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers })
    let url = `/api/logout`

    return this.http.post(url, JSON.stringify({}), options)
  }
}
