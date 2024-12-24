import React from "react";
import styles from "./About.module.css"
import { getImageURL } from "../../utils";

function About() {
    return (
        <section className={styles.about} id="about">
            <h1>ABOUT</h1>
            <div className={styles.content}>
                <img src={getImageURL("about/image1.png")} alt="about-image" className={styles.aboutImage}/>
                <div className={styles.about_content}>
                    <div className={styles.aboutItems}>
                        <img src="assets\about\cursorIcon.png" alt="cursor-image" />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>I’m a front-end developer with experience
                                in building responsive and optimized sites</p>
                        </div>
                    </div>
                    <div className={styles.aboutItems}>
                        <img src="assets\about\serverIcon.png" alt="server-image" />
                        <div>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and
                                optimised back-end systems and APIs</p>
                        </div>
                    </div>
                    <div className={styles.aboutItems}>
                        <img src="assets\about\uiIcon.png" alt="ui-image" />
                        <div>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and
                                have created design systems as well</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;