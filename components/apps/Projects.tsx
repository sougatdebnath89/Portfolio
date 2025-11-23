import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { projects } from '../../data';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  if (selectedProject) {
    return (
      <div className="p-4 md:p-8 flex flex-col animate-in slide-in-from-right-4 duration-300">
        {/* Back Navigation */}
        <button 
            onClick={() => setSelectedProject(null)}
            className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-6 transition-colors w-fit px-2 py-1 rounded hover:bg-white/5"
        >
            <Icon name="ArrowLeft" size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-mono font-bold">Back to Projects</span>
        </button>

        <div className="max-w-5xl mx-auto w-full">
            {/* Project Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
                        <Icon name="FolderGit2" size={32} className="text-blue-500" />
                        {selectedProject.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-2">
                        <div className="flex items-center gap-1.5 bg-[#2d2d2d] px-2 py-1 rounded border border-white/10">
                            <Icon name="Building2" size={14} className="text-yellow-500" />
                            <span className="font-medium text-slate-300">{selectedProject.company}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Description Card */}
                    <div className="bg-[#252526] border border-[#333] rounded-lg p-6 shadow-xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                            <Icon name="FileText" size={18} className="text-slate-400" />
                            <h2 className="text-lg font-bold text-white">Project Overview</h2>
                        </div>
                        <p className="text-slate-300 leading-7 text-base">
                            {selectedProject.desc}
                        </p>
                        <div className="mt-4 p-4 bg-[#1e1e1e] rounded border-l-4 border-blue-500">
                            <p className="text-sm text-slate-400 italic">
                                "This project required complex architectural decisions to ensure scalability and data integrity across distributed modules."
                            </p>
                        </div>
                    </div>

                    {/* Features Card */}
                    <div className="bg-[#252526] border border-[#333] rounded-lg p-6 shadow-xl">
                         <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                            <Icon name="Zap" size={18} className="text-yellow-400" />
                            <h2 className="text-lg font-bold text-white">Key Features</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedProject.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <Icon name="Check" size={14} className="text-green-500" />
                                    </div>
                                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Tech Stack */}
                    <div className="bg-[#252526] border border-[#333] rounded-lg p-5 shadow-xl">
                         <div className="flex items-center gap-2 mb-4">
                            <Icon name="Code2" size={18} className="text-purple-400" />
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Tech Stack</h3>
                         </div>
                         <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.split(', ').map((t, i) => (
                                <span key={i} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full text-xs font-medium hover:bg-purple-500/20 transition-colors cursor-default">
                                    {t}
                                </span>
                            ))}
                         </div>
                    </div>

                    {/* Stats / Info */}
                     <div className="bg-[#252526] border border-[#333] rounded-lg p-5 shadow-xl">
                         <div className="flex items-center gap-2 mb-4">
                            <Icon name="Activity" size={18} className="text-blue-400" />
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Statistics</h3>
                         </div>
                         <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm pb-2">
                                <span className="text-slate-400">Role</span>
                                <span className="text-white">{selectedProject.role}</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 animate-in fade-in duration-500">
      <div className="text-slate-500 font-mono text-xs md:text-sm mb-6 break-words">
        <span className="text-blue-500">var</span> <span className="text-white">portfolio</span> = <span className="text-blue-500">new</span> <span className="text-green-400">List</span>&lt;<span className="text-green-400">Project</span>&gt;();
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
            <div 
                key={i} 
                onClick={() => setSelectedProject(p)}
                className="bg-[#252526] p-5 rounded-lg border border-[#333] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200 group cursor-pointer flex flex-col h-full"
            >
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 bg-blue-500/10 rounded-md group-hover:bg-blue-500/20 transition-colors">
                             <Icon name="FolderGit2" size={20} className="text-blue-400" />
                        </div>
                        <span className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors truncate text-sm md:text-base">
                            {p.name}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider border border-slate-700 px-2 py-1 rounded bg-[#1e1e1e]">
                        {p.company}
                    </div>
                </div>
                
                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {p.desc}
                </p>

                <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="text-xs text-blue-300 font-mono truncate max-w-[70%] opacity-70 group-hover:opacity-100 transition-opacity">
                        {p.tech}
                    </div>
                    <Icon name="ArrowRight" size={14} className="text-slate-600 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" />
                </div>
            </div>
        ))}
      </div>

      <div className="mt-8 text-slate-500 font-mono text-sm flex justify-center">
        <span>
            <span className="text-purple-500">return</span> portfolio.<span className="text-yellow-300">Count</span>();
        </span>
      </div>
    </div>
  );
};