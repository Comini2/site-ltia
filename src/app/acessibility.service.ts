import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcessibilityService {

  public static accessibilityIsOn = false;

  static changeAccessibilityState() {
    AcessibilityService.accessibilityIsOn = !AcessibilityService.accessibilityIsOn;
    console.log(AcessibilityService.accessibilityIsOn);
  }

  constructor() { }
}
