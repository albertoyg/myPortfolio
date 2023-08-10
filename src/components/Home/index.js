import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


const Home = () => {
    // for name and title
    const [letterClass, setLetterClass] = useState('text-animate')
    // for map
    const [isMapVisible, setMapVisibility] = useState(false)
    const showMap = () => setMapVisibility(true)
    const hideMap = () => setMapVisibility(false)
    // for resume
    const resume = "/AlbertoYanesResume.pdf";
    const downloadResume=(url)=>{
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download',fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
    
    

    


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
                            strArray={['A', 'l', 'b', 'e', 'r', 't', 'o',' ','Y','a','n','e','s','-','G','a','r','c','i','a']}
                            index={0}/> <br/>

                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r']}
                            index={20}/>
                    </h1>

                        <h2>

                            <div className="h2text">
                                Bachelors of Computer Science <br/>
                                From the University of Victoria <br/>
                            </div>

                            <div className="mapButton">
                                <button onClick={showMap} className="flat-button">Show map</button><br/>
                            </div>
                          
                        </h2>
                        
                        <div className="buttonBar">

                            {/* contact button */}
                            <Link to="/contact" className='flat-button'>
                                Contact me
                            </Link>

                            {/* Resume button */}
                            <button 
                                className="flat-button"
                                onClick={() => {
                                    downloadResume(resume);
                                }}>
                                    Download resume
                                </button>

                            {/* projects button */}
                            <Link to="/projects" className='flat-button'>
                                See projects
                            </Link>

                        </div>
                        

                    

                </div>

                <div className={`mapBox ${isMapVisible ? 'mapBoxVisible' : ''}`}>
                    
                    {isMapVisible && (
                            <MapContainer 
                                className="map-container"
                                center={[48.463254, -123.312164]} 
                                zoom={15} >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    maxZoom={19} />
                                <Marker position={[48.463254, -123.312164]}>
                                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                                </Marker>
                            </MapContainer>
                        )}    

                    <div className="hide-map-button" onClick={hideMap}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M4 4L16 16" />
                            <path d="M16 4L4 16" />
                        </svg>
                    </div>

                </div>
                    
            </div>

    )

}

export default Home