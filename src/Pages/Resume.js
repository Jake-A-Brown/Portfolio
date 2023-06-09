import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-div">
      <h1 className="resume-heading">Jake Brown</h1>
      <p className="resume-address">Greensboro NC</p>
      <p className="resume-contact">JakeBrown@jbrownjake.com</p>

      <h2 className="resume-section">COMPUTER PROGRAMMER</h2>
      <p className="resume-description">
        Highly Driven and goal-oriented programmer soon to be Graduate that loves new challenges pursuing an AAS degree from
        Chattahoochee Technical Community college. Active Volunteer as a mentor/coding mentor for Persevere, and currently
        learning React. Current server with exceptional communication skills. Proficient in various programming languages, including Java, C#, and SQL. Seeking a challenging Programming role where I
        can leverage my skills and passion for technology to drive innovation and solve complex problems. Very much enjoy
        collaborating with others on new ideas and challenges.
      </p>
      <h2 className="resume-section">TECHNICAL PROFICIENCIES</h2>
      <p className="resume-skills">
        <strong>Software:</strong> Microsoft Office (Access, Excel, PowerPoint, Word), IntelliJ, Visual Studio, Visual Studio Code
      </p>
      <p className="resume-skills">
        <strong>Operating Systems:</strong> Windows XP, Linux, Android
      </p>
      <p className="resume-skills">
        <strong>Programming languages:</strong> C#, C, Java, HTML, CSS, JavaScript, Typescript, SQL
      </p>

      <h2 className="resume-section">PROFESSIONAL EXPERIENCE</h2>
      <div className="resume-experience">
        <h3 className="resume-job-title">Volunteer/Mentor</h3>
        <p className="resume-company">PERSEVERE - Atlanta, GA</p>
        <p className="resume-date">February 2023 – Current</p>
        <ul className="resume-duties">
          <li>Facilitate weekly meetings to help with ongoing projects, completing curriculum, reviewing code, or learning a new language.</li>
          <li>Guide and Support in personal growth and development.</li>
          <li>Assist with Problem Solving and Critical thinking.</li>
        </ul>
      </div>

      <div className="resume-experience">
        <h3 className="resume-job-title">Server</h3>
        <p className="resume-company">Macs Speed Shop - Greensboro, NC</p>
        <p className="resume-date">March 2023 - Current</p>
        <ul className="resume-duties">
          <li>Servers collaborate with other staff members, ensuring smooth teamwork, effective communication, and a well-coordinated restaurant operation.</li>
          <li>Servers regularly check on guests throughout their meal, ensuring that they have everything they need, addressing any concerns, and promptly resolving any issues that may arise.</li>
          <li>Servers liaise with the kitchen staff, communicating orders, relaying any special requests or modifications, and ensuring the timely preparation and delivery of food.</li>
        </ul>
      </div>

      <h2 className="resume-section">EDUCATION</h2>
      <div className="resume-education">
        <p className="resume-school">Chattahoochee Technical College - Marietta, GA</p>
        <p className="resume-degree">Associate of Applied Science, Computer Programming - December 2023</p>
        <ul className="resume-certificates">
          <li>Java Fundamentals Certificate</li>
          <li>Java Programmer Certificate</li>
        </ul>
        <p className="resume-gpa">G.P.A. - 3.59</p>
        <p className="resume-courses">Relevant Courses: Full stack: React and Java Spring boot- (current) will put link for certificate upon completion.</p>
      </div>
    </div>
  );
};

export default Resume;
