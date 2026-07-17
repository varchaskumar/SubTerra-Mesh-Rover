import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ControlConsole from './pages/ControlConsole';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/control" element={<ControlConsole />} />
      </Routes>
    </Router>
  );
}

export default App;
