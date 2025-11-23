import React from 'react';
import { Icon } from '../ui/Icon';

export const SourceControl: React.FC = () => {
  const handleCommit = () => {
    // Dispatch custom event for global toast
    const event = new CustomEvent('vscode-notification', { 
        detail: { 
            message: "Pushing changes to main branch... Error: Repository is Read-Only.",
            type: 'error'
        } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="w-full flex flex-col h-full">
      <div className="h-9 px-4 flex items-center justify-between text-xs font-medium text-[#bbbbbb] uppercase tracking-wide flex-shrink-0">
        <span>Source Control</span>
        <div className="flex gap-2">
            <Icon name="ListFilter" size={14} />
            <Icon name="MoreHorizontal" size={14} />
        </div>
      </div>
      
      <div className="px-2 py-2 flex-shrink-0">
         <div className="text-xs text-gray-400 mb-2 px-2 uppercase font-bold">Repositories</div>
         <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#37373d] cursor-pointer rounded text-[#cccccc] text-sm">
            <Icon name="GitBranch" size={14} />
            <span>Portfolio (Git)</span>
         </div>
      </div>

      <div className="px-2 mt-2 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1 px-2 uppercase font-bold group cursor-pointer">
            <div className="flex items-center gap-1">
                <Icon name="ChevronDown" size={14} />
                <span>Changes</span>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100">
                <Icon name="Plus" size={14} />
                <Icon name="RotateCcw" size={14} />
            </div>
        </div>
        
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#37373d] cursor-pointer rounded text-[#cccccc] text-sm group">
            <span className="text-yellow-500 font-bold text-xs w-3">M</span>
            <span>Resume_2024.pdf</span>
            <span className="text-xs text-gray-500 ml-auto">src</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#37373d] cursor-pointer rounded text-[#cccccc] text-sm group">
            <span className="text-green-500 font-bold text-xs w-3">U</span>
            <span>ContactInfo.ts</span>
            <span className="text-xs text-gray-500 ml-auto">src</span>
        </div>
        
        <div className="mt-4 px-2">
            <button 
                onClick={handleCommit}
                className="w-full bg-[#007fd4] hover:bg-[#0060a0] text-white text-xs py-1.5 px-3 rounded cursor-pointer text-center transition-colors"
            >
                Commit & Push
            </button>
        </div>
      </div>
    </div>
  );
};