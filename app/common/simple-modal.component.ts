import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service'

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal.component.html',
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll; }
    `]
})

export class SimpleModalComponent {
    constructor(@Inject(JQ_TOKEN) private $:any){}
    @Input() title:string
    @ViewChild('modalContainer') containerEl:ElementRef

    closeModal(){
        this.$(this.containerEl.nativeElement).modal('hide')
    }
}