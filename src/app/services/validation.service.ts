import { Injectable } from '@angular/core';
import { ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

 
 


  constructor() { }
}

export const regExps: { [key: string]: RegExp } = {
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
};
