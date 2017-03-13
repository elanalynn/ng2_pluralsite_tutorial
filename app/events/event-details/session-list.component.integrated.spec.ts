import { DebugElement } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { CollapsableWellComponent } from '../../common/collapsable-well.component'
import { AuthService } from '../../user/auth.service'
import { DurationPipe } from '../shared/duration.pipe'
import { ISession } from '../shared/event.model'
import { SessionListComponent } from './session-list.component'
import { UpvoteComponent } from './upvote.component'
import { VoterService } from './voter.service'

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>
    let component: SessionListComponent
    let element: HTMLElement
    let debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = {
            currentUser: { userName: 'elanalynn'},
            isAuthenticated: () => true,
        }
        let mockVoterService = {
            userHasVoted: () => true,
        }

        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsableWellComponent,
            ],
            imports: [],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService },
            ],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent)
        component = fixture.componentInstance
        debugEl = fixture.debugElement
        element = fixture.nativeElement
    })

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [
                {
                    abstract: 'abstract',
                    duration: 2,
                    id: 3,
                    level: 'beginner',
                    name: 'Session 1',
                    presenter: 'Mary',
                    voters: ['annie', 'glenn'],
                },
            ]

            component.filterBy = 'all'
            component.sortBy = 'name'
            component.eventId = 4

            component.ngOnChanges()
            fixture.detectChanges()

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1')
        })
    })
})
