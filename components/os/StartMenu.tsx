import React from 'react';
import { APPS } from '../../constants';
import { AppId } from '../../types';
import { Icon } from '../ui/Icon';
import { generateResume } from '../../utils/generateResume';

interface StartMenuProps {
  onClose: () => void;
  onAppLaunch: (id: AppId) => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({ onClose, onAppLaunch }) => {
  // Prevent click propagation to close the menu when clicking inside
  const handleInnerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const pinnedApps = [
    AppId.ABOUT,
    AppId.PROJECTS,
    AppId.EXPERIENCE,
    AppId.CONTACT,
    AppId.VSCODE,
    AppId.TERMINAL
  ];

  const handleResumeClick = () => {
    generateResume();
    onClose();
  };

  return (
    <div 
        className="absolute bottom-12 left-2 w-80 sm:w-96 bg-slate-800/95 backdrop-blur-xl border border-slate-600 rounded-t-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-200 z-50"
        onClick={handleInnerClick}
    >
      {/* Header */}
      <div className="p-6 pb-2">
        <h2 className="text-white font-semibold mb-4 px-2">Pinned</h2>
        <div className="grid grid-cols-4 gap-4">
            {pinnedApps.map(id => (
                <button 
                    key={id}
                    onClick={() => onAppLaunch(id)}
                    className="flex flex-col items-center gap-2 p-2 rounded hover:bg-white/10 transition-colors group"
                >
                    <div className="bg-slate-700 p-2 rounded-lg group-hover:bg-slate-600 transition-colors">
                        <Icon name={APPS[id].icon} size={24} className="text-blue-400" />
                    </div>
                    <span className="text-xs text-slate-300 truncate w-full text-center">{APPS[id].title}</span>
                </button>
            ))}
        </div>
      </div>

      {/* Recommended / Recent */}
      <div className="px-6 py-4">
        <h2 className="text-white font-semibold mb-2 px-2">Recommended</h2>
        <div className="space-y-1">
            <div 
                onClick={handleResumeClick}
                className="flex items-center gap-3 p-2 rounded hover:bg-white/10 cursor-pointer"
            >
                <Icon name="FileText" size={18} className="text-yellow-500" />
                <div className="flex flex-col">
                    <span className="text-sm text-slate-200">Resume_2024.pdf</span>
                    <span className="text-[10px] text-slate-500">Recently added</span>
                </div>
            </div>
             <div 
                onClick={() => onAppLaunch(AppId.EDUCATION)}
                className="flex items-center gap-3 p-2 rounded hover:bg-white/10 cursor-pointer"
             >
                <Icon name="GraduationCap" size={18} className="text-green-500" />
                <div className="flex flex-col">
                    <span className="text-sm text-slate-200">Degree Certificate</span>
                    <span className="text-[10px] text-slate-500">10 min ago</span>
                </div>
            </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900/80 p-4 flex items-center justify-between border-t border-slate-700">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                DEV
            </div>
            <span className="text-sm text-white font-medium">DotNet Dev</span>
        </div>
        <button className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded transition-colors text-slate-400">
            <Icon name="Power" size={18} />
        </button>
      </div>
    </div>
  );
};