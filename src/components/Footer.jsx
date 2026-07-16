import React from 'react';

function Footer() {
  return (
    <footer className="bg-surface-container-lowest/60 dark:bg-surface-container-lowest/60 flex justify-between items-center px-gutter py-1 fixed bottom-0 w-full z-50 backdrop-blur-md border-t border-outline-variant/10 h-[32px]">
      <div className="flex items-center gap-4 text-xs font-telemetry-data text-on-surface-variant w-1/3">
        <span className="text-primary-container">&gt;</span>
        <span>SYS_LOG</span>
      </div>
      <div className="flex-1 overflow-hidden relative h-full flex items-center border-l border-r border-outline-variant/20">
        <div className="marquee flex gap-16 px-4 text-[11px] font-telemetry-data opacity-80 h-full items-center whitespace-nowrap">
          <span className="text-on-surface-variant">
            <span className="text-primary-container">[12:31:04]</span> [SYS] LINK ESTABLISHED - SECTOR 7 PORTAL
          </span>
          <span className="text-on-surface-variant">
            <span className="text-primary-container">[12:32:15]</span> [LDR] CALIBRATION COMPLETE
          </span>
          <span className="text-green-400 text-glow">
            <span className="text-green-500">[12:33:00]</span> [NAV] AUTONOMOUS SCAN SEQUENCE INITIATED
          </span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 text-[10px] font-label-caps text-on-surface-variant w-1/3 text-right">
        <span>COAL INDIA LTD - AUTONOMOUS TUNNELING DIVISION 2024</span>
      </div>
    </footer>
  );
}

export default Footer;
