import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from "../styles/Header.module.css";
import Link from 'next/link';

const Menu = () => (
  <>
    <p>
      <Link href="/"> Home </Link> </p>
    <p><Link href="/updates"> Updates</Link></p>
    <p><Link href="/priests"> Priests </Link></p>
    <p><Link href="/contactus"> Contact Us </Link></p>
    <p><a href="https://www.facebook.com/Palayampalli">Facebook</a></p>
  </>
)
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  console.log(toggleMenu);
  return (
    <div className={styles.gradient_bg}>
      <div className={styles.stjoseph__navbar}>
        <h1><Link href="/">St. Joseph’s Metropolitan Cathedral</Link></h1>
        <div className={styles.stjoseph__navbar_links}>
          <div className={styles.stjoseph__navbar_links_logo}>
          </div>
          <div className={styles.stjoseph__navbar_links_container}>
            <Menu />
          </div>
        </div>
        <div className={styles.stjoseph__navbar_sign}>
          <button type="button"><Link href="/contactus"> Queries</Link></button>
        </div>
        <div className={styles.stjoseph__navbar_menu}>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (  
            <div className={styles.stjoseph__navbar_menu_container}>
              <div className={styles.stjoseph__navbar_menu_container_links}>
                <Menu />
                <div className={styles.stjoseph__navbar_menu_container_links_sign}>
                  <button type="button">Querie</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header