import React from 'react';
import { education } from '../../data';

export const Education: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl font-serif text-slate-300 mx-auto">
       {/* Markdown Preview Style */}
       <h1 className="text-2xl md:text-3xl font-bold text-white border-b border-[#333] pb-2 mb-6">Education</h1>
       
       <div className="mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-blue-400 mb-4">## Academic Background</h2>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                
                {education.map((edu, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${idx === 0 ? 'group-[.is-active]:bg-blue-500' : 'group-[.is-active]:bg-emerald-500'}`}>
                            {idx === 0 ? (
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                    <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                            )}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#252526] p-4 rounded border border-[#333] shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-white">{edu.degree}</div>
                                <time className="font-mono text-xs text-slate-500">{edu.year}</time>
                            </div>
                            <div className="text-slate-400 text-sm">{edu.school}</div>
                        </div>
                    </div>
                ))}

            </div>
       </div>
    </div>
  );
};