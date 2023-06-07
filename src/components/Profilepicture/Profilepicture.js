import React from "react";
import ProfilePic from './mb.JPG';
import './Profilepicture.css';

const Profilepicture=()=>{
    return(
        <div className="profile-picture">
            <img src={ProfilePic} alt="Profile"/>
        </div>
    );
};

export default Profilepicture;