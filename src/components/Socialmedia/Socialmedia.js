import './Socialmedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";



const Socialmedia=()=>{

    return(
        <div className='socialmedia-div'>
            <Link to="https://github.com/Jake-A-Brown" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub} size='xl' className='github'/></Link>
            <Link to="https://www.linkedin.com/in/jake-brown-527937225/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedin} size='xl' className='linkedin'/></Link>
        </div>
    );
};

export default Socialmedia;