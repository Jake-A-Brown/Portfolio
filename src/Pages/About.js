import './About.css';
import TypingAnimation from '../components/TypingAnimation/TypingAnimation';
import Aboutpicture from '../components/Aboutpicture/Aboutpicture';

const About = () =>{

  const content = "Hi, I'm Jake! Ever since I was a child, " +
  "I've had an unwavering passion for puzzles, problem-solving, "+
  "and making a positive impact on others. Little did I know that life's journey would "+
  "bring me to where I am today. I have an immense love for video games across various "+
  "genres, which constantly sparks my creativity and encourages me to think outside the box. "+
  "I thrive on exploring new approaches and ideas, always seeking innovation. "+
  "One of the things that truly excites me is networking and collaborating with like-minded "+
  "individuals to bring new concepts to life. There's nothing quite like the incredible feeling "+
  "of witnessing something innovative and groundbreaking come to fruition."+
  "In my free time, you'll often find me near the saltwater, indulging in my love for fishing "+
  "and camping. It's my way of reconnecting with nature and finding serenity in the great outdoors. "+
  "I'm thrilled to share my journey and connect with fellow enthusiasts like you. Let's embark on "+
  "exciting ventures together!";

    return(
      <div className="about-div">
        <div className="about-flex-container">
        <div className="about-left-section">
          <h1>About me</h1>
          <TypingAnimation text={content} className="about-paragraph" />
        </div>
        <div className="about-right-section">
          <Aboutpicture />
        </div>
      </div>
      <div></div>
      </div>
    );
  };
  
  export default About;