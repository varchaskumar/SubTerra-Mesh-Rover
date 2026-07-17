import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import GaugeComponent from 'react-gauge-component';
import { Activity } from 'lucide-react';

const generateData = (length, min, max) => {
  return Array.from({ length }, (_, i) => ({
    time: i,
    value: min + Math.random() * (max - min)
  }));
};

const generateMultiData = (length) => {
  return Array.from({ length }, (_, i) => ({
    time: i,
    pm1: 5 + Math.random() * 2,
    pm25: 14 + Math.random() * 3,
    pm10: 25 + Math.random() * 5,
  }));
};

function LiveAnalytics() {
  const [methaneData, setMethaneData] = useState(() => generateData(20, 0.02, 0.05));
  const [tempData, setTempData] = useState(() => generateData(20, 24, 32));
  const [pmData, setPmData] = useState(() => generateMultiData(20));
  
  const [battery, setBattery] = useState(84);
  const [signal, setSignal] = useState(92);
  const [speed, setSpeed] = useState(0.65);

  useEffect(() => {
    const interval = setInterval(() => {
      setMethaneData(prev => {
        const newData = [...prev.slice(1)];
        newData.push({ time: prev[prev.length - 1].time + 1, value: 0.02 + Math.random() * 0.03 });
        return newData;
      });
      
      setTempData(prev => {
        const newData = [...prev.slice(1)];
        newData.push({ time: prev[prev.length - 1].time + 1, value: 24 + Math.random() * 8 });
        return newData;
      });

      setPmData(prev => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: prev[prev.length - 1].time + 1,
          pm1: 5 + Math.random() * 2,
          pm25: 14 + Math.random() * 3,
          pm10: 25 + Math.random() * 5,
        });
        return newData;
      });

      setBattery(prev => {
        const diff = (Math.random() - 0.5) * 1;
        return Math.min(100, Math.max(0, prev + diff));
      });

      setSignal(prev => {
        const diff = (Math.random() - 0.5) * 4;
        return Math.min(100, Math.max(0, prev + diff));
      });

      setSpeed(prev => {
        const diff = (Math.random() - 0.5) * 0.1;
        return Math.min(1.5, Math.max(0, prev + diff));
      });
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const Card = ({ title, children }) => (
    <div className="bg-surface-container rounded-lg scada-border p-4 flex flex-col hover:border-primary-container/30 transition-colors h-[180px]">
      <div className="text-xs font-label-caps text-on-surface-variant mb-2 border-b border-outline-variant/20 pb-2">{title}</div>
      <div className="flex-1 min-h-0 relative">
        {children}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-2 mt-2 w-full">
      <div className="flex items-center gap-2 mb-2">
        <Activity className="w-4 h-4 text-primary-container" />
        <h2 className="text-sm font-label-caps text-on-surface">LIVE ANALYTICS <span className="text-on-surface-variant">/ ROBOT PERFORMANCE MONITORING</span></h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-container-gap">
        
        {/* Battery Gauge */}
        <Card title="BATTERY HEALTH">
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            
          </div>
          <GaugeComponent
            type="radial"
            arc={{
              width: 0.20,
              subArcs: [
                { limit: 20, color: '#f87171', showTick: true },
                { limit: 40, color: '#fb923c', showTick: true },
                { limit: 100, color: '#4ade80', showTick: true },
              ]
            }}
            pointer={{
              type: 'needle',
              elastic: true,
              animationDelay: 0,
              color: '#d4c5ab',
              length: 1,
              width: 10
            }}
            value={battery}
            minValue={0}
            maxValue={100}
            labels={{ tickLabels: { hideMinMax: true } }}
            style={{ width: '200%', height: '200%' }}
          />
        </Card>

        {/* Methane Trend */}
        <Card title="METHANE (PPM)">
           <ResponsiveContainer width="100%" height="100%">
            <LineChart data={methaneData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <YAxis domain={['auto', 'auto']} hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2022', borderColor: '#4f4632', color: '#e3e2e5', fontSize: '12px' }}
                itemStyle={{ color: '#4ade80' }}
                formatter={(val) => val.toFixed(3)}
                labelStyle={{ display: 'none' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#4ade80" 
                strokeWidth={2} 
                dot={false}
                isAnimationActive={true}
                animationDuration={500}
                animationEasing="ease-in-out"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Temperature Trend */}
        <Card title="AMBIENT TEMPERATURE">
           <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tempData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <YAxis domain={[20, 35]} hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2022', borderColor: '#4f4632', color: '#e3e2e5', fontSize: '12px' }}
                itemStyle={{ color: '#fb923c' }}
                formatter={(val) => val.toFixed(1) + ' °C'}
                labelStyle={{ display: 'none' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#fb923c" 
                strokeWidth={2} 
                dot={false}
                isAnimationActive={true}
                animationDuration={500}
                animationEasing="ease-in-out"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Signal Strength */}
        <Card title="SIGNAL STRENGTH">
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
             <span className="text-lg font-telemetry-data text-primary-container">{signal.toFixed(2)}</span>
          </div>
          <GaugeComponent
            type="radial"
            arc={{
              colorArray: ['#1e95f2'],
              padding: 0.02,
              width: 0.15,
            }}
            
            value={signal}
            minValue={0}
            maxValue={100}
            labels={{ tickLabels: { hideMinMax: true },
              valueLabel: {
                hide: true
              } }}
            style={{ width: '100%', height: '100%' }}
          />
        </Card>

        {/* Particulate Matter */}
        <Card title="PARTICULATE MATTER">
          <div className="absolute top-0 right-0 flex gap-2 text-[8px] font-label-caps">
            <span className="text-[#a5eeff]">PM1.0</span>
            <span className="text-[#1e95f2]">PM2.5</span>
            <span className="text-[#00497d]">PM10</span>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={pmData} margin={{ top: 15, right: 0, left: 0, bottom: 0 }}>
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2022', borderColor: '#4f4632', color: '#e3e2e5', fontSize: '10px' }}
                labelStyle={{ display: 'none' }}
              />
              <Area type="monotone" dataKey="pm10" stackId="1" stroke="#00497d" fill="#00497d" fillOpacity={0.6} isAnimationActive={true} animationDuration={500} />
              <Area type="monotone" dataKey="pm25" stackId="2" stroke="#1e95f2" fill="#1e95f2" fillOpacity={0.6} isAnimationActive={true} animationDuration={500} />
              <Area type="monotone" dataKey="pm1" stackId="3" stroke="#a5eeff" fill="#a5eeff" fillOpacity={0.6} isAnimationActive={true} animationDuration={500} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Robot Speed */}
        <Card title="ROBOT SPEED">
           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-6">
            <span className="text-lg font-telemetry-data text-primary-container">{speed.toFixed(2)}</span>
            
          </div>
          <GaugeComponent
            type="semicircle"
            arc={{
              width: 0.1,
              colorArray: ['#343537', '#ffc107'],
            }}
            pointer={{
              type: 'needle',
              elastic: true,
              animationDelay: 0,
              color: '#d4c5ab',
              length: 0.6,
              width: 10
            }}
            value={speed}
            labels={
              {
                valueLabel: {
                  hide: true
                }
              }
            }
            minValue={0}
            maxValue={2.0}
            style={{ width: '100%', height: '100%' }}
          />
        </Card>

      </div>
    </div>
  );
}

export default LiveAnalytics;
