export interface ProgramFile {
  filename: string;
  language: string;
  code: string;
}

export interface ProgramItem {
  id: string;
  number: string;
  definition: string;
  language: 'php' | 'python';
  files: ProgramFile[];
}
