import React from "react";
import ProfilePic from './profile-picture-2.JPG';
import './Profilepicture.css';

const Profilepicture=()=>{
    return(
        <div className="profile-picture">
            <img src={ProfilePic} alt="Profile"/>
        </div>
    );
};

export default Profilepicture;