import { Component, Input } from '@angular/core'

@Component({
    selector: 'collapsable-well',
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `,
})

export class CollapsableWellComponent {
    private visible: boolean = true

    private toggleContent() {
        this.visible = !this.visible
    }
}
