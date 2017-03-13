import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventsService } from './shared/events.service'

@Component({
   styles: [`
      em { float: right; color: #E05C65; padding-left: 10px; }
      .error input { background-color: #E3C3C5 }
      .error ::-webkit-input-placeholder { color: #999 }
      .error ::-moz-placeholder { color: #999 }
      .error :-moz-placeholder { color: #999 }
      .error :-ms-placeholder { color: #999 }
    `],
    templateUrl: 'app/events/create-event.component.html',
})

export class CreateEventComponent {
  private isDirty: boolean = true
  private event: any

  constructor(private router: Router, private eventsService: EventsService) {

  }

  private saveEvent(formValues) {
    this.eventsService.saveEvent(formValues).subscribe((event) => {
      this.router.navigate(['/events'])
      this.isDirty = false
    })
  }

  private cancel() {
    this.router.navigate(['/events'])
  }
}
