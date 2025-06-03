import logo from '../assets/logo_as.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Navbar = () => {
  return <nav className=' mb-20 flex items-center justify-between py-6'>
   <div className="flex flex-shrink-0 items-center ml-3">
    <img src={logo}  alt="logo" className="h-10 w-10 mx-2" />
   </div>
   <div className="m-8  flex items-center justify-center gap-4 text-2xl" >
   <a href="https://www.linkedin.com/in/anjali-sharma-746587259/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ItsAnjaliSharma" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/anjali70637" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100027666734646" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/anji.sharma.24" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
   </div>
  </nav>
}

export default Navbar
