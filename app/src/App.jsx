import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/root/Home';
import AMC from './component/page/AMC';
import DA from './component/page/DA';
import SR from './component/page/SR';
import DERI from './component/page/DERI';
import GE from './component/page/GE';
import CSM from './component/page/CSM';
import CES from './component/page/CES';
import Header from './component/root/Header';
import Footer from './component/root/Footer';

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('self');

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
        <Footer/>
      </>
    </Router>
  );
}

export default App
