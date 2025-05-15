import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Contracts from './pages/Contracts';
import Finance from './pages/Finance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="finance" element={<Finance />} />
          {/* Other routes will be added as needed */}
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;