import React, { useState, useEffect, useRef } from 'react';
import { AppConfig, WindowState } from '../../types';
import { Icon } from '../ui/Icon';

interface WindowProps {
  config: AppConfig;
  state: WindowState;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
}

export const Window: React.FC<WindowProps> = ({
  config,
  state,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onMove,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (state.isMaximized) return;
    setIsDragging(true);
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        onMove(e.clientX - dragOffset.x, e.clientY - dragOffset.y);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, onMove]);

  if (state.isMinimized) return null;

  return (
    <div
      ref={windowRef}
      className={`absolute flex flex-col bg-slate-100/90 backdrop-blur-md shadow-2xl border border-white/20 rounded-lg overflow-hidden transition-all duration-200 ease-out ${
        state.isMaximized ? 'inset-0 rounded-none m-0' : ''
      }`}
      style={{
        left: state.isMaximized ? 0 : state.position.x,
        top: state.isMaximized ? 0 : state.position.y,
        width: state.isMaximized ? '100%' : state.size.width,
        height: state.isMaximized ? '100%' : state.size.height,
        zIndex: state.zIndex,
      }}
      onMouseDown={() => onFocus()}
    >
      {/* Title Bar */}
      <div
        className="h-10 bg-slate-200 border-b border-slate-300 flex items-center justify-between px-3 select-none cursor-default"
        onMouseDown={handleMouseDown}
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center gap-2">
          <Icon name={config.icon} size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-slate-700">{config.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="p-1 hover:bg-slate-300 rounded transition-colors"
            aria-label="Minimize"
          >
            <Icon name="Minus" size={14} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            className="p-1 hover:bg-slate-300 rounded transition-colors"
            aria-label="Maximize"
          >
            <Icon name={state.isMaximized ? "Minimize2" : "Maximize2"} size={14} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-1 hover:bg-red-500 hover:text-white rounded transition-colors"
            aria-label="Close"
          >
            <Icon name="X" size={14} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-white/50 p-1">
        <div className="h-full w-full bg-white/80 rounded border border-slate-200 shadow-inner overflow-auto">
            {config.component}
        </div>
      </div>
    </div>
  );
};