import './Techstack.css';
import TypeScriptLogo from './logos/typescript.svg';
import CSharpLogo from './logos/c--4.svg';
import JavaLogo from './logos/java-14.svg';
import CssLogo from './logos/css-3.svg';
import Nodejs from './logos/nodejs-1.svg';
import JavascriptLogo from './logos/javascript-1.svg';
import ReactLogo from './logos/react-2.svg';
import Html5Logo from './logos/html-1.svg';
import GitLogo from './logos/git.svg';


const Techstack=() =>{

    return(
        <div className='techstack-div'>
            <img src={Html5Logo} alt='Html5 Logo' className='html5-logo'/>
            <img src={CssLogo} alt='CSS Logo' className='css-logo' />
            <img src={JavascriptLogo} alt='Javascript Logo' className='javascript-logo'/>
            <img src={TypeScriptLogo} alt="TypeScript Logo" className='ts-logo' />
            <img src={ReactLogo} alt='React Logo' className='react-logo'/>
            <img src={Nodejs} alt='Node.js Logo' className='nodejs-logo'/>
            <img src={JavaLogo} alt="Java Logo" className='java-logo'/>
            <img src={CSharpLogo} alt="C# Logo" className='csharp-logo' />
            <img src={GitLogo} alt="Git Logo" className='git-logo' />
        </div>
    );
};

export default Techstack;