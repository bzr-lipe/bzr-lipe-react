
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import './NavBar.css'

const NavBar = () => {
    return (    
        
        <div className='navbar'>
            <div className='navbar-title'>
                <span>\</span><Link to='/' className='link link-title'><span>b</span><span>z</span><span>r</span><span>-</span><span>l</span><span>i</span><span>p</span><span>e</span></Link>
            </div>
            <div className='navbar-list'>
                <ul>
                    <li><Link to='/resumo' className='link'><span className='list-slash'>\</span>resumo</Link></li>
                    <li><Link to='/contact' className='link'><span className='list-slash'>\</span>contato</Link></li>
                    <li>
                        <a href='https://bit.ly/3mvTXaG' target="_blank" rel="noreferrer" className='icon'><FontAwesomeIcon icon={faGithub} className='icon'/></a>
                    </li>
                    <li>
                        <a href='https://bit.ly/3zZDeQ8' target="_blank" rel="noreferrer" className='icon'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar;