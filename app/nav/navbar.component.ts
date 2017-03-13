import { Component } from '@angular/core'
import { ISession } from '../events/shared/event.model'
import { EventsService } from '../events/shared/events.service'
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'nav-bar',
  styles: [
    '.nav .navbar-nav { font-size: 15px; }',
    '#searchForm {margin-right: 100px; }',
    '@media (max-width: 1200px) {#searchForm { display: none; }},',
    'li > a.active { color: #F97924 }',
  ],
  templateUrl: 'app/nav/navbar.component.html',
})

export class NavBarComponent {
  public searchTerm: string = ''
  public foundSessions: ISession[]

  constructor(
    private auth: AuthService,
    private eventsService: EventsService,
  ) {}

  public searchSessions(searchTerm) {
    this.eventsService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions
   })
  }
}
