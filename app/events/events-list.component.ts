import { Component, OnInit } from '@angular/core'
import { EventsService } from './shared/events.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events:any
  constructor(private eventsService:EventsService, private toastr:ToastrService, private route:ActivatedRoute){

  }
  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }
  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}
