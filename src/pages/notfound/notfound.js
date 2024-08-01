import React from "react";
import Homer from "../../assets/Images/homer.png";
import './notfound.css';
import Header from "../../components/Header/header";

const NotFound = () => {
  return (
    <>
    <Header/>
    <div className="notfound">
      <h2 className="notfound__heading">
        Oops, Looks Like You've Discovered an Empty Blueprint!
      </h2>
      <p className="notfound__text">
        Our team of expert architects have searched high and low, but it seems this
        virtual floor plan is currently vacant. Don't worry, our real projects are bustling with creativity and innovation, just waiting for your exploration! Feel free to navigate back to our portfolio using the links provided above.
      </p>

      <img
      className="notfound__image"
        src={Homer}
        alt="homer"
      />
    </div>
    </>
  );
}

export default NotFound;
