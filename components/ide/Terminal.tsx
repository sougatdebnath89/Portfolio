import React, { useState, useEffect, useRef } from 'react';
import { TerminalLine } from '../../types';
import { FileNode } from '../../types';

interface TerminalProps {
    onOpenFile: (fileId: string) => void;
    availableFiles: FileNode[];
    activeFileId: string | null;
}

export const Terminal: React.FC<TerminalProps> = ({ onOpenFile, availableFiles, activeFileId }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', text: 'Microsoft Windows [Version 10.0.19045.4651]' },
    { type: 'system', text: '(c) Microsoft Corporation. All rights reserved.' },
    { type: 'system', text: '' },
    { type: 'system', text: 'Welcome to DevPortfolio Terminal.' },
    { type: 'system', text: 'Hint: Try "help", "matrix", or "sudo"' },
  ]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [isVimMode, setIsVimMode] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Determine current directory based on active file
  const activeFile = availableFiles.find(f => f.id === activeFileId);
  const currentPath = activeFile 
    ? `C:\\Users\\Dev\\Portfolio\\${activeFile.name.split('.')[0]}`
    : `C:\\Users\\Dev\\Portfolio`;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Matrix Effect
  useEffect(() => {
    if (!isMatrixMode || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 600;
    canvas.height = canvas.parentElement?.clientHeight || 400;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, [isMatrixMode]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    const lowerCmd = trimmed.toLowerCase();
    
    if (isVimMode) {
        if (trimmed === ':q!') {
            setIsVimMode(false);
            setHistory([]);
        } else {
             // Trapped in Vim!
             return;
        }
        setInput('');
        return;
    }

    if (isMatrixMode) {
        if (lowerCmd === 'exit' || lowerCmd === 'stop') {
            setIsMatrixMode(false);
            setHistory(prev => [...prev, { type: 'input', text: '' }]);
            setInput('');
            return;
        }
    }

    // Push the user's input to history
    const newHistory = [...history, { type: 'input', text: `${currentPath}> ${cmd}` } as TerminalLine];

    if (lowerCmd === 'help') {
        newHistory.push({ type: 'output', text: 'Available commands:' });
        newHistory.push({ type: 'output', text: '  ls, dir          List contents' });
        newHistory.push({ type: 'output', text: '  cd [dir]         Change directory' });
        newHistory.push({ type: 'output', text: '  code [file]      Open file' });
        newHistory.push({ type: 'output', text: '  matrix           Enter the matrix' });
        newHistory.push({ type: 'output', text: '  sudo [cmd]       Execute as root' });
        newHistory.push({ type: 'output', text: '  whoami           Current user info' });
        newHistory.push({ type: 'output', text: '  clear            Clear screen' });
    } 
    else if (lowerCmd === 'ls' || lowerCmd === 'dir') {
        newHistory.push({ type: 'output', text: 'Directory of ' + currentPath });
        newHistory.push({ type: 'output', text: '' });
        availableFiles.forEach(f => {
            newHistory.push({ type: 'output', text: `  <DIR>       ${f.name.split('.')[0]}` }); 
            newHistory.push({ type: 'output', text: `              ${f.name}` });
        });
    } 
    else if (lowerCmd.startsWith('cd ')) {
        const target = lowerCmd.replace('cd ', '').trim().toLowerCase();
        const file = availableFiles.find(f => 
            f.id.toLowerCase().includes(target) || 
            f.name.toLowerCase().includes(target)
        );
        if (file) {
            onOpenFile(file.id);
        } else if (target === '..') {
            // Just a visual feedback
        } else {
            newHistory.push({ type: 'output', text: `System cannot find path: '${target}'` });
        }
    }
    else if (lowerCmd.startsWith('code ') || lowerCmd.startsWith('open ')) {
        const target = lowerCmd.replace(/^(code|open) /, '').trim().toLowerCase();
        const file = availableFiles.find(f => 
            f.name.toLowerCase().includes(target) || 
            f.id.toLowerCase() === target
        );
        if (file) {
            onOpenFile(file.id);
            newHistory.push({ type: 'output', text: `Opening ${file.name}...` });
        } else {
            newHistory.push({ type: 'output', text: `File not found: '${target}'` });
        }
    }
    else if (lowerCmd === 'clear' || lowerCmd === 'cls') {
        setHistory([]);
        setInput('');
        return; 
    } 
    else if (lowerCmd === 'matrix') {
        setIsMatrixMode(true);
        newHistory.push({ type: 'output', text: 'Wake up, Neo...' });
        newHistory.push({ type: 'output', text: 'Press "exit" to return to reality.' });
    }
    else if (lowerCmd.startsWith('sudo')) {
        newHistory.push({ type: 'output', text: `dev@sougatdebnath.com is not in the sudoers file. This incident will be reported.` });
    }
    else if (lowerCmd === 'vim' || lowerCmd === 'vi') {
        setIsVimMode(true);
        setHistory([]); // Clear screen for vim
        setInput('');
        return;
    }
    else if (lowerCmd === 'dotnet build') {
        newHistory.push({ type: 'output', text: 'Build succeeded. 0 Warning(s). 0 Error(s).' });
    } 
    else if (lowerCmd === 'whoami') {
        newHistory.push({ type: 'output', text: 'sougat\\admin (AI Engineer)' });
    } 
    else if (trimmed !== '') {
        newHistory.push({ type: 'output', text: `'${trimmed.split(' ')[0]}' is not recognized as an internal or external command.` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="h-full bg-[#1e1e1e] border-t border-[#414141] flex flex-col font-mono text-sm p-2 overflow-hidden relative">
      {/* Matrix Overlay */}
      {isMatrixMode && (
        <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none opacity-80" />
      )}

      {/* Tabs */}
      <div className="flex items-center justify-between text-xs text-[#cccccc] uppercase tracking-wide mb-1 px-2 select-none z-20">
        <div className="flex gap-4">
            <span className="border-b border-white pb-1 cursor-pointer font-bold text-white">Terminal</span>
            <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">Output</span>
            <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">Debug Console</span>
            <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">Problems</span>
        </div>
        <div className="flex gap-2 opacity-70 hover:opacity-100">
            <span className="cursor-pointer">+</span>
            <span className="cursor-pointer">^</span>
            <span className="cursor-pointer">x</span>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div 
        className="flex-1 overflow-auto p-2 text-[#cccccc] font-consolas z-20"
        onClick={() => document.getElementById('terminal-input')?.focus()}
      >
        {isVimMode ? (
            <div className="h-full flex flex-col">
                <div className="flex-1 text-[#569cd6]">
                    {Array.from({length: 20}).map((_, i) => (
                        <div key={i}>~</div>
                    ))}
                </div>
                <div className="bg-[#ccc] text-black px-1">
                    -- INSERT --                                                                                      10,1          All
                </div>
            </div>
        ) : (
            <>
                {history.map((line, i) => (
                <div key={i} className={`${line.type === 'input' ? 'mt-1 font-bold text-[#efefef]' : 'ml-0 text-[#cccccc]'} leading-snug break-words`}>
                    {line.text}
                </div>
                ))}
                <div className="flex mt-1">
                    <span className="mr-2 text-[#efefef] whitespace-nowrap">{currentPath}{'>'}</span>
                    <input 
                        id="terminal-input"
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') handleCommand(input);
                        }}
                        className="bg-transparent border-none outline-none flex-1 text-[#efefef] w-full"
                        autoFocus
                        autoComplete="off"
                        spellCheck="false"
                    />
                </div>
                <div ref={bottomRef} />
            </>
        )}
      </div>
    </div>
  );
};