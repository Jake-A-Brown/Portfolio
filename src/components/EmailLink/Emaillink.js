import React from 'react';
import './Emaillink.css';
import { Link } from "react-router-dom";

const Emaillink = () => {
  const email = 'JakeBrown@jbrownjake.com';
  const subject = 'Lets collaborate together!';
  const body = '';

  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Link className='email-link' to="#" onClick={handleClick}>
      <p>JakeBrown@jbrownjake.com</p>
    </Link>
  );
};

export default Emaillink;