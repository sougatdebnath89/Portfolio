import React from 'react';
import { Icon } from '../ui/Icon';
import { FileNode } from '../../types';

interface TabListProps {
  openFiles: FileNode[];
  activeFileId: string | null;
  onTabClick: (file: FileNode) => void;
  onTabClose: (fileId: string) => void;
}

const getFileIcon = (type: string) => {
  switch (type) {
    case 'csharp': return <span className="text-green-500 font-bold text-xs mr-2">C#</span>;
    case 'json': return <span className="text-yellow-400 font-bold text-xs mr-2">{'{}'}</span>;
    case 'typescript': return <span className="text-blue-400 font-bold text-xs mr-2">TS</span>;
    case 'markdown': return <Icon name="FileText" size={14} className="text-blue-300 mr-2" />;
    default: return <Icon name="File" size={14} className="text-slate-400 mr-2" />;
  }
};

export const TabList: React.FC<TabListProps> = ({ openFiles, activeFileId, onTabClick, onTabClose }) => {
  return (
    <div className="flex bg-[#252526] h-9 overflow-x-auto no-scrollbar">
      {openFiles.map(file => (
        <div
          key={file.id}
          className={`group flex items-center px-3 min-w-[120px] max-w-[200px] border-r border-[#1e1e1e] cursor-pointer select-none ${
            activeFileId === file.id ? 'bg-[#1e1e1e] text-white' : 'bg-[#2d2d2d] text-[#969696]'
          }`}
          onClick={() => onTabClick(file)}
        >
          {getFileIcon(file.type)}
          <span className="text-sm flex-1 truncate mr-2">{file.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(file.id);
            }}
            className={`opacity-0 group-hover:opacity-100 p-0.5 rounded-sm hover:bg-[#404040] ${activeFileId === file.id ? 'text-white' : 'text-[#969696]'}`}
          >
            <Icon name="X" size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};