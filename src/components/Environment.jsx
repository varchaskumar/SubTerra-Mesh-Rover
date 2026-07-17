import React from 'react';
import { Wind, AlertTriangle, CheckCircle2, CloudFog, Thermometer, Droplets, Waves } from 'lucide-react';

function Environment() {
  return (
    <aside className="w-64 bg-surface-container rounded-lg scada-border flex flex-col gap-4 p-card-padding overflow-y-auto shrink-0">
      <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-2 mb-2">
        <Wind className="text-secondary h-5 w-5" />
        <h2 className="text-headline-sm font-headline-sm text-on-surface">ENVIRONMENT</h2>
      </div>
      
      {/* Methane Card */}
      <div className="bg-surface-container-high p-3 rounded scada-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-bl-full"></div>
        <div className="flex justify-between items-start mb-2 relative z-10">
          <span className="text-label-caps font-label-caps text-on-surface-variant">CH4 (METHANE)</span>
          <AlertTriangle className="text-red-400 h-5 w-5" />
        </div>
        <div className="text-2xl font-telemetry-data text-red-400 font-bold text-glow relative z-10">
          0.02<span className="text-sm text-red-400/70 ml-1">ppm</span>
        </div>
        <div className="w-full h-1 bg-surface-container-highest mt-2 rounded overflow-hidden">
          <div className="h-full bg-red-500 w-[20%] glow-error"></div>
        </div>
      </div>
      
      {/* CO Card */}
      <div className="bg-surface-container-high p-3 rounded scada-border">
        <div className="flex justify-between items-start mb-2">
          <span className="text-label-caps font-label-caps text-on-surface-variant">CO LEVEL</span>
          <CheckCircle2 className="text-green-400 h-5 w-5" />
        </div>
        <div className="text-2xl font-telemetry-data text-green-400 font-bold">
          4<span className="text-sm text-green-400/70 ml-1">ppm</span>
        </div>
        <div className="w-full h-1 bg-surface-container-highest mt-2 rounded overflow-hidden">
          <div className="h-full bg-green-500 w-[10%]"></div>
        </div>
        <div className="flex flex-col items-end text-[9px] font-telemetry-data text-on-surface-variant/50 ml-2">
            <span className="uppercase">Min: 38°</span>
            <span className="uppercase">Max: 45°</span>
            <span className="uppercase">Avg: 41°</span>
        </div>
      </div>
      
      {/* PM Particles Card */}
      <div className="bg-surface-container-high p-3 rounded scada-border flex flex-col gap-2">
        <div className="flex justify-between items-start border-b border-outline-variant/10 pb-1">
          <span className="text-label-caps font-label-caps text-on-surface-variant">PARTICULATES</span>
          <CloudFog className="text-primary-container h-5 w-5" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-telemetry-data text-on-surface-variant">PM1.0</span>
          <span className="text-sm font-telemetry-data text-on-surface">12 µg/m³</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-telemetry-data text-on-surface-variant">PM2.5</span>
          <span className="text-sm font-telemetry-data text-primary-container text-glow">34 µg/m³</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-telemetry-data text-on-surface-variant">PM10</span>
          <span className="text-sm font-telemetry-data text-on-surface">45 µg/m³</span>
        </div>
      </div>
      
      {/* Ambience Split Card */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-surface-container-high p-2 rounded scada-border flex flex-col items-center justify-center text-center">
          <Thermometer className="text-on-surface-variant h-4 w-4 mb-1" />
          <span className="text-lg font-telemetry-data text-on-surface">28°C</span>
          <span className="text-[9px] font-label-caps text-on-surface-variant mt-1">TEMP</span>
        </div>
        <div className="bg-surface-container-high p-2 rounded scada-border flex flex-col items-center justify-center text-center">
          <Droplets className="text-secondary h-4 w-4 mb-1" />
          <span className="text-lg font-telemetry-data text-secondary">65%</span>
          <span className="text-[9px] font-label-caps text-on-surface-variant mt-1">HUMIDITY</span>
        </div>
      </div>
      
      {/* Water Presence */}
      <div className="bg-surface-container-high p-3 rounded scada-border flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20">
          <Waves className="text-green-400 h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-label-caps font-label-caps text-on-surface-variant">INGRESS SENSOR</span>
          <span className="text-sm font-telemetry-data text-green-400">NONE DETECTED</span>
        </div>
      </div>
    </aside>
  );
}

export default Environment;
