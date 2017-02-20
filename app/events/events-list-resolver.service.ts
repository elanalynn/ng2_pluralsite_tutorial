import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventsService } from './shared/events.service'

@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor (private eventsService:EventsService) {

  }
  resolve(){
    return this.eventsService.getEvents().map(events => events)
  }
}
