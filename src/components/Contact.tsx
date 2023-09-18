import React from 'react'
import styles from '../styles/contact.module.scss'

export default function Contact() {
    return (
        <div className={styles.contact}>
            <img src={require("../assets/logo.png")} alt='logo' className={styles.logo} />
            <div className={styles.icons}>
                <a href="https://github.com/mskNeo">
                    <img src={require("../assets/github.png")} alt='https://github.com/mskNeo' className={styles.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/mahdeen-khan/" >
                    <img src={require("../assets/linkedin.png")} alt='https://www.linkedin.com/in/mahdeen-khan/' className={styles.icon}/>
                </a>
            </div>
        </div>
    )
}
