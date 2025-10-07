import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linkedin-post',
  template: `
    <div class="linkedin-post">
      <h3>{{ name }}</h3>
      <p>{{ post }}</p>
    </div>
  `,
  styles: [
    `.linkedin-post {
      border: 1px solid #d1d1d1;
      padding: 10px;
      border-radius: 8px;
      background-color: #f3f3f3;
    }

    h3 {
      margin: 0;
      font-size: 16px;
      color: #0077b5;
    }

    p {
      margin: 5px 0 0;
      font-size: 14px;
      color: #333;
    }`
  ]
})
export class LinkedInPostComponent {
  @Input() name!: string;
  @Input() post!: string;
}
