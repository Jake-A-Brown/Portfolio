import "./Home.css";
import Techstack from "../components/Techstack/Techstack";
import Profilepicture from "../components/Profilepicture/Profilepicture";
import TypingAnimation from "../components/TypingAnimation/TypingAnimation";


const Home = () => {
  const content = "The name is Jake, and I'm a passionate developer dedicated to making a positive "+
  "impact and enhancing lives. Based in Greensboro, NC, I thrive on creating innovative solutions "+
  "that address real-world challenges. With a deep-rooted passion for development, I approach every "+
  "project with enthusiasm and a genuine desire to make a difference. Collaborating with individuals "+
  "and organizations, I aim to bring ideas to life and shape a brighter future through technology. "+
  "Together, let's create something remarkable and contribute to a better quality of life for all.";

 


  return (
    <div className="home-div">
      <div className="home-flex-container">
        <div className="home-left-section">
          <h1>Full-Stack Developer</h1>
          <TypingAnimation className='type-animation' text={content} />
        </div>
        <div className="home-right-section">
          <Profilepicture />
        </div>
      </div>
      <div className="home-techstack-section">
        <Techstack/>
      </div>
    </div>
  );
};

export default Home;

