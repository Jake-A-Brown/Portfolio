import React, { useRef, useEffect } from "react";
import Emaillink from "../components/EmailLink/Emaillink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import Socialmedia from "../components/Socialmedia/Socialmedia";

const Contact = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 36.0726, lng: -79.7920 },
        zoom: 12,
      });
  
      new window.google.maps.Marker({
        position: { lat: 36.0726, lng: -79.7920 },
        map,
        title: "My Location",
      });
    }
  }, []);
  

  return (
    <div className="contact-div">
      <h1>Contact</h1>
      <h2>Collaborate with me!</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p className="contact-email">
            <FontAwesomeIcon className="email-icon" icon={faEnvelope} size="2x" />
            <Emaillink />
          </p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>678-521-8882</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>Greensboro, NC</p>
        </div>
        <div className="contact-item">
          <h3>Social Media</h3>
          <p>
            <Socialmedia />
          </p>
        </div>
      </div>
      <div ref={mapRef} className="map-container"></div>
    </div>
  );
};

export default Contact;


