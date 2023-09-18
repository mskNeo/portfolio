import React from 'react'
import styles from '../styles/intro.module.scss'


export default function Intro() {
    return (
        <div className={styles.introContainer}>
            <div className={styles.intro}>
                <h1>
                    Mahdeen Khan
                </h1>
                <h2>
                    A Full Stack Developer crafting web experiences,
                    <br/>
                    one line of code at a time
                </h2>
            </div>
        </div>
    )
}
