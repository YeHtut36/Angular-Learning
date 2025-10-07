import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-loading',
  template: '<div class="loading-spinner"></div>',
  styles: [
    `.loading-spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left-color: #09f;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }`
  ]
})
export class LoaderLoadingComponent {}
