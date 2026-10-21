import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GENAI_PROGRAMS } from '../../data/genai-programs';
import { ProgramItem } from '../../models/program.model';
import { ProgramCardComponent } from '../../components/program-card/program-card.component';
import { ClipboardService } from '../../services/clipboard.service';
import { ToastService } from '../../services/toast.service';

export interface SetupCommand {
  id: number;
  label: string;
  command: string;
  copyStatus: 'idle' | 'copied' | 'error';
}

@Component({
  selector: 'app-genai-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgramCardComponent],
  templateUrl: './genai-page.component.html',
  styleUrl: './genai-page.component.css'
})
export class GenaiPageComponent implements OnInit {
  // Python Environment Setup Commands (exact 4 commands)
  readonly setupCommands: SetupCommand[] = [
    {
      id: 1,
      label: 'Command 1',
      command: 'py -m pip install transformers==4.57.1',
      copyStatus: 'idle'
    },
    {
      id: 2,
      label: 'Command 2',
      command: 'py -m pip install torch sentencepiece',
      copyStatus: 'idle'
    },
    {
      id: 3,
      label: 'Command 3',
      command: 'py -m pip install jupyterlab',
      copyStatus: 'idle'
    },
    {
      id: 4,
      label: 'Command 4',
      command: 'py -m jupyter lab',
      copyStatus: 'idle'
    }
  ];

  // Setup Commands Copy All state
  copyAllCommandsStatus: 'idle' | 'copying' | 'copied' | 'error' = 'idle';
  private copyAllCommandsTimeout: any;

  // Underlying complete dataset (exact 27 programs from PDF)
  readonly allPrograms: ProgramItem[] = GENAI_PROGRAMS;

  // Search filter
  searchTerm = '';

  // Copy All button state
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

  /**
   * Copies an individual setup command to the clipboard
   */
  async copySingleCommand(cmd: SetupCommand): Promise<void> {
    const success = await this.clipboardService.copyText(cmd.command);

    if (success) {
      cmd.copyStatus = 'copied';
      this.toastService.show('Copied!', 'success', 2000);
      setTimeout(() => {
        cmd.copyStatus = 'idle';
      }, 2000);
    } else {
      cmd.copyStatus = 'error';
      this.toastService.show('Failed to copy command.', 'error', 3000);
      setTimeout(() => {
        cmd.copyStatus = 'idle';
      }, 3000);
    }
  }

  /**
   * Copies all four setup commands into the clipboard, in original order, one command per line
   */
  async copyAllCommands(): Promise<void> {
    clearTimeout(this.copyAllCommandsTimeout);
    this.copyAllCommandsStatus = 'copying';

    const textToCopy = this.setupCommands.map(c => c.command).join('\n');
    const success = await this.clipboardService.copyText(textToCopy);

    if (success) {
      this.copyAllCommandsStatus = 'copied';
      this.toastService.show('All commands copied!', 'success', 2500);
      this.copyAllCommandsTimeout = setTimeout(() => {
        this.copyAllCommandsStatus = 'idle';
      }, 2500);
    } else {
      this.copyAllCommandsStatus = 'error';
      this.toastService.show('Failed to copy setup commands.', 'error', 3000);
      this.copyAllCommandsTimeout = setTimeout(() => {
        this.copyAllCommandsStatus = 'idle';
      }, 3000);
    }
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
      return false;
    });
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  async copyAllGenaiCode(): Promise<void> {
    clearTimeout(this.copyTimeout);
    this.copyAllStatus = 'copying';

    // Must copy every program from the complete dataset, regardless of active search filter
    const formattedCode = this.clipboardService.formatAllGenAiCode(this.allPrograms);
    const success = await this.clipboardService.copyText(formattedCode);

    if (success) {
      this.copyAllStatus = 'copied';
      this.toastService.show(
        `All ${this.totalPrograms} GenAI practical programs copied to clipboard!`,
        'success',
        3000
      );
      this.copyTimeout = setTimeout(() => {
        this.copyAllStatus = 'idle';
      }, 3000);
    } else {
      this.copyAllStatus = 'error';
      this.toastService.show(
        'Failed to copy GenAI code. Check clipboard permissions.',
        'error',
        3500
      );
      this.copyTimeout = setTimeout(() => {
        this.copyAllStatus = 'idle';
      }, 3500);
    }
  }
}
