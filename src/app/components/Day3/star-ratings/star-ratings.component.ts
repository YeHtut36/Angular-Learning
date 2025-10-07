import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-ratings',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for ngClass
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() rating = 0;
  stars = Array(5).fill(0);

  setRating(value: number): void {
    this.rating = value;
  }
}
