import React from 'react';
import { Icon } from '../ui/Icon';

const extensions = [
    { name: 'C#', desc: 'C# editing support', author: 'Microsoft', installs: '24M' },
    { name: 'C# Dev Kit', desc: 'Official C# extension', author: 'Microsoft', installs: '2M' },
    { name: 'React', desc: 'ES7+ React snippets', author: 'dsznajder', installs: '10M' },
    { name: 'Tailwind', desc: 'IntelliSense', author: 'Tailwind', installs: '6M' },
    { name: 'Prettier', desc: 'Code formatter', author: 'Prettier', installs: '38M' },
    { name: 'Docker', desc: 'Docker integration', author: 'Microsoft', installs: '28M' },
];

export const Extensions: React.FC = () => {
  return (
    <div className="w-full flex flex-col h-full">
       <div className="h-9 px-4 flex items-center justify-between text-xs font-medium text-[#bbbbbb] uppercase tracking-wide flex-shrink-0">
        <span>Extensions</span>
        <div className="flex gap-2">
            <Icon name="Filter" size={14} />
            <Icon name="MoreHorizontal" size={14} />
        </div>
      </div>
      
      <div className="px-3 py-2 flex-shrink-0">
          <input 
            type="text" 
            placeholder="Search Extensions" 
            className="w-full bg-[#3c3c3c] border border-[#3c3c3c] focus:border-[#007fd4] text-white px-2 py-1 text-sm rounded-sm outline-none placeholder-gray-400"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2 text-xs text-gray-400 font-bold uppercase">Installed</div>
        
        {extensions.map((ext, i) => (
            <div key={i} className="px-3 py-2 hover:bg-[#37373d] cursor-pointer flex gap-3">
                <div className="w-8 h-8 bg-[#3c3c3c] flex items-center justify-center flex-shrink-0">
                    <Icon name="Box" size={20} className="text-[#007fd4]" />
                </div>
                <div className="flex flex-col overflow-hidden">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#cccccc] truncate">{ext.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 truncate">{ext.desc}</span>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[#cccccc]">{ext.author}</span>
                        <div className="flex items-center gap-0.5 text-gray-500">
                            <Icon name="Download" size={10} />
                            <span className="text-[10px]">{ext.installs}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};