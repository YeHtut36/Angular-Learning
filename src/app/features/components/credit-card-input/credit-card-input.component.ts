import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {
  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '').replace(/\d{4}(?=\d)/g, '$& ');
  }
}
