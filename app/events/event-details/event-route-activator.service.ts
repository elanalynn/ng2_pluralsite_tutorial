import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventsService } from '../shared/events.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventsService:EventsService, private router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot){
    const eventExists = !!this.eventsService.getEvent(+route.params['id'])

    if (!eventExists) this.router.navigate(['/404'])
    return eventExists
  }
}
