import React, { useState, useEffect } from 'react';
import { 
  Settings, HelpCircle, UserCircle, AlertTriangle, Building2
} from 'lucide-react';
import Header from './components/Header';
import RobotHealth from './components/RobotHealth';
import Viewport from './components/Viewport';
import BottomGrid from './components/BottomGrid';
import Environment from './components/Environment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-on-surface h-screen w-screen overflow-hidden flex flex-col font-body-md select-none dark">
      <Header />
      <main className="flex-1 flex pt-[60px] pb-[32px] overflow-hidden gap-container-gap p-container-gap">
        <RobotHealth />
        
        <div className="flex-1 flex flex-col gap-container-gap overflow-y-auto min-h-0">
          <Viewport />
          <BottomGrid />
        </div>
        
        <Environment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
