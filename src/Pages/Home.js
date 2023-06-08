import "./Home.css";
import Techstack from "../components/Techstack/Techstack";
import Profilepicture from "../components/Profilepicture/Profilepicture";
import TypingAnimation from "../components/TypingAnimation/TypingAnimation";


const Home = () => {
  const content = "The Name is Jake. A passionate Developer that enjoys helping others achieve a better quality of life. Based in Greensboro, NC";

 


  return (
    <div className="home-div">
      <div className="home-flex-container">
        <div className="home-left-section">
          <h1>Full-Stack Developer</h1>
          <TypingAnimation text={content} />
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

