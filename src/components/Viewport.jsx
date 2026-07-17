import React from 'react';
import { Rotate3D, ZoomIn } from 'lucide-react';

function Viewport() {
  return (
    <div className="flex-1 bg-surface-container rounded-lg scada-border p-1 relative overflow-hidden flex flex-col min-h-[400px] shrink-0">
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
        <span className="bg-black/60 backdrop-blur text-white text-xs font-label-caps px-2 py-1 rounded scada-border inline-block w-fit">
          LIDAR POINT CLOUD
        </span>
        <span className="text-green-400 text-[10px] font-telemetry-data text-glow">
          FPS: 60 | RENDER: OGL
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button className="bg-black/60 backdrop-blur p-2 rounded scada-border text-on-surface-variant hover:text-primary transition-colors">
          <Rotate3D className="w-4 h-4" />
        </button>
        <button className="bg-black/60 backdrop-blur p-2 rounded scada-border text-on-surface-variant hover:text-primary transition-colors">
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>

      <div className="w-full h-full bg-surface-dim relative rounded overflow-hidden">
        {/* Wireframe grid background effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <model-viewer
            src="/final_model.glb"
            camera-controls
            shadow-intensity="1"
            interaction-prompt="none"
            touch-action="pan-y"
            camera-orbit="45deg 75deg auto"
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          >
          </model-viewer>
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="w-full h-1 bg-primary/20 animate-pulse absolute top-0"></div>
        </div>
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40"></div>
      </div>
    </div>
  );
}

export default Viewport;
