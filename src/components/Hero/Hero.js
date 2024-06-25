import "./Hero.css";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  

  return (
      <div className='Hero'>
        <div className='Hero__textBtn'>Architecture.</div>
        <div className='Hero__textBtn'>Interior.</div>
        <div className='Hero__textBtn'>Landscaping.</div>
      </div>
  );
};

export default Hero;