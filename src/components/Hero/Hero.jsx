import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css"
function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Akhilesh Lal</h1>
                <p className={styles.description}>I'm a student with full of passion and enthusiasm, aspiring to become a Full Stack Web Developer.</p>
                <a href="mailto:akhileshkumarlal7@gmail.com" className={styles.contactBtn}>Let's connect</a>
            </div>
                <img src={getImageURL("hero/image2.png")} alt="me" className={styles.image} />
                <div className={styles.topBlur}></div>
                <div className={styles.bottomBlur}></div>
            
        </section>
    );
};

export default Hero;