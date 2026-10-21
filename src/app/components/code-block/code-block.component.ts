import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardService } from '../../services/clipboard.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.css'
})
export class CodeBlockComponent {
  @Input() filename = '';
  @Input() language = '';
  @Input({ required: true }) code!: string;
  @Input() showLineNumbers = true;

  copyStatus: 'idle' | 'copied' | 'error' = 'idle';
  private resetTimeout: any;

  constructor(
    private clipboardService: ClipboardService,
    private toastService: ToastService
  ) {}

  get lines(): string[] {
    return this.code ? this.code.split('\n') : [];
  }

  get lineCount(): number {
    return this.lines.length;
  }

  async copyCode(): Promise<void> {
    clearTimeout(this.resetTimeout);
    const success = await this.clipboardService.copyText(this.code);

    if (success) {
      this.copyStatus = 'copied';
      const label = this.filename ? `Copied ${this.filename}!` : 'Code copied to clipboard!';
      this.toastService.show(label, 'success', 2000);
      this.resetTimeout = setTimeout(() => {
        this.copyStatus = 'idle';
      }, 2000);
    } else {
      this.copyStatus = 'error';
      this.toastService.show('Failed to copy code. Check clipboard permissions.', 'error', 3000);
      this.resetTimeout = setTimeout(() => {
        this.copyStatus = 'idle';
      }, 3000);
    }
  }
}
