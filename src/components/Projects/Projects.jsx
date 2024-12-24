import React from "react";
import projects from "../../data/projects.json"
import styles from "./Projects.module.css"


import Projectcard from "./Projectcard";
function Projects() {
    return (
        <section className={styles.container} id="project">
            <h3 className={styles.title}>Projects</h3>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return (
                        <Projectcard key={id} project = {project}/>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;