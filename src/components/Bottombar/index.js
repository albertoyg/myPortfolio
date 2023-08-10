import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import mylogo from '../../assets/images/mylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
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
            {/* projects button */}
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="projects-link" 
                to="/projects"
            >
                <FontAwesomeIcon icon={faBriefcase} color="#fbe8a6" />
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
                <a href='https://www.linkedin.com/in/alberto-yanes-garcia-b50278284/' target="_blank" rel='roreferrer noopener'>
                    <FontAwesomeIcon icon={faLinkedin} color="#fbe8a6" />
                </a>
            </li>
            {/* Github button */}
            <li>
                <a  href='https://github.com/albertoyg' target="_blank" rel='roreferrer noopener'>
                    <FontAwesomeIcon icon={faGithub} color="#fbe8a6" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar