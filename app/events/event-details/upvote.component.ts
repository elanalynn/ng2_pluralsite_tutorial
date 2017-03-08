import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/upvote.component.html',
    styleUrls: ['/app/events/event-details/upvote.component.css']
})

export class UpvoteComponent {
    @Input() count:number
    @Input() voted:boolean
    @Output() vote = new EventEmitter()

    onClick(){
        this.vote.emit({})
    }
}