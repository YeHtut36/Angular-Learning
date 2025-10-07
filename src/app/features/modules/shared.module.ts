import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { CreditCardFormatterPipe } from '../pipes/credit-card-formatter.pipe';
import { FlattenPipe } from '../pipes/flatten.pipe';
import { DebounceClickDirective } from '../directives/debounce-click.directive';

@NgModule({
  declarations: [
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    DebounceClickDirective
  ],
  imports: [CommonModule],
  exports: [
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    DebounceClickDirective
  ]
})
export class SharedModule {}
