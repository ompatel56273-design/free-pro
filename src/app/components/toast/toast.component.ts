import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container" aria-live="polite" aria-atomic="true">
      <div *ngFor="let toast of toasts" 
           class="toast-pill" 
           [ngClass]="toast.type"
           (click)="dismiss(toast.id)">
        <span class="toast-icon">
          <svg *ngIf="toast.type === 'success'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="t-svg">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <svg *ngIf="toast.type === 'error'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="t-svg">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <svg *ngIf="toast.type === 'info'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="t-svg">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </span>
        <span class="toast-text">{{ toast.text }}</span>
        <button class="toast-close" (click)="dismiss(toast.id)" aria-label="Dismiss">&times;</button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      pointer-events: none;
      max-width: 380px;
      width: calc(100% - 3rem);
    }

    .toast-pill {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-radius: 12px;
      background: #1e293b;
      color: #ffffff;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      animation: slideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      font-size: 0.85rem;
    }

    .toast-pill.success {
      background: #064e3b;
      border-color: #10b981;
      color: #ecfdf5;
    }

    .toast-pill.error {
      background: #7f1d1d;
      border-color: #ef4444;
      color: #fef2f2;
    }

    .toast-pill.info {
      background: #1e1b4b;
      border-color: #818cf8;
      color: #e0e7ff;
    }

    .toast-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .t-svg {
      width: 17px;
      height: 17px;
    }

    .toast-text {
      flex: 1;
      font-weight: 500;
      line-height: 1.35;
    }

    .toast-close {
      background: transparent;
      border: none;
      color: inherit;
      font-size: 1.25rem;
      cursor: pointer;
      line-height: 1;
      opacity: 0.7;
      padding: 0;
    }

    .toast-close:hover {
      opacity: 1;
    }

    @keyframes slideIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `]
})
export class ToastComponent {
  constructor(private toastService: ToastService) {}

  get toasts(): ToastMessage[] {
    return this.toastService.getToasts();
  }

  dismiss(id: number): void {
    this.toastService.dismiss(id);
  }
}
