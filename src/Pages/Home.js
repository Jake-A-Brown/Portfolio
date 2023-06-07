import "./Home.css";
import Techstack from "../components/Techstack/Techstack";
import Profilepicture from "../components/Profilepicture/Profilepicture";
import TypingAnimation from "../components/TypingAnimation/TypingAnimation";


const Home = () => {
  const content = "The Name is Jake Brown. A passionate Developer that wants to help others achieve a better quality of life based in Greensboro, NC";

 


  return (
    <div className="home-div">
      <div className="flex-container">
        <div className="left-section">
          <h1>Full-Stack Developer</h1>
          <TypingAnimation text={content} />
        </div>
        <div className="right-section">
          <Profilepicture />
        </div>
      </div>
      <div className="techstack-section">
        <Techstack/>
      </div>
    </div>
  );
};

export default Home;

