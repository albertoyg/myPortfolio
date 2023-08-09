import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        emailjs.init('fbI8SThjgZnXCDT3z')

        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
            }, 3000);
    
        return () => clearTimeout(timer); 
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
                'contact_service',
                'contact_form',
                refForm.current
            )
            .then(
                () => {
                    alert('Message successfullt sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )

    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        index={12}
                        />
                    </h1>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                {/* Name textbox */}
                                <li className='half'>
                                    <input 
                                    type='text' 
                                    name="name" 
                                    placeholder='Name' 
                                    required />
                                </li>
                                {/* Email textbox */}
                                <li className='half'>
                                    <input 
                                    type='email' 
                                    name="email" 
                                    placeholder='Email' 
                                    required />
                                </li>
                                <li>
                                    <input 
                                    placeholder="Subject" 
                                    type="text" 
                                    name="subject" 
                                    required />
                                </li>
                                <li>
                                    <textarea
                                    placeholder='Message' 
                                    name='message' 
                                    required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact