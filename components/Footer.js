import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () =>
  <div className={styles.church__footer}>
    <div className={styles.church__footer_links}>
      <div className={styles.church__footer_links_logo}>
        <h1 className={styles.church__footer_heading}>
          St Joseph Metropolital Cathedral
        </h1>
        <p>All Rights Reserved</p>
      </div>
      <div className={styles.church__footer_links_div}>
        <h4>Links</h4>
        <p>Overons</p>
        <p>
          <a href="https://www.facebook.com/Palayampalli">Facebook</a>
        </p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className={styles.church__footer_links_div}>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className={styles.church__footer_links_div}>
        <h4>Website Design</h4>
        <p>Anil Antony</p>
        <p>anilantony3134@gmail.com</p>
      </div>
    </div>
  </div>;

export default Footer;
