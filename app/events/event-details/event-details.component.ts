import { Component } from '@angular/core'
import { EventsService } from '../shared/events.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared/index'

@Component({
  templateUrl: 'app/events/event-details/event-details.component.html',
  styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent {
  event:IEvent
  addMode:boolean
  filterBy:string = 'all'
  sortBy:string = 'votes'

  constructor(private eventsService:EventsService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.forEach((params:Params) => {
      this.event = this.eventsService.getEvent(+params['id'])
      this.addMode = false
    })
  }

  addSession(){
    this.addMode = true
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventsService.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }
}
