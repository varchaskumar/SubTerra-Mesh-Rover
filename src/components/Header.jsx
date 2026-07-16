import React, { useState, useEffect } from 'react';
import { Settings, HelpCircle, UserCircle, AlertTriangle, Pickaxe } from 'lucide-react';

function Header() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    const timer = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-surface-container/40 dark:bg-surface-container/40 flex justify-between items-center px-margin-page py-3 fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Pickaxe className="text-primary-container h-6 w-6" />
          <span className="text-headline-md font-headline-md font-bold tracking-tight text-primary dark:text-primary">CIL TUNNEL ASSISTANT</span>
        </div>
        <nav className="hidden md:flex gap-6 items-center border-l border-outline-variant/30 pl-6 h-8">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 text-label-caps font-label-caps opacity-80 transition-opacity" href="#">MISSION ALPHA</a>
          <a className="text-on-surface-variant font-medium text-label-caps font-label-caps hover:text-primary-fixed transition-colors duration-200" href="#">SECTOR-7</a>
          <a className="text-on-surface-variant font-medium text-label-caps font-label-caps hover:text-primary-fixed transition-colors duration-200" href="#">AUTONOMOUS</a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 bg-surface-container-high px-4 py-1.5 rounded border border-outline-variant/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 glow-success animate-pulse"></span>
            <span className="text-label-caps font-label-caps text-green-400">ONLINE</span>
          </div>
          <div className="w-px h-4 bg-outline-variant/50"></div>
          <span className="text-headline-sm font-headline-sm text-on-surface text-glow">{timeString}</span>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Settings" className="text-on-surface-variant hover:text-primary-fixed transition-colors duration-200">
            <Settings className="w-6 h-6" />
          </button>
          <button aria-label="Help" className="text-on-surface-variant hover:text-primary-fixed transition-colors duration-200">
            <HelpCircle className="w-6 h-6" />
          </button>
          <button aria-label="Account" className="text-on-surface-variant hover:text-primary-fixed transition-colors duration-200">
            <UserCircle className="w-6 h-6" />
          </button>
          <button className="bg-red-500/20 text-red-400 border border-red-500/50 px-4 py-1.5 rounded text-label-caps font-label-caps font-bold hover:bg-red-500 hover:text-white transition-colors flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            E-STOP
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
