import { Input } from "@angular/core";
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";

export function timeValidation(
  control: AbstractControl
): ValidationErrors | null {
  const startTime = control.get("start");
  const stopTime = control.get("stop");
  return new Date(startTime!.value) > new Date(stopTime!.value)
    ? { "start time grater than stop time": true }
    : null;
}

export function validationStart(val: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const startTime = control.value;
    if (control.pristine) {
      return null;
    }
    console.log(startTime);
    console.log(val);
    return new Date(startTime) < val
      ? { "start time older than initial time": true }
      : null;
  };
}

export function validationStop(val: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const stopTime = control.value;
    if (control.pristine) {
      return null;
    }
    return new Date(stopTime) > val
      ? { "stop time newer than initial time": true }
      : null;
  };
}
