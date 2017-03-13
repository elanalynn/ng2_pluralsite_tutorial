import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventsService } from './shared/events.service'
import { IEvent } from './shared/index'

@Component({
  templateUrl: 'app/events/events-list.component.html',
})

export class EventsListComponent implements OnInit {
  private events: IEvent[]
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    ) {}

  private ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

}
