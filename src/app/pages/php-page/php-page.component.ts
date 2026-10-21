import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PHP_PROGRAMS } from '../../data/php-programs';
import { ProgramItem } from '../../models/program.model';
import { ProgramCardComponent } from '../../components/program-card/program-card.component';
import { ClipboardService } from '../../services/clipboard.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-php-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgramCardComponent],
  templateUrl: './php-page.component.html',
  styleUrl: './php-page.component.css'
})
export class PhpPageComponent implements OnInit {
  // Underlying complete dataset
  readonly allPrograms: ProgramItem[] = PHP_PROGRAMS;

  // Search filter
  searchTerm = '';

  // Copy All state
  copyAllStatus: 'idle' | 'copying' | 'copied' | 'error' = 'idle';
  private copyTimeout: any;

  totalPrograms = 0;

  constructor(
    private clipboardService: ClipboardService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.totalPrograms = this.allPrograms.length;
  }

  get filteredPrograms(): ProgramItem[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.allPrograms;
    }

    return this.allPrograms.filter(prog => {
      // 1. Program number
      if (prog.number.toLowerCase().includes(term)) {
        return true;
      }
      // 2. Definition
      if (prog.definition.toLowerCase().includes(term)) {
        return true;
      }
      // 3. Source code
      if (prog.files.some(f => f.code.toLowerCase().includes(term))) {
        return true;
      }
      // 4. Filename (for multi-file programs)
      if (prog.files.some(f => f.filename.toLowerCase().includes(term))) {
        return true;
      }
      return false;
    });
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  async copyAllPhpCode(): Promise<void> {
    clearTimeout(this.copyTimeout);
    this.copyAllStatus = 'copying';

    // Must copy every program from the complete dataset, regardless of active search filter
    const formattedCode = this.clipboardService.formatAllPhpCode(this.allPrograms);
    const success = await this.clipboardService.copyText(formattedCode);

    if (success) {
      this.copyAllStatus = 'copied';
      this.toastService.show(
        `All ${this.totalPrograms} PHP practical programs copied to clipboard!`,
        'success',
        3000
      );
      this.copyTimeout = setTimeout(() => {
        this.copyAllStatus = 'idle';
      }, 3000);
    } else {
      this.copyAllStatus = 'error';
      this.toastService.show(
        'Failed to copy PHP code. Check clipboard permissions.',
        'error',
        3500
      );
      this.copyTimeout = setTimeout(() => {
        this.copyAllStatus = 'idle';
      }, 3500);
    }
  }
}
