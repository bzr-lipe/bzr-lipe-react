import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';




function Home(){
    return(
        <div className='home'>
            <section className='header'>
                <div className='hero'>
                    <h1>
                        <span>\</span>bzr-lipe
                    </h1>
                    <p id="header-nome">
                        Felipe Bezerra da Silva
                    </p>
                    <div className='frontend'>
                        <p>
                            Front-end Developer
                        </p>
                    </div>
                </div>
                <div className='arrow-scroll'>
                    
                    <FontAwesomeIcon icon={faChevronDown} className='icon'/>
                    <p>
                        scroll down
                    </p>
                </div>
            </section>
            <section>
                <h1>dsadasda</h1>
            </section>
        </div>
    )

}

window.onchange= () => {
    gsap.fromTo('#header-nome', {opacity: 0}, {duration: 1, opacity: 1, delay: 0.5});
    gsap.fromTo('.frontend',{opacity: 0}, {duration: 1, opacity: 1, delay: 2});
    gsap.to('.icon', {duration: 1, y:-5, yoyo:true, repeat: 1})
}

export default Home;