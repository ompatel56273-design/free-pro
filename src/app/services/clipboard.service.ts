import { Injectable } from '@angular/core';
import { ProgramItem } from '../models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  /**
   * Copies text to the clipboard with fallback support for non-secure contexts
   * or environments where navigator.clipboard might be blocked.
   */
  async copyText(text: string): Promise<boolean> {
    if (!text) {
      return false;
    }

    // 1. Try modern Clipboard API
    if (navigator?.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.warn('Clipboard API failed, attempting fallback...', err);
      }
    }

    // 2. Fallback using hidden textarea
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '-9999px';
      textArea.style.opacity = '0';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error('Fallback clipboard copy failed:', err);
      return false;
    }
  }

  /**
   * Generates a clean text block containing every program's number, definition, and code.
   * No categories, notes, website descriptions, or UI text are included.
   */
  formatAllPrograms(programs: ProgramItem[]): string {
    return programs.map(prog => {
      const header = `Program ${prog.number}: ${prog.definition}`;
      const codeBlocks = prog.files.map(f => {
        if (prog.files.length > 1) {
          return `${f.filename}\n${f.code}`;
        }
        return f.code;
      }).join('\n\n');
      return `${header}\n\n${codeBlocks}`;
    }).join('\n\n================================================================================\n\n');
  }

  formatAllPhpCode(programs: ProgramItem[]): string {
    return this.formatAllPrograms(programs);
  }

  formatAllGenAiCode(programs: ProgramItem[]): string {
    return this.formatAllPrograms(programs);
  }

  formatSingleProgram(prog: ProgramItem): string {
    const header = `Program ${prog.number}: ${prog.definition}`;
    const codeBlocks = prog.files.map(f => {
      if (prog.files.length > 1) {
        return `${f.filename}\n${f.code}`;
      }
      return f.code;
    }).join('\n\n');
    return `${header}\n\n${codeBlocks}`;
  }
}
