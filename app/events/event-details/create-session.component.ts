import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession, restrictedWords } from '../shared/index'

@Component({
    selector: 'create-session',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input, .error select, .error textarea { background-color: #E3C3C5 }
        .error ::-webkit-input-placeholder { color: #999 }
        .error ::-moz-placeholder { color: #999 }
        .error :-moz-placeholder { color: #999 }
        .error :-ms-placeholder { color: #999 }
    `],
    templateUrl: 'app/events/event-details/create-session.component.html',

})

export class CreateSessionComponent {
    @Output() public saveNewSession = new EventEmitter()
    @Output() public cancelAddSession = new EventEmitter()
    public newSessionForm: FormGroup
    public name: FormControl
    public presenter: FormControl
    public duration: FormControl
    public level: FormControl
    public abstract: FormControl

    public ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl(
            '',
            [Validators.required,
            Validators.maxLength(400),
            restrictedWords(['foo', 'bar'])],
        )

        this.newSessionForm = new FormGroup({
            abstract: this.abstract,
            duration: this.duration,
            level: this.level,
            name: this.name,
            presenter: this.presenter,
        })
    }

    public saveSession(formValues) {
        let session: ISession = {
            abstract: formValues.abstract,
            duration: +formValues.duration,
            id: undefined,
            level: formValues.level,
            name: formValues.name,
            presenter: formValues.presenter,
            voters: [],
        }
        this.saveNewSession.emit(session)
    }

    public cancel() {
        this.cancelAddSession.emit()
    }
}
