import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from "../styles/Header.module.css";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={styles.paddingTopFixed}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout