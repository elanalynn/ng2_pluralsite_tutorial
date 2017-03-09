import { Directive } from '@angular/core'
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms'

@Directive({
    selector: '[validateLocation]',
    providers: [
        {
            provide: NG_VALIDATORS, 
            useExisting: LocationValidator, 
            multi: true 
        }
    ]
})

export class LocationValidator implements Validator {
    validate(formGroup:FormGroup):{ [key:string]:any }{
        let addressCtrl = formGroup.controls['address']
        let cityCtrl = formGroup.controls['city']
        let countryCtrl = formGroup.controls['country']
        let onlineUrlCtrl = (<FormGroup>formGroup.root).controls['onlineUrl']

        if((addressCtrl && addressCtrl.value && cityCtrl && cityCtrl.value && countryCtrl && countryCtrl.value) || (onlineUrlCtrl && onlineUrlCtrl.value)) { 
            return null 
        } else {
            return { validation: false }
        }
    }

    
    
}