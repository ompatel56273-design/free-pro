import { Injectable } from '@angular/core';

export interface ToastMessage {
  id: number;
  text: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: ToastMessage[] = [];
  private nextId = 1;

  getToasts(): ToastMessage[] {
    return this.toasts;
  }

  show(text: string, type: 'success' | 'error' | 'info' = 'success', duration = 3000): void {
    const id = this.nextId++;
    const toast: ToastMessage = { id, text, type, duration };
    this.toasts.push(toast);

    setTimeout(() => {
      this.dismiss(id);
    }, duration);
  }

  dismiss(id: number): void {
    const index = this.toasts.findIndex(t => t.id === id);
    if (index !== -1) {
      this.toasts.splice(index, 1);
    }
  }
}
