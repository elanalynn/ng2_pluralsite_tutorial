import { Component, OnInit } from '@angular/core'
import { EventsService } from './shared/events.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
  templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events:IEvent[]
  constructor(
    private eventsService:EventsService, 
    private route:ActivatedRoute
    ){}

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }

}
