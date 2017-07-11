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
  pinStateSubscribe: any;
  onSubmit(): void {
    this.click();
    this.sendPinData();
  }

  sendPinData(): void {
    this.pinService.setPinState(this.pin);
    if (this.pin.input && this.pin.enabled) {
      this.subscribePinState();
    }
  }

  subscribePinState(): void {
    this.pinService.setPinStateSubscribe(this.pin, this.pin.checkInterval);
    this.pinStateSubscribe = this.pinService.pinStateSubscribe.subscribe(pin => {
      if (!this.isEditMode) {
        this.pin = pin;
      } else {
        this.pinStateSubscribe.unsubscribe();
      }
    });
  }
}
