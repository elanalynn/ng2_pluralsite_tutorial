import { Component, OnInit } from '@angular/core'
import { EventsService } from './shared/events.service'
import { ToastrService } from '../common/toastr.service'

@Component({
  templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events:any
  constructor(private eventsService:EventsService, private toastr:ToastrService){

  }
  ngOnInit(){
    this.eventsService.getEvents().subscribe(events => this.events = events)
  }
  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}
