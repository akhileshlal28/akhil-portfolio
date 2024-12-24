import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Projectcard.module.css"

function Projectcard({project : {title, imageSrc, description, skills,demo, source}}) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={getImageURL(imageSrc)} alt={`Image of ${title}`} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (<li key={id} className={styles.skill}>{skill}</li>);
                })}
            </ul>
            <div className={styles.links}>
                <a href={source} className={styles.link}>Source</a>
                <a href={demo} className={styles.link}>Demo</a>
            </div>
        </div>
    );
}

export default Projectcard;