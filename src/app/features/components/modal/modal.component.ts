import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal" *ngIf="isVisible">
      <div class="modal-content">
        <ng-content></ng-content>
        <button (click)="close()">Close</button>
      </div>
    </div>
  `,
  styles: [
    `.modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }

    button {
      margin-top: 10px;
      padding: 5px 10px;
      border: none;
      background: #007bff;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }`
  ]
})
export class ModalComponent {
  @Input() isVisible = false;
  @Output() closeEvent = new EventEmitter<void>();

  close(): void {
    this.isVisible = false;
    this.closeEvent.emit();
  }
}
