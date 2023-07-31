import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
            }, 3000);
    
        return () => clearTimeout(timer); 
    }, []);

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                        index={12}
                        />
                    </h1>
                </div>
                <div className="stage-cube-cont">
                    <div className='cubespinner-wrapper'>
                        <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faAngular} color="#303c6c" />
                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faHtml5} color="#303c6c" />
                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faCss3} color="#303c6c" />
                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faReact} color="#303c6c" />
                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faJsSquare} color="#303c6c" />
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faGitAlt} color="#303c6c" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects