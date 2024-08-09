import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers:[
    {
      provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true
    }
  ]
})
export class EmailDirective {
  constructor(private el:ElementRef) { }
  validate(control:AbstractControl){
    console.log(control);
    const emailRegex =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    // if(!control.value){
    //   return {required:true}
    // }
    // const requiredError = Validators.required(control);
    // console.log(requiredError);
    // if (requiredError) {
    //   return requiredError;
    // }
    if(!control.value){
      return null
    }
    const valid=emailRegex.test(control.value)
    console.log(valid);
    return valid ? null : {invalidEmail:true}
  }
}
