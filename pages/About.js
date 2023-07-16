import React from 'react';
import styles from '../styles/about.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to Infinit Seed!</h1>
            <p className={styles.introText}>
                A one-of-a-kind personal growth experience that brings together gamification 
                and real-life skill development. Our app combines the thrilling elements of an RPG game 
                with genuine progression in various skills and attributes, creating an engaging journey 
                designed to help you unlock your true potential.
            </p>
            
            <h2>Key Features:</h2>
            <ul className={styles.features}>
                <li>Combine gaming elements with real-life skill development</li>
                <li>Curate your personalized list of skills and attributes</li>
                <li>Discover detailed descriptions of various abilities</li>
                <li>Unlock new possibilities by reaching milestones within the game</li>
                <li>Experience realistic progression tailor-made for all learners</li>
                <li>Unravel hidden secrets and rewards throughout our enthralling platform</li>
            </ul>
        </div>
    );
};

export default About;