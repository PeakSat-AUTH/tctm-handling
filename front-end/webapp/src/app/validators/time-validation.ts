import { AbstractControl, ValidationErrors } from "@angular/forms";

export function timeValidation(
  control: AbstractControl
): ValidationErrors | null {
  const startTime = control.get("start");
  const stopTime = control.get("stop");
  return new Date(startTime!.value) > new Date(stopTime!.value)
    ? { "start time grater than stop time": true }
    : null;
}
