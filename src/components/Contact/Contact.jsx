import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel Free to Reach Out</p>
            </div>

            <ul className={styles.links} >
                <li className={styles.link}>
                    <img src={getImageURL("contact/emailIcon.png")} alt="email Icon" />
                    <a href="mailto:akhileshkumarlal7@gmail.com">akhileshkumarlal7@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("contact/linkedinIcon.png")} alt="linkedIn Icon" />
                    <a href="https://www.linkedin.com/in/akhilesh-lal-a36a7024a/">My LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageURL("contact/githubIcon.png")} alt="github Icon" />
                    <a href="https://github.com/akhileshlal28">My Github</a>
                </li>
            </ul>
        </footer>

        

    );
};

export default Contact;