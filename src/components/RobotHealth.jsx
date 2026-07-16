import React from 'react';
import { Bot, Thermometer, Router, Map, Activity, Radio, CheckCircle2, Circle } from 'lucide-react';

function RobotHealth() {
  return (
    <aside className="w-64 bg-surface-container rounded-lg scada-border flex flex-col gap-4 p-card-padding overflow-y-auto shrink-0 relative">
      <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-2 mb-2">
        <Bot className="text-primary-container h-5 w-5" />
        <h2 className="text-headline-sm font-headline-sm text-on-surface">ROBOT HEALTH</h2>
      </div>
      
      {/* Battery Gauge */}
      <div className="flex flex-col items-center justify-center p-4 bg-surface-container-high rounded scada-border relative">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="50" stroke="currentColor" strokeWidth="8"></circle>
          <circle className="text-primary-container glow-primary" cx="64" cy="64" fill="transparent" r="50" stroke="currentColor" strokeDasharray="314" strokeDashoffset="47" strokeLinecap="round" strokeWidth="8"></circle>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-telemetry-data font-telemetry-data text-on-surface">85%</span>
          <span className="text-[10px] text-on-surface-variant font-label-caps uppercase tracking-wider">PWR LVL</span>
        </div>
      </div>
      
      {/* Motherboard Temp */}
      <div className="bg-surface-container-high p-3 rounded scada-border flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-label-caps font-label-caps text-on-surface-variant">MB TEMP</span>
          <span className="text-telemetry-data font-telemetry-data text-green-400">42°C</span>
        </div>
        <Thermometer className="text-green-400 h-6 w-6" />
        <div className="flex flex-col items-end text-[9px] font-telemetry-data text-on-surface-variant/50 ml-2">
            <span className="uppercase">Min: 38°</span>
            <span className="uppercase">Max: 45°</span>
            <span className="uppercase">Avg: 41°</span>
        </div>
      </div>
      
      {/* Signal Strength */}
      <div className="bg-surface-container-high p-3 rounded scada-border flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-label-caps font-label-caps text-on-surface-variant">LINK S/N</span>
          <span className="text-telemetry-data font-telemetry-data text-primary-container">-65dBm</span>
        </div>
        <div className="flex items-end gap-1 h-6">
          <div className="w-1.5 h-2 bg-primary-container"></div>
          <div className="w-1.5 h-3 bg-primary-container"></div>
          <div className="w-1.5 h-4 bg-primary-container"></div>
          <div className="w-1.5 h-5 bg-surface-container-highest"></div>
          <div className="w-1.5 h-6 bg-surface-container-highest"></div>
        </div>
      </div>
      
      {/* Repeaters Dispensed */}
      <div className="bg-surface-container-high p-3 rounded scada-border flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-label-caps font-label-caps text-on-surface-variant">NODES DROPPED</span>
          <span className="text-telemetry-data font-telemetry-data text-on-surface">3/10</span>
        </div>
        <Router className="text-on-surface-variant h-6 w-6" />
      </div>
      
      {/* Distance Sensors */}
      <div className="bg-surface-container-high p-3 rounded scada-border flex flex-col gap-2">
        <span className="text-label-caps font-label-caps text-on-surface-variant">LIDAR CLEARANCE</span>
        <div className="flex justify-between items-center text-sm font-telemetry-data">
          <span className="text-on-surface">L: 1.2m</span>
          <div className="flex-1 mx-2 flex gap-0.5 h-1.5"> 
              <div className="flex-1 bg-green-500"></div> 
              <div className="flex-1 bg-green-500"></div> 
              <div className="flex-1 bg-green-500"></div> 
              <div className="flex-1 bg-green-500"></div> 
              <div className="flex-1 bg-surface-container-highest"></div> 
              <div className="flex-1 bg-surface-container-highest"></div> 
          </div>
          <span className="text-on-surface">R: 0.8m</span>
        </div>
      </div>
      
      {/* Structural Sidebar */}
      <div className="mt-auto border-t border-outline-variant/20 pt-4 flex flex-col gap-2">
        <button className="bg-primary/10 text-primary border-l-4 border-primary px-4 py-2 text-left text-label-caps font-label-caps flex items-center gap-3 w-full hover:bg-surface-container-high transition-all">
          <Map className="h-4 w-4" />
          MAPPING
        </button>
        <button className="text-on-surface-variant hover:text-on-surface px-4 py-2 text-left text-label-caps font-label-caps flex items-center gap-3 w-full hover:bg-surface-container-high transition-all">
          <Activity className="h-4 w-4" />
          TELEMETRY
        </button>
        <button className="text-on-surface-variant hover:text-on-surface px-4 py-2 text-left text-label-caps font-label-caps flex items-center gap-3 w-full hover:bg-surface-container-high transition-all">
          <Radio className="h-4 w-4" />
          SENSORS
        </button>
      </div>
      <div className="mt-2 text-[9px] font-telemetry-data text-on-surface-variant/40 text-center uppercase tracking-widest">
          Last Sync: 12:34:58 [LOCAL]
      </div>
    </aside>
  );
}

export default RobotHealth;
