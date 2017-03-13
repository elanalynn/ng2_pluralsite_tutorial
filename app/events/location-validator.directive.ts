import { Directive } from '@angular/core'
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms'

@Directive({
    providers: [
        {
            multi: true,
            provide: NG_VALIDATORS,
            useExisting: LocationValidator,
        },
    ],
    selector: '[validateLocation]',
})

export class LocationValidator implements Validator {
    private validate(formGroup: FormGroup): { [key: string]: any } {
        let addressCtrl = formGroup.controls['address']
        let cityCtrl = formGroup.controls['city']
        let countryCtrl = formGroup.controls['country']
        let onlineUrlCtrl = (<FormGroup>formGroup.root).controls['onlineUrl']

        if (
            (addressCtrl && addressCtrl.value && cityCtrl && cityCtrl.value && countryCtrl && countryCtrl.value) ||
            (onlineUrlCtrl && onlineUrlCtrl.value)) {
            return null
        } else {
            return { validation: false }
        }
    }
}
