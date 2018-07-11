import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appValidateEqual][formControlName],' +
  '[appValidateEqual][formControl],[appValidateEqual][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true}
  ]
})

export class EqualValidatorDirective implements Validator {

  constructor(
    @Attribute('appValidateEqual') public appValidateEqual: string,
    @Attribute('reverse') public reverse: string) {}
  private get isReverse() {
    if (!this.reverse) { return false; }
    return this.reverse === 'true';
  }
  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    const v = c.value;
    // control value
    const e = c.root.get(this.appValidateEqual);
    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      return {
        appValidateEqual: true
      };
    }
    // value equal and reverse
    if (e && v === e.value && this.isReverse) {
      delete e.errors['appValidateEqual'];
      if (!Object.keys(e.errors).length) { e.setErrors(null); }
    }
    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({ appValidateEqual: true });
    }
    return null;
  }
}
