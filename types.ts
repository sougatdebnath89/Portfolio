import { ReactNode } from 'react';

export type FileType = 'csharp' | 'json' | 'markdown' | 'typescript' | 'html';

export interface FileNode {
  id: string;
  name: string;
  type: FileType;
  content: ReactNode;
}

export interface FolderNode {
  id: string;
  name: string;
  files: FileNode[];
  isOpen: boolean;
}

export interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'system';
}

export enum AppId {
  ABOUT = 'about',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
  EDUCATION = 'education',
  VSCODE = 'vscode',
  TERMINAL = 'terminal',
}

export interface AppConfig {
  id: AppId;
  title: string;
  icon: string;
  component: ReactNode;
  width?: number;
  height?: number;
}

export interface WindowState {
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number | string; height: number | string };
  zIndex: number;
}
