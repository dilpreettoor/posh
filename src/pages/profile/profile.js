import React from "react";
import Palak from "../../assets/Images/palak.png";
import "./profile.css";
import Header from "../../components/Header/header";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__text-wrapper">
          <h2 className="profile__heading">About Palak</h2>
          <p className="profile__text">
            Mid-level Architect with comprehensive experience preparing
            architectural designs for residential, public and commercial
            buildings with certification in Construction Project Management.
            Skilled in applying creativity to design, making it highly
            appealing, interesting, yet functional that engages emotion
          </p>

          <p className="profile__text">
            Let’s Transform dreams into reality, one epic space at a time –
            because why settle for ordinary when you can have extraordinary?
          </p>
        </div>
        <div className="profile__image-wrapper">
        <div className="profile__profile-text-wrapper">
        <img className="profile__image" src={Palak} alt="Palak" />
        
        <h2 className="profile__profile-text">Palak Sofat</h2>
        <h3 className="profile__profile-text">Creative Head</h3>
        </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
