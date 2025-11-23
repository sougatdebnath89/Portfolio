import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { experienceYears, personalInfo, techStack } from '../../data';
import { generateResume } from '../../utils/generateResume';

export const AboutMe: React.FC = () => {
  // Strategy:
  // 1. Try 'profile.jpg' (lowercase) - User preferred
  // 2. Try 'Profile.jpg' (Title case)
  // 3. Fallback to Generated Initials (No random stock photos)
  
  const [profileImage, setProfileImage] = useState("profile.jpg");
  const [hasTriedTitleCase, setHasTriedTitleCase] = useState(false);

  const handleImageError = () => {
    if (!hasTriedTitleCase) {
        // First failure: Try the Title Case version
        setProfileImage("Profile.jpg");
        setHasTriedTitleCase(true);
    } else {
        // Second failure: Generate a URL for initials
        // This satisfies: "Generate a URL for it and then use that as a profile image"
        setProfileImage(`https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&background=007acc&color=fff&size=256&bold=true&font-size=0.4`);
    }
  };

  return (
    <div className="p-4 md:p-6 font-sans text-slate-300 max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
        {/* Avatar / Info */}
        <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center md:items-start">
            <div className="relative group w-40 h-40 md:w-56 md:h-56 mb-6 flex-shrink-0">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-[#2d2d2d] ring-2 ring-blue-500/40 shadow-2xl bg-[#1e1e1e]">
                    <img 
                        src={profileImage}
                        alt={personalInfo.name}
                        onError={handleImageError}
                        className="w-full h-full object-cover filter grayscale-[0.1] contrast-110 brightness-100 hover:filter-none transition-all duration-500 ease-out transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                </div>
                
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-[4px] border-[#1e1e1e] rounded-full z-20 shadow-md animate-pulse" title="Online / Open to Work"></div>
            </div>

            <div className="text-center md:text-left space-y-3 w-full">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{personalInfo.name}</h1>
                    <p className="text-blue-400 font-mono text-sm mt-1">{personalInfo.title}</p>
                </div>
                
                <div className="pt-4 space-y-2 text-sm text-slate-400 flex flex-col items-center md:items-start border-t border-[#333] w-full">
                    <div className="flex items-center gap-2 pt-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="font-medium text-slate-300">Open to work</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-slate-500">Location:</span>
                        <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="text-slate-500">Exp:</span>
                         <span>{experienceYears}+ Years</span>
                    </div>
                </div>

                <button 
                    onClick={generateResume}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded transition-colors font-medium text-sm shadow-lg shadow-blue-900/20"
                >
                    <Icon name="Download" size={16} />
                    Download CV
                </button>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-8 w-full">
            <section className="bg-[#252526] p-6 rounded-lg border border-[#333] shadow-sm hover:border-blue-500/30 transition-colors">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-[#333] pb-2">
                    <span className="text-blue-500 text-sm font-mono">public class</span> 
                    <span>Introduction</span>
                </h2>
                <p className="leading-relaxed text-slate-300 mb-4 text-sm md:text-base whitespace-pre-line">
                    {personalInfo.summary}
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-blue-500 text-sm font-mono">enum</span> 
                    <span>TechStack</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#252526] p-4 rounded border-l-4 border-blue-500 hover:bg-[#2d2d2d] transition-colors">
                        <h3 className="text-blue-400 font-bold mb-1">Core & Backend</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{techStack["Core & Backend"]}</p>
                    </div>
                    <div className="bg-[#252526] p-4 rounded border-l-4 border-green-500 hover:bg-[#2d2d2d] transition-colors">
                        <h3 className="text-green-400 font-bold mb-1">Tools & DevOps</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{techStack["Tools & DevOps"]}</p>
                    </div>
                    <div className="bg-[#252526] p-4 rounded border-l-4 border-purple-500 hover:bg-[#2d2d2d] transition-colors">
                        <h3 className="text-purple-400 font-bold mb-1">Frontend</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{techStack["Frontend"]}</p>
                    </div>
                    <div className="bg-[#252526] p-4 rounded border-l-4 border-yellow-500 hover:bg-[#2d2d2d] transition-colors">
                        <h3 className="text-yellow-400 font-bold mb-1">Database</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{techStack["Database"]}</p>
                    </div>
                    <div className="bg-[#252526] p-4 rounded border-l-4 border-pink-500 hover:bg-[#2d2d2d] transition-colors sm:col-span-2">
                        <h3 className="text-pink-400 font-bold mb-1">AI & Future Tech</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{techStack["AI & Future Tech"]}</p>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};