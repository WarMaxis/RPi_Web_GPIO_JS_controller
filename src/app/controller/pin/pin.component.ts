import { Component, Input } from '@angular/core';
import { Pin } from './pin.model';
import { PinService } from './pin.service';

@Component({
  selector: 'pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css'],
  providers: [ PinService ]
})
export class PinComponent {
  constructor (private pinService: PinService) {}
  @Input() pin: Pin;
  isEditMode: boolean = false;
  click(): void {
    this.isEditMode = !this.isEditMode;
  }
  send(): void {
    this.click();
    this.pinService.setPinState(this.pin);
  }
}
