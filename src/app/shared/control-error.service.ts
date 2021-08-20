import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlErrorService {

  constructor() { }

  hasErrorValidators(control: AbstractControl, errorName:string){
    if(( control.touched ) && this.hasError(control, errorName)){
      return true
    }
      return false
  }

  hasErrorComponents(control: AbstractControl){
    if( control.touched && control.invalid) {
      return true
    }
      return false
  }

  hasError(control: AbstractControl, errorName:string): boolean {
    return control.hasError(errorName);
  }

  hasErrorLength(control: AbstractControl, errorName:string): number {
    const error = control.errors?.[errorName]
    console.log(error)
    return error.requiredLength || error.min || error.max || 0;

  }
}
