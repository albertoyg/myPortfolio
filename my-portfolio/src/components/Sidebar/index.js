import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import mylogo from '../../assets/images/mylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={mylogo} alt="logo" />
        </Link>
        <nav>
            {/* home button */}
            <NavLink 
                exact="true" 
                activeclassname="active" 
                to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#fbe8a6" />
            </NavLink>
            {/* about button */}
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#fbe8a6" />
            </NavLink>
            {/* contact button */}
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="contact-link" 
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#fbe8a6" />
            </NavLink>
        </nav>

        {/* social buttons  */}
        <ul>
            {/* linkedin button */}
            <li>
                <a target="_blank" rel='roreferrer' href='https://www.linkedin.com/in/alberto-yanes-garcia-b50278284/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#fbe8a6" />
                </a>
            </li>
            {/* Github button */}
            <li>
                <a target="_blank" rel='roreferrer' href='https://github.com/albertoyg'>
                    <FontAwesomeIcon icon={faGithub} color="#fbe8a6" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar