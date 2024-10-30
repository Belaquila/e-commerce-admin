import React from 'react';
import './About.css'; // Import the CSS file

function About() {
    return (
        <div className='dashboard'>
        

        <div className="about-container">
            {/* Project Details Section */}
            <section className="project-details">
                <h2>About the Project</h2>
                <p>
                    This project is a simple react application that enables an administrator to manage list of items on their e-commerce website.
                    It allows them to view list of products, view details, change details and save changes.
                    All item's data is kept in the local storage for demo.
                </p>
            </section>

            {/* Team Members Section */}
            <section className="team-members">
                <h2>Meet the Team</h2>
                <div className="member-list">

                    {/* Member 1 */}
                    <div className="member">
                        <img src="../src/assets/Ahmed_img.jpeg" alt="Member 1" />
                        <h3>Ahmed Belabdia</h3>
                        <div className="social-links">
                            <a href="https://github.com/Belaquila" target="_blank" rel="noopener noreferrer">
                                {/* GitHub Logo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" className="icon">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.9-.014 3.293 0 .32.218.694.825.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/ahmed-belabdia-a19118128/" target="_blank" rel="noopener noreferrer">
                                {/* LinkedIn Logo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0e76a8" className="icon">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.782 0-.978.784-1.75 1.75-1.75s1.75.772 1.75 1.75c0 .978-.784 1.782-1.75 1.782zm13.5 11.268h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.235c.897-.822 2.092-1.235 3.5-1.235 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Member 2 */}
                    <div className="member">
                        <img src="../src/assets/Batuhan_img.png" alt="Member 2" />
                        <h3>Batuhan Yildirim</h3>
                        <div className="social-links">
                            <a href="https://github.com/bthnyildirim" target="_blank" rel="noopener noreferrer">
                                {/* GitHub Logo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" className="icon">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.9-.014 3.293 0 .32.218.694.825.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/batuhan-yildirim-17b109124/" target="_blank" rel="noopener noreferrer">
                                {/* LinkedIn Logo */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0e76a8" className="icon">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.782 0-.978.784-1.75 1.75-1.75s1.75.772 1.75 1.75c0 .978-.784 1.782-1.75 1.782zm13.5 11.268h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.235c.897-.822 2.092-1.235 3.5-1.235 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        </div>
    );
}

export default About;
