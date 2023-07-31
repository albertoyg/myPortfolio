import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import { useEffect, useState } from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const name = ['A', 'l', 'b', 'e', 'r', 't', 'o',' ','Y','a','n','e','s','-','G','a','r','c','i','a']
    const title = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r']
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
            }, 4000);
    
        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone"> 
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={name}
                        index={0}/> <br/>

                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={title}
                        index={20}/>
                </h1>
                    <Link to="/contact" className='flat-button'>CONTACT YA BOY</Link>
                   
                   
            </div>
        </div>
    )

}

export default Home