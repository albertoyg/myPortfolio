import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
            }, 3000);
    
        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                    index={15}
                    />
                </h1>
                <p>
                    These are my projects! 
                </p>
            </div>
            
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="black" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="black" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="black" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="black" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="black" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="black" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects