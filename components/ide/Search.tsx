import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { FileNode } from '../../types';

interface SearchProps {
  onOpenFile: (file: FileNode) => void;
  availableFiles: FileNode[];
}

export const Search: React.FC<SearchProps> = ({ onOpenFile, availableFiles }) => {
  const [query, setQuery] = useState('');

  const results = query 
    ? availableFiles.filter(f => f.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="w-full flex flex-col h-full">
      <div className="h-9 px-4 flex items-center text-xs font-medium text-[#bbbbbb] uppercase tracking-wide flex-shrink-0">
        Search
      </div>
      <div className="px-4 py-2 flex-shrink-0">
        <div className="relative">
            <input 
                type="text" 
                placeholder="Search" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-[#3c3c3c] border border-[#3c3c3c] focus:border-[#007fd4] text-white px-2 py-1 text-sm rounded-sm outline-none placeholder-gray-400"
            />
            <div className="absolute right-2 top-1.5 text-gray-400">
                <Icon name="CaseSensitive" size={14} />
            </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-2">
        {query && (
            <div className="text-xs text-gray-400 mb-2 px-2">
                {results.length} result(s) found
            </div>
        )}
        {query && results.map(file => (
            <div 
                key={file.id}
                onClick={() => onOpenFile(file)}
                className="flex flex-col cursor-pointer hover:bg-[#37373d] rounded p-1 mb-1 group"
            >
                <div className="flex items-center gap-2 text-sm text-[#cccccc]">
                    <Icon name="File" size={14} className="text-gray-500" />
                    <span>{file.name}</span>
                </div>
                <div className="pl-6 text-xs text-gray-500 truncate">
                    Match found in content...
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};