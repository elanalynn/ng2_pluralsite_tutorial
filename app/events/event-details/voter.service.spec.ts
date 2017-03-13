import { Observable } from 'rxjs/Rx'
import { ISession } from '../shared/event.model'
import { VoterService } from './voter.service'

describe('VoterService', () => {
    let voterService: VoterService
    let mockHttp

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        voterService = new VoterService(mockHttp)
    })

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            let session = { id: 6, voters: ['kate', 'megan'] }
            mockHttp.delete.and.returnValue(Observable.of(false))

            voterService.deleteVoter(3, <ISession>session, 'kate')

            expect(session.voters.length).toBe(1)
            expect(session.voters[0] === 'megan')
        })

        it('should call http.delete with the right url', () => {
            let session = { id: 6, voters: ['kate', 'megan'] }
            mockHttp.delete.and.returnValue(Observable.of(false))

            voterService.deleteVoter(3, <ISession>session, 'kate')

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/kate')
        })
    })

    describe('addVoter', () => {
        it('should call http.post with the right url', () => {
            let session = { id: 6, voters: ['kate'] }
            mockHttp.post.and.returnValue(Observable.of(false))

            voterService.addVoter(3, <ISession>session, 'megan')

            expect(mockHttp.post)
            .toHaveBeenCalledWith('/api/events/3/sessions/6/voters/megan', '{}', jasmine.any(Object))
        })
    })
})

