import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramItem } from '../../models/program.model';
import { CodeBlockComponent } from '../code-block/code-block.component';
import { ClipboardService } from '../../services/clipboard.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  templateUrl: './program-card.component.html',
  styleUrl: './program-card.component.css'
})
export class ProgramCardComponent {
  @Input({ required: true }) program!: ProgramItem;

  copyProgramStatus: 'idle' | 'copied' | 'error' = 'idle';
  private resetTimeout: any;

  constructor(
    private clipboardService: ClipboardService,
    private toastService: ToastService
  ) {}

  get isMultiFile(): boolean {
    return this.program.files.length > 1;
  }

  async copyEntireProgram(): Promise<void> {
    clearTimeout(this.resetTimeout);
    const combined = this.clipboardService.formatSingleProgram(this.program);
    const success = await this.clipboardService.copyText(combined);

    if (success) {
      this.copyProgramStatus = 'copied';
      this.toastService.show(`Copied Program ${this.program.number} (${this.program.files.length} file${this.program.files.length > 1 ? 's' : ''})!`, 'success', 2500);
      this.resetTimeout = setTimeout(() => {
        this.copyProgramStatus = 'idle';
      }, 2500);
    } else {
      this.copyProgramStatus = 'error';
      this.toastService.show(`Failed to copy Program ${this.program.number}`, 'error', 3000);
      this.resetTimeout = setTimeout(() => {
        this.copyProgramStatus = 'idle';
      }, 3000);
    }
  }
}
