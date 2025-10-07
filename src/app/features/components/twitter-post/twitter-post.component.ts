import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-post',
  template: `
    <div class="twitter-post">
      <h3>{{ username }}</h3>
      <p>{{ content }}</p>
    </div>
  `,
  styles: [
    `.twitter-post {
      border: 1px solid #e1e8ed;
      padding: 10px;
      border-radius: 8px;
      background-color: #f5f8fa;
    }

    h3 {
      margin: 0;
      font-size: 16px;
      color: #1da1f2;
    }

    p {
      margin: 5px 0 0;
      font-size: 14px;
      color: #14171a;
    }`
  ]
})
export class TwitterPostComponent {
  @Input() username!: string;
  @Input() content!: string;
}
