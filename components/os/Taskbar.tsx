import React, { useState, useEffect } from 'react';
import { AppId } from '../../types';
import { APPS } from '../../constants';
import { Icon } from '../ui/Icon';
import { StartMenu } from './StartMenu';

interface TaskbarProps {
  openApps: AppId[];
  activeAppId: AppId | null;
  onAppClick: (id: AppId) => void;
  onStartClick: () => void;
  isStartOpen: boolean;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  openApps,
  activeAppId,
  onAppClick,
  onStartClick,
  isStartOpen,
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <>
      {isStartOpen && (
        <StartMenu 
            onClose={() => onStartClick()} 
            onAppLaunch={(id) => {
                onAppClick(id);
                onStartClick(); // Close menu after launch
            }}
        />
      )}
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-slate-900/80 backdrop-blur-lg border-t border-white/10 flex items-center justify-between px-2 z-50 select-none">
        <div className="flex items-center gap-2 h-full">
          {/* Start Button */}
          <button
            onClick={onStartClick}
            className={`h-10 px-3 rounded hover:bg-white/10 flex items-center gap-2 transition-all ${
              isStartOpen ? 'bg-white/20' : ''
            }`}
          >
            <Icon name="Monitor" size={20} className="text-blue-400" />
            <span className="text-white font-bold text-sm hidden sm:block">Start</span>
          </button>

          {/* Search Bar (Visual only) */}
          <div className="hidden md:flex items-center bg-white/10 rounded-full px-3 h-8 w-48 mx-2 border border-white/5">
            <Icon name="Search" size={14} className="text-slate-400 mr-2" />
            <span className="text-slate-400 text-xs">Type here to search</span>
          </div>

          <div className="w-px h-6 bg-white/10 mx-1"></div>

          {/* Open Apps */}
          <div className="flex items-center gap-1">
            {openApps.map((appId) => (
              <button
                key={appId}
                onClick={() => onAppClick(appId)}
                className={`h-10 px-3 rounded flex items-center gap-2 transition-all border-b-2 ${
                  activeAppId === appId
                    ? 'bg-white/10 border-blue-400'
                    : 'hover:bg-white/5 border-transparent'
                }`}
              >
                <Icon name={APPS[appId].icon} size={18} className="text-slate-200" />
                <span className="text-slate-200 text-xs hidden lg:block truncate max-w-[100px]">
                  {APPS[appId].title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-4 px-2">
            <div className="hidden sm:flex items-center gap-2 text-slate-300">
                <Icon name="Wifi" size={16} />
                <Icon name="Volume2" size={16} />
                <Icon name="BatteryMedium" size={16} />
            </div>
            <div className="flex flex-col items-end justify-center text-white leading-tight">
                <span className="text-xs font-medium">{formatTime(time)}</span>
                <span className="text-[10px] text-slate-400">{formatDate(time)}</span>
            </div>
        </div>
      </div>
    </>
  );
};