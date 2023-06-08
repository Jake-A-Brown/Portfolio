import React from "react";
import AboutPic from './Piers.JPG';
import './Aboutpicture.css';

const Aboutpicture=()=>{

    return(
        <div className="about-picture">
            <img src={AboutPic} alt="Pier" />
        </div>
    );
};

export default Aboutpicture;