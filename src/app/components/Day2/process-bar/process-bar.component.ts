import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.scss']
})
export class ProcessBarComponent {
 @Input() public value = 0;
 @Input() public max = 100;
}
