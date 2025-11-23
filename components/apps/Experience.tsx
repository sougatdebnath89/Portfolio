import React from 'react';
import { experience } from '../../data';

export const Experience: React.FC = () => {
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="space-y-1">
         <div className="text-slate-500 text-sm font-mono mb-6">// Professional Work History</div>
      </div>

      <div className="relative border-l border-[#404040] ml-2 md:ml-3 space-y-10">
        {experience.map((job, idx) => (
          <div key={idx} className="relative pl-6 md:pl-8 group">
            {/* Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-1">
                <h3 className="text-base md:text-lg font-bold text-blue-400">
                    {job.role} 
                    <span className="hidden md:inline text-slate-400 font-normal text-base mx-2">@</span> 
                    <div className="md:hidden h-1"></div>
                    <span className="block md:inline text-green-400">{job.company}</span>
                </h3>
                <span className="self-start md:self-auto text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded bg-[#252526]">
                    {job.period}
                </span>
            </div>

            <p className="text-slate-300 mb-4 max-w-2xl leading-relaxed text-sm md:text-base">
                {job.desc}
            </p>

            <div className="flex flex-wrap gap-2">
                {job.stack.map(tech => (
                    <span key={tech} className="text-xs font-medium text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                        {tech}
                    </span>
                ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-6 border-t border-[#333]">
        <div className="text-slate-500 font-mono text-sm">
            <span className="text-blue-500">return</span> <span className="text-orange-400">career</span>.<span className="text-yellow-300">Continue</span>();
        </div>
      </div>
    </div>
  );
};