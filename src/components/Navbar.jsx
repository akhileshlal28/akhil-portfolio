import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageURL } from "../utils";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return <div>
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            
            <img className={styles.menuBtn} src={menuOpen?getImageURL("nav/closeIcon.png") : getImageURL("nav/menuIcon.png")} alt="menu" onClick={()=>setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>{setMenuOpen(false)}}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    </div>
};

export default Navbar;