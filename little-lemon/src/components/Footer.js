import React from 'react';
import logo from '../images/Logo .svg';

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>

                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Now</a></li>
                        <li><a href='/'>Login</a></li>
                    
                    </ul>
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>Address: <br/>123 Towncity, USA</li>
                            <li>Phone: <br/>++ 0123 456 789</li>
                            <li>Email: <b/>little@lomon.com</li>
                        </ul>

                        <div>
                            <h3>Social Media</h3>
                            <ul>
                            <li>Address: <b/>Facebook</li>
                            <li>Phone: <br/>Instagram</li>
                            <li>Twitter</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;