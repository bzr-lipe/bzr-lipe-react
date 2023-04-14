import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';


function Home(){
    return(
        <div className='home'>
            <section className='header'>
                <div className='hero'>
                    <h1>
                        <span>\</span>bzr-lipe
                    </h1>
                    <p>
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
        </div>
    )
}

export default Home;