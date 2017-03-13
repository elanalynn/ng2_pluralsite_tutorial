import { Component } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { EventsService } from '../shared/events.service'
import { IEvent, ISession } from '../shared/index'

@Component({
  styleUrls: ['app/events/event-details/event-details.component.css'],
  templateUrl: 'app/events/event-details/event-details.component.html',
})

export class EventDetailsComponent {
  private event: IEvent
  private addMode: boolean
  private filterBy: string = 'all'
  private sortBy: string = 'votes'

  constructor(private eventsService: EventsService, private route: ActivatedRoute) {

  }

  private ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = data['event']
      this.addMode = false
    })
  }

  private addSession() {
    this.addMode = true
  }

  private saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map((s) => s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventsService.saveEvent(this.event).subscribe()
    this.addMode = false
  }

  private cancelAddSession() {
    this.addMode = false
  }
}
