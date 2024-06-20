import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const CES = () => {

  return (
    <>
      <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Customer Empowerment Satisfaction</h1>
            <h3>Realtime Data to Customer</h3>
            <h3>Customer Satisfaction Feedback</h3>
            <p>Customer Satisfaction Surveys are routinely conducted once a year in the second semester. For the Customer Satisfaction Index in 2023, the score reached 98.02%.</p>
          </div>
        </div>
    </>
  );
};

export default CES;