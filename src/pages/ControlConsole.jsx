import React, { useState, useEffect, useRef } from 'react';
import RobotHealth from '../components/RobotHealth';
import Footer from '../components/Footer';
import { Pickaxe, Settings, HelpCircle, UserCircle, AlertTriangle, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Video, Camera, Power, Activity, Thermometer, Wind, Droplets, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, CircleDot } from 'lucide-react';

function ControlConsole() {
  const [timeString, setTimeString] = useState('');

  // Dummy State
  const [logs, setLogs] = useState([
    { time: '12:42:11', msg: 'Connection Established' },
    { time: '12:42:20', msg: 'Manual Mode Enabled' },
    { time: '12:42:31', msg: 'Thermal Camera Online' },
    { time: '12:42:42', msg: 'Tunnel Clear' },
    { time: '12:42:55', msg: 'Methane Stable' }
  ]);
  const [activeMode, setActiveMode] = useState('drive');
  const [speed, setSpeed] = useState('medium');
  const [lightLevel, setLightLevel] = useState('medium');
  const [visionMode, setVisionMode] = useState('rgb');
  const [tilt, setTilt] = useState(50);
  const [posture, setPosture] = useState(50);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    const timer = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(timer);
  }, []);

  const Button = ({ active, children, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`border rounded flex items-center justify-center font-label-caps text-xs transition-all active:scale-95 ${active
          ? 'bg-primary-container/20 border-primary-container text-primary-container glow-primary shadow-[inset_0_0_10px_rgba(255,193,7,0.2)]'
          : 'bg-surface-container-high border-outline-variant/30 text-on-surface-variant hover:border-outline-variant hover:text-on-surface'
        } ${className}`}
    >
      {children}
    </button>
  );

  const DPad = ({ title }) => (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] text-on-surface-variant font-label-caps">{title}</span>
      <div className="grid grid-cols-3 gap-1 p-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 shadow-inner">
        <div></div>
        <button className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center border border-outline-variant/20 hover:bg-surface-bright active:scale-90 transition-all shadow-[0_4px_0_rgba(0,0,0,0.5)] active:shadow-[0_0px_0_rgba(0,0,0,0.5)] active:translate-y-1"><ArrowUp className="w-5 h-5 text-on-surface" /></button>
        <div></div>
        <button className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center border border-outline-variant/20 hover:bg-surface-bright active:scale-90 transition-all shadow-[0_4px_0_rgba(0,0,0,0.5)] active:shadow-[0_0px_0_rgba(0,0,0,0.5)] active:translate-y-1"><ArrowLeft className="w-5 h-5 text-on-surface" /></button>
        <button className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center border border-outline-variant/20 hover:bg-surface-bright active:scale-90 transition-all shadow-[0_4px_0_rgba(0,0,0,0.5)] active:shadow-[0_0px_0_rgba(0,0,0,0.5)] active:translate-y-1"><CircleDot className="w-5 h-5 text-primary-container" /></button>
        <button className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center border border-outline-variant/20 hover:bg-surface-bright active:scale-90 transition-all shadow-[0_4px_0_rgba(0,0,0,0.5)] active:shadow-[0_0px_0_rgba(0,0,0,0.5)] active:translate-y-1"><ArrowRight className="w-5 h-5 text-on-surface" /></button>
        <div></div>
        <button className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center border border-outline-variant/20 hover:bg-surface-bright active:scale-90 transition-all shadow-[0_4px_0_rgba(0,0,0,0.5)] active:shadow-[0_0px_0_rgba(0,0,0,0.5)] active:translate-y-1"><ArrowDown className="w-5 h-5 text-on-surface" /></button>
        <div></div>
      </div>
    </div>
  );

  return (
    <div className="bg-background text-on-surface h-screen w-screen overflow-hidden flex flex-col font-body-md select-none dark">
      {/* Top Header */}
      <header className="bg-surface-container/40 dark:bg-surface-container/40 flex justify-between items-center px-margin-page py-3 fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Pickaxe className="text-primary-container h-6 w-6" />
            <span className="text-headline-md font-headline-md font-bold tracking-tight text-primary dark:text-primary">ROBOT CONTROL CONSOLE</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center border-l border-outline-variant/30 pl-6 h-8">
            <span className="text-primary font-bold border-b-2 border-primary pb-1 text-label-caps font-label-caps opacity-80">MISSION: DELTA-4</span>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 bg-surface-container-high px-4 py-1.5 rounded border border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 glow-success animate-pulse"></span>
              <span className="text-label-caps font-label-caps text-green-400">ONLINE</span>
            </div>
            <div className="w-px h-4 bg-outline-variant/50"></div>
            <span className="text-label-caps font-label-caps text-on-surface-variant">BAT: <span className="text-green-400">84%</span></span>
            <div className="w-px h-4 bg-outline-variant/50"></div>
            <span className="text-label-caps font-label-caps text-on-surface-variant">SIG: <span className="text-[#1e95f2]">92%</span></span>
            <div className="w-px h-4 bg-outline-variant/50"></div>
            <span className="text-headline-sm font-headline-sm text-on-surface text-glow">{timeString}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex pt-[60px] pb-[32px] overflow-hidden gap-container-gap p-container-gap">
        <RobotHealth />

        <div className="flex-1 flex flex-col gap-container-gap overflow-y-auto min-h-0">

          {/* Top Row: Main Console */}
          <div className="h-48 grid grid-cols-12 gap-container-gap shrink-0">

            {/* Left Panel: Modes */}
            <div className="col-span-2 bg-surface-container rounded-lg scada-border p-3 flex flex-col gap-2">
              <span className="text-[10px] text-on-surface-variant font-label-caps border-b border-outline-variant/20 pb-1">OP MODES</span>
              <div className="flex-1 flex flex-col gap-2">
                <Button active={activeMode === 'drive'} onClick={() => setActiveMode('drive')} className="flex-1">DRIVE MODE</Button>
                <Button active={activeMode === 'walk'} onClick={() => setActiveMode('walk')} className="flex-1">WALK MODE</Button>
              </div>
            </div>

            {/* Center Left: Posture */}
            <div className="col-span-2 bg-surface-container rounded-lg scada-border p-3 flex flex-col gap-3">
              <span className="text-[10px] text-on-surface-variant font-label-caps border-b border-outline-variant/20 pb-1">POSTURE</span>
              <div className="flex-1 flex flex-col justify-around">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] text-on-surface-variant font-label-caps">
                    <span>TILT/ROLL</span>
                    <span>{tilt}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={tilt} onChange={(e) => setTilt(e.target.value)} className="w-full accent-primary-container h-1 bg-surface-container-highest rounded outline-none appearance-none cursor-pointer" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] text-on-surface-variant font-label-caps">
                    <span>HEIGHT</span>
                    <span>{posture}%</span>
                  </div>
                  <input type="range" min="0" max="100" value={posture} onChange={(e) => setPosture(e.target.value)} className="w-full accent-primary-container h-1 bg-surface-container-highest rounded outline-none appearance-none cursor-pointer" />
                </div>
                <div className="flex gap-2">
                  <Button active={false} onClick={() => setPosture(20)} className="flex-1 py-1">CROUCH</Button>
                  <Button active={false} onClick={() => setPosture(100)} className="flex-1 py-1">STAND</Button>
                </div>
              </div>
            </div>

            {/* Center: Drive Controls */}
            <div className="col-span-3 bg-surface-container rounded-lg scada-border p-3 flex justify-between items-center">
              <DPad title="DRIVE CONTROL" />
              <div className="flex flex-col gap-2 w-20">
                <span className="text-[10px] text-on-surface-variant font-label-caps text-center">SPEED</span>
                <Button active={speed === 'slow'} onClick={() => setSpeed('slow')} className="py-2">SLOW</Button>
                <Button active={speed === 'medium'} onClick={() => setSpeed('medium')} className="py-2">MED</Button>
                <Button active={speed === 'fast'} onClick={() => setSpeed('fast')} className="py-2">FAST</Button>
              </div>
            </div>

            {/* Center Right: Walk Controls */}
            <div className="col-span-2 bg-surface-container rounded-lg scada-border p-3 flex justify-center items-center">
              <DPad title="WALK CONTROL" />
            </div>

            {/* Right Panel: Lights & Vision & Gimbal */}
            <div className="col-span-3 bg-surface-container rounded-lg scada-border p-3 flex gap-4">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-on-surface-variant font-label-caps mb-2 block">LIGHTS</span>
                  <div className="grid grid-cols-2 gap-1">
                    <Button active={lightLevel === 'off'} onClick={() => setLightLevel('off')} className="py-1.5">OFF</Button>
                    <Button active={lightLevel === 'low'} onClick={() => setLightLevel('low')} className="py-1.5">LOW</Button>
                    <Button active={lightLevel === 'medium'} onClick={() => setLightLevel('medium')} className="py-1.5">MED</Button>
                    <Button active={lightLevel === 'high'} onClick={() => setLightLevel('high')} className="py-1.5">HIGH</Button>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant font-label-caps mb-2 block">VISION</span>
                  <div className="grid grid-cols-3 gap-1">
                    <Button active={visionMode === 'rgb'} onClick={() => setVisionMode('rgb')} className="py-1.5">RGB</Button>
                    <Button active={visionMode === 'thermal'} onClick={() => setVisionMode('thermal')} className="py-1.5">THRM</Button>
                    <Button active={visionMode === 'ir'} onClick={() => setVisionMode('ir')} className="py-1.5">IR</Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <DPad title="GIMBAL" />
              </div>
            </div>

          </div>

          {/* Middle Row: Cameras & Environment */}
          <div className="flex-1 grid grid-cols-12 gap-container-gap min-h-0">

            {/* Camera Feeds */}
            <div className="col-span-9 grid grid-cols-2 gap-container-gap">
              {/* Front RGB */}
              <div className="bg-surface-container rounded-lg scada-border relative overflow-hidden flex flex-col group">
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                  <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-white border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    REC
                  </div>
                  <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-white border border-white/10">FRONT RGB</div>
                </div>
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                  <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-green-400 border border-white/10">30 FPS</div>
                  <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-white border border-white/10">1080p</div>
                </div>
                <img src="https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale sepia-[.2]" alt="Front RGB" />
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20"></div>
                <div className="absolute bottom-3 right-3 z-10 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-primary-container border border-white/10">{timeString}</div>
              </div>

              {/* Thermal */}
              <div className="bg-surface-container rounded-lg scada-border relative overflow-hidden flex flex-col group">
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                  <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-white border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    THERMAL
                  </div>
                </div>
                <div className="absolute top-3 right-3 z-10 flex gap-2">
                  <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-green-400 border border-white/10">24 FPS</div>
                  <div className="bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-white border border-white/10">720p</div>
                </div>
                <img src="/infrared.jpeg" className="w-full h-full object-cover" alt="Thermal" />
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20"></div>
                <div className="absolute bottom-3 right-3 z-10 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-label-caps text-primary-container border border-white/10">{timeString}</div>
              </div>
            </div>

            {/* Environment Status & Mission Status */}
            <div className="col-span-3 flex flex-col gap-container-gap">
              <div className="bg-surface-container rounded-lg scada-border p-3 flex-1 overflow-y-auto">
                <span className="text-[10px] text-on-surface-variant font-label-caps border-b border-outline-variant/20 pb-1 mb-2 block">ENV & SENSORS</span>
                <div className="flex flex-col gap-1.5">
                  {[
                    { label: 'CO', val: '0.00 ppm', icon: <Wind className="w-3 h-3 text-green-400" />, color: 'text-green-400' },
                    { label: 'METHANE', val: '0.02 ppm', icon: <Wind className="w-3 h-3 text-green-400" />, color: 'text-green-400' },
                    { label: 'PM1.0', val: '5.2', icon: <Wind className="w-3 h-3 text-on-surface" />, color: 'text-on-surface' },
                    { label: 'PM2.5', val: '14.1', icon: <Wind className="w-3 h-3 text-on-surface" />, color: 'text-on-surface' },
                    { label: 'PM10', val: '26.4', icon: <Wind className="w-3 h-3 text-orange-400" />, color: 'text-orange-400' },
                    { label: 'HUMIDITY', val: '88%', icon: <Droplets className="w-3 h-3 text-[#1e95f2]" />, color: 'text-[#1e95f2]' },
                    { label: 'TEMP', val: '28°C', icon: <Thermometer className="w-3 h-3 text-orange-400" />, color: 'text-orange-400' },
                    { label: 'WATER DETECT', val: 'DRY', icon: <Droplets className="w-3 h-3 text-green-400" />, color: 'text-green-400' },
                    { label: 'DIST LEFT', val: '1.2m', icon: <Activity className="w-3 h-3 text-on-surface" />, color: 'text-on-surface' },
                    { label: 'DIST RIGHT', val: '0.8m', icon: <Activity className="w-3 h-3 text-on-surface" />, color: 'text-on-surface' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-surface-container-high px-2 py-1.5 rounded">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span className="text-[10px] text-on-surface-variant font-label-caps">{item.label}</span>
                      </div>
                      <span className={`text-[11px] font-telemetry-data ${item.color}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface-container rounded-lg scada-border p-3 h-32 flex flex-col justify-between">
                <span className="text-[10px] text-on-surface-variant font-label-caps border-b border-outline-variant/20 pb-1 block">MISSION STATUS</span>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-on-surface-variant font-label-caps">ROBOT</span>
                  <span className="text-[11px] font-telemetry-data text-green-400">ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-on-surface-variant font-label-caps">NAVIGATION</span>
                  <span className="text-[11px] font-telemetry-data text-green-400">ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-on-surface-variant font-label-caps">OBSTACLE DETECT</span>
                  <span className="text-[11px] font-telemetry-data text-primary-container">ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-on-surface-variant font-label-caps">E-STOP</span>
                  <span className="text-[11px] font-telemetry-data text-green-400 bg-green-900/30 px-1 border border-green-500/30 rounded">READY</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ControlConsole;
