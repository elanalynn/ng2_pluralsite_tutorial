import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'upvote',
    styleUrls: ['/app/events/event-details/upvote.component.css'],
    templateUrl: 'app/events/event-details/upvote.component.html',
})

export class UpvoteComponent {
    @Input() private count: number
    @Input() private voted: boolean
    @Output() private vote = new EventEmitter()

    private onClick() {
        this.vote.emit({})
    }
}
