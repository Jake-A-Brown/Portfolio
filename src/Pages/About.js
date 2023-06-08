import './About.css';
import TypingAnimation from '../components/TypingAnimation/TypingAnimation';
import Aboutpicture from '../components/Aboutpicture/Aboutpicture';

const About = () =>{

  const content = "Name is Jake. Ever since I was a child their was always a passion for puzzles, solving problems "+
  "and helping others. Never thought lifes journey would lead me to where it is today. "+
  "Avid love for Video games of different genres. Most definitely think outside the box in search of new "+
  "appoaches and ideas. I Enjoy networking and Collaborating with others on new ideas. "+
  "Its always an amazing feeling to see something new and innovative work. "+
  "Salt water is life, love fishing and camping.  ";

    return(
      <div className="about-div">
        <div className="about-flex-container">
        <div className="about-left-section">
          <h1>About me</h1>
          <TypingAnimation text={content} />
        </div>
        <div className="about-right-section">
          <Aboutpicture />
        </div>
      </div>
      </div>
    );
  };
  
  export default About;