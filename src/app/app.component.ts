import { Component } from '@angular/core';
import { AccordionItem } from './components/Day2/accordion/accordion-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Section 1',
      content: 'Content for section 1',
      isOpen: false
    },
    {
      title: 'Section 2',
      content: 'Content for section 2',
      isOpen: false
    },
    {
      title: 'Section 3',
      content: 'Content for section 3',
      isOpen: false
    }
  ];

   public processValue = 25;

  update(): void {
    this.processValue = Math.min(this.processValue + 10, 100);
  }

  reduce(): void {
    this.processValue = Math.max(this.processValue - 10, 0);
  }
}
