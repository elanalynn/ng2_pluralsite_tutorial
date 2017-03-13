import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
  selector: 'event-thumbnail',
  styles: [
    '.green { color: #34ee15 }',
    '.bold { font-weight: 700 }',
    '.thumbnail { min-height: 210px; }',
    '.pad-left { margin-left: 10px; }',
    '.well div { color: #bbb; }',
  ],
})

export class EventThumbnailComponent {
  @Input() private event: IEvent
  @Output() private eventClick = new EventEmitter()
  private getEarlyClass() {
    const earlyStart = 'event?.time === \'8:00 am\''
    return {green: earlyStart, bold: earlyStart}
  }
}
