import React from 'react';
import { Icon } from '../ui/Icon';

interface ActivityBarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export const ActivityBar: React.FC<ActivityBarProps> = ({ activeView, onViewChange }) => {
  const items = [
    { id: 'explorer', icon: 'Files', label: 'Explorer' },
    { id: 'search', icon: 'Search', label: 'Search' },
    { id: 'git', icon: 'GitBranch', label: 'Source Control' },
    { id: 'debug', icon: 'Bug', label: 'Run and Debug' },
    { id: 'extensions', icon: 'Blocks', label: 'Extensions' },
  ];

  return (
    <div className="w-12 flex flex-col items-center bg-[#333333] border-r border-[#1e1e1e] py-2 z-20">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onViewChange(item.id)}
          title={item.label}
          className={`w-12 h-12 flex items-center justify-center mb-1 transition-colors relative ${
            activeView === item.id ? 'text-white' : 'text-[#858585] hover:text-white'
          }`}
        >
          {activeView === item.id && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>
          )}
          <Icon name={item.icon} size={24} />
        </button>
      ))}
      <div className="flex-1"></div>
      <button className="w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white">
        <Icon name="Settings" size={24} />
      </button>
      <button className="w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white mb-2">
        <Icon name="UserCircle" size={24} />
      </button>
    </div>
  );
};