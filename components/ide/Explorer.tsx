import React from 'react';
import { Icon } from '../ui/Icon';
import { FolderNode, FileNode } from '../../types';

interface ExplorerProps {
  folders: FolderNode[];
  activeFileId: string | null;
  onFileClick: (file: FileNode) => void;
  onToggleFolder: (folderId: string) => void;
}

const getFileIcon = (type: string) => {
  switch (type) {
    case 'csharp': return <span className="text-green-500 font-bold text-xs mr-1">C#</span>;
    case 'json': return <span className="text-yellow-400 font-bold text-xs mr-1">{}</span>;
    case 'typescript': return <span className="text-blue-400 font-bold text-xs mr-1">TS</span>;
    case 'markdown': return <Icon name="FileText" size={14} className="text-blue-300 mr-1" />;
    default: return <Icon name="File" size={14} className="text-slate-400 mr-1" />;
  }
};

export const Explorer: React.FC<ExplorerProps> = ({ folders, activeFileId, onFileClick, onToggleFolder }) => {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="h-9 px-4 flex items-center text-xs font-medium text-[#bbbbbb] uppercase tracking-wide flex-shrink-0">
        Explorer
      </div>
      
      {/* Project Title */}
      <div className="px-0 py-0 flex-shrink-0">
         <div className="flex items-center px-1 py-1 cursor-pointer bg-[#37373d] text-white text-xs font-bold">
            <Icon name="ChevronDown" size={14} className="mr-1" />
            PORTFOLIO
         </div>
      </div>

      {/* Tree */}
      <div className="flex-1 overflow-y-auto">
        {folders.map(folder => (
          <div key={folder.id}>
            <div 
              className="flex items-center px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc]"
              onClick={() => onToggleFolder(folder.id)}
            >
              <Icon name={folder.isOpen ? "ChevronDown" : "ChevronRight"} size={14} className="mr-1" />
              <span className="text-sm font-medium">{folder.name}</span>
            </div>
            
            {folder.isOpen && (
              <div className="ml-0">
                {folder.files.map(file => (
                  <div
                    key={file.id}
                    onClick={() => onFileClick(file)}
                    className={`flex items-center pl-6 pr-2 py-1 cursor-pointer text-sm ${
                      activeFileId === file.id 
                        ? 'bg-[#37373d] text-white' 
                        : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                    }`}
                  >
                    {getFileIcon(file.type)}
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};