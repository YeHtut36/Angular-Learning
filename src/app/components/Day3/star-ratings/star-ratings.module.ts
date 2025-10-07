import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  template: `
    <span
      *ngFor="let star of stars; let i = index"
      class="star"
      [class.filled]="i < rating"
      (click)="setRating(i + 1)"
      (mouseenter)="hovering = true; tempRating = i + 1"
      (mouseleave)="hovering = false"
      >★</span
    >
  `,
  styles: [
    `
      .star {
        font-size: 2rem;
        cursor: pointer;
      }
      .filled {
        color: gold;
      }
    `,
  ],
})
export class StarRatingsComponent {
  @Input() rating = 0;
  stars: number[] = [1, 2, 3, 4, 5];
  hovering = false;
  tempRating = 0;

  setRating(rating: number) {
    this.rating = rating;
  }
}
