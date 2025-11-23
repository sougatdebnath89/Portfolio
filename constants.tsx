import React from 'react';
import { FolderNode, FileNode, AppId, AppConfig } from './types';
import { AboutMe } from './components/apps/AboutMe';
import { Experience } from './components/apps/Experience';
import { Projects } from './components/apps/Projects';
import { Education } from './components/apps/Education';
import { Contact } from './components/apps/Contact';

export const PROFILE_FILES: FileNode[] = [
  {
    id: 'about',
    name: 'AboutMe.cs',
    type: 'csharp',
    content: <AboutMe />
  },
  {
    id: 'experience',
    name: 'Experience.cs',
    type: 'csharp',
    content: <Experience />
  },
  {
    id: 'projects',
    name: 'projects.json',
    type: 'json',
    content: <Projects />
  },
  {
    id: 'education',
    name: 'Education.md',
    type: 'markdown',
    content: <Education />
  },
  {
    id: 'contact',
    name: 'ContactInfo.ts',
    type: 'typescript',
    content: <Contact />
  }
];

export const INITIAL_FOLDERS: FolderNode[] = [
  {
    id: 'src',
    name: 'src',
    isOpen: true,
    files: PROFILE_FILES
  }
];

export const APPS: Record<AppId, AppConfig> = {
  [AppId.ABOUT]: {
    id: AppId.ABOUT,
    title: 'About Me',
    icon: 'User',
    component: <AboutMe />
  },
  [AppId.EXPERIENCE]: {
    id: AppId.EXPERIENCE,
    title: 'Experience',
    icon: 'Briefcase',
    component: <Experience />
  },
  [AppId.PROJECTS]: {
    id: AppId.PROJECTS,
    title: 'Projects',
    icon: 'FolderGit2',
    component: <Projects />
  },
  [AppId.EDUCATION]: {
    id: AppId.EDUCATION,
    title: 'Education',
    icon: 'GraduationCap',
    component: <Education />
  },
  [AppId.CONTACT]: {
    id: AppId.CONTACT,
    title: 'Contact',
    icon: 'Mail',
    component: <Contact />
  },
  [AppId.VSCODE]: {
    id: AppId.VSCODE,
    title: 'VS Code',
    icon: 'Code2',
    component: <div className="flex items-center justify-center h-full bg-[#1e1e1e] text-slate-400">VS Code App</div>
  },
  [AppId.TERMINAL]: {
    id: AppId.TERMINAL,
    title: 'Terminal',
    icon: 'Terminal',
    component: <div className="flex items-center justify-center h-full bg-black text-slate-200 font-mono">Terminal App</div>
  }
};
