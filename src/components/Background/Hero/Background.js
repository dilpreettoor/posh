import "./Background.css";
import React, { useState, useEffect } from 'react';
import day from "../../../assets/Images/dayImage.jpg";
import night from "../../../assets/Images/nightImage.jpeg";

const Background = ({ children }) => {
    const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const checkDay = () => {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 12) {
        setIsDay(true);
      } else {
        setIsDay(false);
      }
    };

    checkDay();
    const interval = setInterval(checkDay, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return <div className="background" style={{
    backgroundImage: `url(${isDay ? day : night})`,
  }}>{children}</div>;
};

export default Background;