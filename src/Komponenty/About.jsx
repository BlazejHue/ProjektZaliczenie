import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1> UPCOMING PROMOTIONS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quis ullam. Maxime quam earum consectetur beatae, aspernatur ad sint eum corporis porro assumenda fuga aliquam vitae? Modi, nihil! Quis, voluptatem!</p>
            <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}

export default About;