import React from 'react'
import styles from '../styles/layout.module.scss'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}
