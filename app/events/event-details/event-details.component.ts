import { Component } from '@angular/core'
import { EventsService } from '../shared/events.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/events/event-details/event-details.component.html',
  styleUrls: ['app/events/event-details/event-details.component.css']
})

export class EventDetailsComponent {
  event:any

  constructor(private eventsService:EventsService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.event = this.eventsService.getEvent(
      +this.route.snapshot.params['id'])
  }
}
