import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCss3, faHtml5, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import ProjectCard from '../ProjectCards'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
            }, 3000);
    
        return () => clearTimeout(timer); 
    }, []);

    const projects = [
        {name: "Project 1", description: "This is Project 1"},
        {name: "Project 2", description: "This is Project 2"},
        {name: "Project 3", description: "This is Project 3"},
        {name: "Project 4", description: "This is Project 4"},
        {name: "Project 5", description: "This is Project 5"}
    ];

    return (
        <>
    <div className='container projects-page'>
        <div className='main-wrapper'>
            <div className='left-column'>
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
                                <FontAwesomeIcon icon={faPython} color="#303c6c" />
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
                                <FontAwesomeIcon icon={faJava} color="#303c6c" />
                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faJs} color="#303c6c" />
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            <div className='right-column'>
                <div className='projectStage'>
                    {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </div>
</>
    )
}

export default Projects