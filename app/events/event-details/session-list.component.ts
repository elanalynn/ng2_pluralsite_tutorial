import { Component, Input, OnChanges } from '@angular/core'
import { AuthService } from '../../user/auth.service'
import { ISession } from '../shared/event.model'
import { VoterService } from './voter.service'

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html',
})

export class SessionListComponent implements OnChanges {
    @Input() private sessions: ISession[]
    @Input() private filterBy: string
    @Input() private sortBy: string
    @Input() private eventId: number
    private visibleSessions: ISession[] = []

    constructor(
        private auth: AuthService,
        private voterService: VoterService,
    ) {}

    private ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBy === 'name' ?
                this.visibleSessions.sort(sortByNameAsc) :
                this.visibleSessions.sort(sortByVotesDesc)
        }
    }

    private toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName)
        } else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc)
        }
    }

    private userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }

    private filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0)
        } else {
            this.visibleSessions = this.sessions.filter((s) => {
                return s.level.toLocaleLowerCase() === filter
            })
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1
    } else if (s1.name === s2.name) {
        return 0
    } else {
        return -1
    }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s2.voters.length
}