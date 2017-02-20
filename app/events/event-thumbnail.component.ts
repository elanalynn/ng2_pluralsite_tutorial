import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'app/events/event-thumbnail.component.html',
  styles: [
    '.green { color: #34ee15 }',
    '.bold { font-weight: 700 }',
    '.thumbnail { min-height: 210px; }',
    '.pad-left { margin-left: 10px; }',
    '.well div { color: #bbb; }'
  ]
})

export class EventThumbnailComponent {
  @Input() event:IEvent
  @Output() eventClick = new EventEmitter()
  getEarlyClass(){
    const earlyStart = "event?.time === '8:00 am'"
    return {green: earlyStart, bold: earlyStart}
  }
}
