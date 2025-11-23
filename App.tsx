import React, { useState, useEffect } from 'react';
import { INITIAL_FOLDERS, PROFILE_FILES } from './constants';
import { ActivityBar } from './components/ide/ActivityBar';
import { Explorer } from './components/ide/Explorer';
import { Search } from './components/ide/Search';
import { SourceControl } from './components/ide/SourceControl';
import { Extensions } from './components/ide/Extensions';
import { TabList } from './components/ide/TabList';
import { StatusBar } from './components/ide/StatusBar';
import { Terminal } from './components/ide/Terminal';
import { FileNode } from './types';
import { Icon } from './components/ui/Icon';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('explorer');
  const [folders, setFolders] = useState(INITIAL_FOLDERS);
  const [openFiles, setOpenFiles] = useState<FileNode[]>([PROFILE_FILES[0]]);
  const [activeFileId, setActiveFileId] = useState<string | null>(PROFILE_FILES[0].id);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'info'|'success'|'error'} | null>(null);

  // Detect mobile to auto-collapse sidebar on load
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setActiveView(''); // Start with sidebar closed on mobile
        setIsTerminalOpen(false); // Start with terminal closed on mobile
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Notification System Listener
  useEffect(() => {
    const handleNotification = (e: any) => {
        setNotification({ 
            message: e.detail.message, 
            type: e.detail.type || 'info' 
        });
        setTimeout(() => setNotification(null), 3000);
    };

    window.addEventListener('vscode-notification', handleNotification);
    return () => window.removeEventListener('vscode-notification', handleNotification);
  }, []);

  const handleFileClick = (file: FileNode) => {
    if (!openFiles.find(f => f.id === file.id)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFileId(file.id);
    // On mobile, auto-close sidebar when a file is selected
    if (isMobile) {
        setActiveView('');
    }
  };

  const handleTabClose = (fileId: string) => {
    const newOpenFiles = openFiles.filter(f => f.id !== fileId);
    setOpenFiles(newOpenFiles);
    
    if (activeFileId === fileId) {
      if (newOpenFiles.length > 0) {
        setActiveFileId(newOpenFiles[newOpenFiles.length - 1].id);
      } else {
        setActiveFileId(null);
      }
    }
  };

  const handleToggleFolder = (folderId: string) => {
    setFolders(folders.map(f => 
      f.id === folderId ? { ...f, isOpen: !f.isOpen } : f
    ));
  };

  const handleViewChange = (view: string) => {
    // Toggle functionality
    if (activeView === view) {
        setActiveView('');
    } else {
        setActiveView(view);
    }
  };

  const renderSidebarContent = () => {
    switch (activeView) {
      case 'explorer':
        return (
          <Explorer 
            folders={folders} 
            activeFileId={activeFileId}
            onFileClick={handleFileClick}
            onToggleFolder={handleToggleFolder}
          />
        );
      case 'search':
        return <Search onOpenFile={handleFileClick} availableFiles={PROFILE_FILES} />;
      case 'git':
        return <SourceControl />;
      case 'extensions':
        return <Extensions />;
      default:
        return null;
    }
  };

  const activeFile = openFiles.find(f => f.id === activeFileId);
  const isSidebarVisible = activeView !== '' && activeView !== 'settings' && activeView !== 'account';

  return (
    <div className="flex flex-col h-screen w-screen bg-[#1e1e1e] text-[#cccccc] overflow-hidden font-sans">
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Activity Bar */}
        <ActivityBar activeView={activeView} onViewChange={handleViewChange} />

        {/* Sidebar Panel (Collapsible / Overlay on Mobile) */}
        {isSidebarVisible && (
             <div className="absolute left-12 top-0 bottom-0 z-20 w-64 bg-[#252526] shadow-2xl md:static md:w-60 md:shadow-none flex flex-col border-r border-[#1e1e1e]">
                 {renderSidebarContent()}
             </div>
        )}

        {/* Main Editor Area */}
        <div 
            className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e] transition-all duration-300"
            onClick={() => {
                // Close sidebar on mobile if clicking editor
                if (isMobile && isSidebarVisible) setActiveView('');
            }}
        >
          {openFiles.length > 0 ? (
             <>
                <TabList 
                    openFiles={openFiles} 
                    activeFileId={activeFileId} 
                    onTabClick={(file) => setActiveFileId(file.id)}
                    onTabClose={handleTabClose}
                />
                {/* Breadcrumbs */}
                <div className="h-6 flex items-center px-4 text-xs text-[#969696] bg-[#1e1e1e] border-b border-[#1e1e1e] overflow-hidden whitespace-nowrap shrink-0">
                    <span className="mr-1">src</span>
                    <Icon name="ChevronRight" size={12} className="mr-1 flex-shrink-0" />
                    <span className="text-white truncate">{activeFile?.name}</span>
                </div>

                {/* Code/Content View */}
                <div className="flex-1 overflow-auto relative scroll-smooth flex">
                    {/* Line Numbers Gutter (Visual Only) */}
                    <div className="hidden sm:flex w-12 bg-[#1e1e1e] border-r border-[#2b2b2b] flex-col items-end pr-2 pt-4 text-[#858585] text-xs font-mono select-none shrink-0">
                        {/* Render fewer lines to avoid forcing scroll on short content, border will stretch due to flex */}
                        {Array.from({length: 30}).map((_, i) => (
                            <div key={i} className="leading-6">{i + 1}</div>
                        ))}
                    </div>
                    
                    {/* Content Wrapper */}
                    <div className="flex-1 min-w-0">
                        {activeFile?.content}
                    </div>
                </div>
             </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-[#3b3b3b] p-4 text-center">
                <Icon name="Code2" size={120} className="mb-4 opacity-20" />
                <div className="text-[#858585] text-sm mb-8">Select a file from the explorer to start</div>
                <div className="hidden sm:block text-xs text-[#555] font-mono">
                    <div className="flex gap-4 mb-2 justify-center">
                        <span className="text-[#858585]">Show All Commands</span>
                        <span>Ctrl+Shift+P</span>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <span className="text-[#858585]">Go to File</span>
                        <span>Ctrl+P</span>
                    </div>
                </div>
            </div>
          )}

          {/* Terminal Panel */}
          {isTerminalOpen && (
            <div className="h-1/3 md:h-48 border-t border-[#414141] flex flex-col bg-[#1e1e1e] absolute bottom-0 w-full md:static z-10 shrink-0">
               <div className="flex items-center justify-between px-2 py-1 bg-[#1e1e1e] border-b border-[#414141]">
                  <span className="text-xs font-bold text-white uppercase">Terminal</span>
                  <button onClick={() => setIsTerminalOpen(false)} className="text-[#cccccc] hover:text-white">
                    <Icon name="X" size={12} />
                  </button>
               </div>
               <div className="flex-1 overflow-hidden">
                  <Terminal 
                      availableFiles={PROFILE_FILES} 
                      activeFileId={activeFileId}
                      onOpenFile={(id) => {
                          const file = PROFILE_FILES.find(f => f.id === id);
                          if(file) handleFileClick(file);
                      }}
                  />
               </div>
            </div>
          )}
          {!isTerminalOpen && (
             <div 
                className="h-6 bg-[#007acc] md:bg-[#1e1e1e] border-t border-[#414141] flex items-center px-2 cursor-pointer hover:bg-[#2d2d2d] shrink-0"
                onClick={() => setIsTerminalOpen(true)}
             >
                <div className="flex items-center gap-2 text-xs text-white md:text-[#cccccc]">
                   <Icon name="Terminal" size={12} />
                   <span>Toggle Terminal</span>
                </div>
             </div>
          )}
        </div>

      </div>
      
      {/* Bottom Bar */}
      <StatusBar />

      {/* Notification Toast */}
      {notification && (
          <div className="fixed bottom-10 right-4 z-50 bg-[#252526] text-white px-4 py-3 rounded shadow-2xl border-l-4 border-[#007acc] animate-in slide-in-from-right-10 duration-300 flex items-center gap-3 max-w-sm">
             <Icon name={notification.type === 'error' ? 'AlertCircle' : 'Info'} size={20} className={notification.type === 'error' ? 'text-red-400' : 'text-[#007acc]'} />
             <div className="flex flex-col">
                <span className="font-medium text-sm">{notification.message}</span>
                <span className="text-[10px] text-slate-400">Source: VS Code</span>
             </div>
          </div>
      )}
    </div>
  );
};

export default App;