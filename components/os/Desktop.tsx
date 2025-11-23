import React from 'react';
import { AppId } from '../../types';
import { APPS } from '../../constants';
import { Icon } from '../ui/Icon';

interface DesktopProps {
  onAppLaunch: (id: AppId) => void;
}

export const Desktop: React.FC<DesktopProps> = ({ onAppLaunch }) => {
  const desktopApps = [
    AppId.ABOUT,
    AppId.EXPERIENCE,
    AppId.PROJECTS,
    AppId.EDUCATION,
    AppId.CONTACT,
  ];

  return (
    <div className="absolute inset-0 p-4 grid grid-flow-col grid-rows-[repeat(auto-fill,100px)] content-start justify-start gap-2 pointer-events-none">
      {desktopApps.map((id) => (
        <button
          key={id}
          onClick={() => onAppLaunch(id)}
          className="w-24 h-24 flex flex-col items-center justify-center gap-1 hover:bg-white/10 rounded border border-transparent hover:border-white/20 transition-all cursor-pointer pointer-events-auto group focus:bg-blue-500/30 focus:border-blue-400/50 outline-none"
        >
          <div className="relative">
            <Icon 
                name={APPS[id].icon} 
                size={40} 
                className="text-blue-400 drop-shadow-lg filter group-hover:scale-110 transition-transform duration-200" 
            />
          </div>
          <span className="text-white text-xs font-medium text-shadow text-center leading-tight line-clamp-2 px-1 drop-shadow-md bg-black/20 rounded pb-0.5">
            {APPS[id].title}
          </span>
        </button>
      ))}
       
       {/* Additional Aesthetic Icons (Non-functional or Links) */}
       <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="w-24 h-24 flex flex-col items-center justify-center gap-1 hover:bg-white/10 rounded border border-transparent hover:border-white/20 transition-all cursor-pointer pointer-events-auto group"
        >
            <Icon name="Github" size={40} className="text-slate-200 drop-shadow-lg filter group-hover:scale-110 transition-transform duration-200" />
             <span className="text-white text-xs font-medium text-shadow text-center drop-shadow-md bg-black/20 rounded">GitHub</span>
       </a>

       <a
          href="https://www.linkedin.com/in/sd-v2/"
          target="_blank"
          rel="noreferrer"
          className="w-24 h-24 flex flex-col items-center justify-center gap-1 hover:bg-white/10 rounded border border-transparent hover:border-white/20 transition-all cursor-pointer pointer-events-auto group"
        >
            <Icon name="Linkedin" size={40} className="text-blue-500 drop-shadow-lg filter group-hover:scale-110 transition-transform duration-200" />
             <span className="text-white text-xs font-medium text-shadow text-center drop-shadow-md bg-black/20 rounded">LinkedIn</span>
       </a>

       <button
          className="w-24 h-24 flex flex-col items-center justify-center gap-1 hover:bg-white/10 rounded border border-transparent hover:border-white/20 transition-all cursor-pointer pointer-events-auto group"
        >
            <Icon name="Trash2" size={40} className="text-slate-300 drop-shadow-lg filter group-hover:scale-110 transition-transform duration-200" />
             <span className="text-white text-xs font-medium text-shadow text-center drop-shadow-md bg-black/20 rounded">Recycle Bin</span>
       </button>
    </div>
  );
};