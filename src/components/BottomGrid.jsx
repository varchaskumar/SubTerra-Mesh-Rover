import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

function BottomGrid() {
  return (
    <div className="h-48 grid grid-cols-3 gap-container-gap shrink-0">
      {/* Cam 1 */}
      <div className="bg-surface-container rounded-lg scada-border relative overflow-hidden group">
        <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-label-caps text-white border border-white/10 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          FRONT RGB
        </div>
        <img
          className="w-full h-full object-cover filter grayscale sepia-[.2]"
          alt="Front RGB"
          src="https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=600&auto=format&fit=crop"
        />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-container/30 transition-colors pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20"></div>
      </div>

      {/* Cam 2 */}
      <div className="bg-surface-container rounded-lg scada-border relative overflow-hidden group">
        <div className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-label-caps text-white border border-white/10 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          THERMAL IR
        </div>
        <img
          className="w-full h-full object-cover"
          alt="Thermal IR"
          src="/infrared.jpeg"
        />
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-container/30 transition-colors pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20"></div>
      </div>

      {/* Status Panel */}
      <div className="bg-surface-container rounded-lg scada-border p-4 flex flex-col justify-between">
        <h3 className="text-label-caps font-label-caps text-on-surface-variant border-b border-outline-variant/20 pb-2 mb-2">MISSION DIRECTIVE</h3>
        <div className="flex flex-col gap-2 flex-1 justify-center">
          <div className="flex justify-between items-center mb-1 border-b border-outline-variant/10 pb-1">
            <span className="text-[10px] font-label-caps text-primary-container">MET</span>
            <span className="text-xs font-telemetry-data text-on-surface">04:12:08</span>
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <div className="flex items-center gap-2 text-[10px] font-label-caps text-green-400">
              <CheckCircle2 className="w-3 h-3" /> WP_01: ENTRY
            </div>
            <div className="flex items-center gap-2 text-[10px] font-label-caps text-green-400">
              <CheckCircle2 className="w-3 h-3" /> WP_02: SECTOR_7
            </div>
            <div className="flex items-center gap-2 text-[10px] font-label-caps text-on-surface-variant">
              <Circle className="w-3 h-3" /> WP_03: EXTRACTION
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-label-caps text-on-surface-variant">OP MODE</span>
            <span className="text-sm font-telemetry-data text-primary-container">AUTONOMOUS</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-label-caps text-on-surface-variant">NAV STATE</span>
            <span className="text-sm font-telemetry-data text-green-400">ACTIVE</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-label-caps text-on-surface-variant">OBSTACLES</span>
            <span className="text-sm font-telemetry-data text-on-surface">CLEAR</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-label-caps text-on-surface-variant">SAFETY</span>
            <span className="text-sm font-telemetry-data text-green-400 bg-green-900/30 px-2 rounded border border-green-500/30">NOMINAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomGrid;
