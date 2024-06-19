import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import AMC from './component/AMC';
import DA from './component/DA';
import SR from './component/SR';
import DERI from './component/DERI';
import GE from './component/GE';
import CSM from './component/CSM';
import CES from './component/CES';
import Header from './component/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <Header 
          id="navbar"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/automated-monitoring-control" element={<AMC />} />
          <Route path="/data-analytics" element={<DA />} />
          <Route path="/supply-reliability" element={<SR />} />
          <Route path="/distributed-energy-resources-integration" element={<DERI />} />
          <Route path="/green-energy" element={<GE />} />
          <Route path="/cyber-security-measures" element={<CSM />} />
          <Route path="/customer-empowerment-and-satisfaction" element={<CES />} />
        </Routes>
      </>
    </Router>
  );
}

export default App
