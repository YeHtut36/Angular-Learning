import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\d{4}(?=\d)/g, '$& ');
  }
}
