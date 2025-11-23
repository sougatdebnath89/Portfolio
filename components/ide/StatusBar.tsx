import React from 'react';
import { Icon } from '../ui/Icon';

export const StatusBar: React.FC = () => {
  
  const showToast = (message: string) => {
    const event = new CustomEvent('vscode-notification', { 
        detail: { message, type: 'info' } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-xs select-none z-30 cursor-default">
      <div className="flex items-center gap-4">
        <div 
            className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer transition-colors"
            onClick={() => showToast("Already on the main branch.")}
        >
          <Icon name="GitBranch" size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer transition-colors">
          <Icon name="RefreshCw" size={12} />
          <span>0</span>
          <Icon name="AlertTriangle" size={12} />
          <span>0</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
          <span>Ln 12, Col 44</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
          <span>UTF-8</span>
        </div>
        <div 
            className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors"
            onClick={() => showToast("Prettier is actively formatting your experience.")}
        >
           <Icon name="Check" size={12} />
           <span>Prettier</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-white/20 px-1 rounded transition-colors">
           <Icon name="Bell" size={12} />
        </div>
      </div>
    </div>
  );
};