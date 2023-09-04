import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCss3, faHtml5, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import ProjectCard from '../ProjectCards'
import quizPic from '../../assets/images/quizapp.png'
import boxingPic from '../../assets/images/boxingPic.png'
import placeholderIMG from '../../assets/images/Screenshot 2023-08-01 at 11.19.14 PM.png'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
            }, 3000);
    
        return () => clearTimeout(timer); 
    }, []);

    const projects = [
        {name: "Probability Quiz", 
        description: "This is my incomplete probability quiz. Started just a few days ago, Im familiarizing myself with Next.js, Amplify, and GraphQL frameworks. I plan to finish this in a few days once I finish my finals!",
        liveDemo: "https://main.d22inxfc0uz571.amplifyapp.com/",
        seeCode: "https://github.com/albertoyg/probability-quiz",
        image: quizPic},
        {name: "Boxing Animation", 
        description: "This is a boxing animation I made from scratch using vector animation",
        image: boxingPic,
        seeCode:"https://github.com/albertoyg/boxing-animation",
        liveDemo:"https://singular-otter-9a2ee3.netlify.app/"},
        {name: "Project 3", description: "This is Project 3",image: placeholderIMG},
        {name: "Project 4", description: "This is Project 4",image: placeholderIMG},
        {name: "Project 5", description: "This is Project 5",image: placeholderIMG}
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