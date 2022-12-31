import React from 'react'
import styles from "../styles/Header.module.css";

const Popup = (props) => {
    return props.trigger ? (
        <div className={styles.popup}>
            <div className={styles.innnerpop}>
                <button className={styles.popupclose} onClick={() => props.setTrigger(false)}>x</button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Popup