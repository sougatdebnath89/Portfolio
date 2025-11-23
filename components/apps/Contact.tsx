import React from 'react';
import { personalInfo } from '../../data';

export const Contact: React.FC = () => {
  return (
    <div className="p-4 md:p-6 font-mono text-xs md:text-sm overflow-x-auto">
      <div className="text-blue-400">using <span className="text-white">System</span>;</div>
      <div className="text-blue-400 mb-4">using <span className="text-white">System.Communication</span>;</div>

      <div className="whitespace-pre-wrap">
        <span className="text-blue-500">public class</span> <span className="text-green-400">ContactInfo</span> 
        <span className="text-white"> : </span> 
        <span className="text-green-400">IDeveloper</span>
      </div>
      <div className="text-white">{'{'}</div>
      
      <div className="pl-4 md:pl-6 space-y-2">
        <div className="text-slate-500">// Feel free to reach out for opportunities!</div>
        
        <div className="flex flex-col md:block">
            <div>
                <span className="text-blue-500">public string</span> Email 
                <span className="text-white"> {'{'} </span> 
                <span className="text-blue-500">get</span>; 
                <span className="text-white"> {'}'} </span> 
            </div>
            <div className="pl-4 md:pl-0">
                <span className="text-white">=</span> <span className="text-orange-400 hover:underline cursor-pointer" onClick={() => window.location.href = `mailto:${personalInfo.email}`}>"{personalInfo.email}"</span>;
            </div>
        </div>

        <div className="flex flex-col md:block">
            <div>
                <span className="text-blue-500">public string</span> Phone 
                <span className="text-white"> {'{'} </span> 
                <span className="text-blue-500">get</span>; 
                <span className="text-white"> {'}'} </span> 
            </div>
             <div className="pl-4 md:pl-0">
                <span className="text-white">=</span> <span className="text-orange-400 hover:underline cursor-pointer" onClick={() => window.location.href = `tel:${personalInfo.phone}`}>"{personalInfo.phone}"</span>;
             </div>
        </div>

        <div className="flex flex-col md:block">
            <div>
                <span className="text-blue-500">public string</span> LinkedIn 
                <span className="text-white"> {'{'} </span> 
                <span className="text-blue-500">get</span>; 
                <span className="text-white"> {'}'} </span> 
            </div>
             <div className="pl-4 md:pl-0">
                <span className="text-white">=</span> <span className="text-orange-400 hover:underline cursor-pointer" onClick={() => window.open(personalInfo.linkedinUrl, '_blank')}>"{personalInfo.linkedin}"</span>;
             </div>
        </div>

        <div className="flex flex-col md:block">
            <div>
                <span className="text-blue-500">public string</span> Location 
                <span className="text-white"> {'{'} </span> 
                <span className="text-blue-500">get</span>; 
                <span className="text-white"> {'}'} </span> 
            </div>
             <div className="pl-4 md:pl-0">
                <span className="text-white">=</span> <span className="text-orange-400">"{personalInfo.location}"</span>;
             </div>
        </div>

        <br />
        <div>
            <span className="text-slate-500">/// &lt;summary&gt;</span>
        </div>
        <div>
            <span className="text-slate-500">/// Sends a message to the developer.</span>
        </div>
        <div>
            <span className="text-slate-500">/// &lt;/summary&gt;</span>
        </div>
        <div className="whitespace-pre-wrap">
            <span className="text-blue-500">public void</span> <span className="text-yellow-300">SendMessage</span>(<span className="text-blue-500">string</span> message)
        </div>
        <div className="text-white">{'{'}</div>
             <div className="pl-6 text-purple-400 cursor-pointer hover:underline hover:text-purple-300 break-all" onClick={() => window.location.href = `mailto:${personalInfo.email}`}>
                 Mailer.Send(this.Email, message);
             </div>
        <div className="text-white">{'}'}</div>
      </div>

      <div className="text-white">{'}'}</div>
    </div>
  );
};