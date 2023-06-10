import React from 'react'
import styles from '../styles/Contact.module.css'
import { FiMail } from 'react-icons/fi';
import { AiFillPhone } from 'react-icons/ai';
import { HiOfficeBuilding } from 'react-icons/hi';
import { GiIronCross } from 'react-icons/gi';
import { BiChurch } from 'react-icons/bi';

export const Contact = () => {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_card}>
                <FiMail />
                <p>Email</p>
                <p style={{marginTop:'-25px'}}>sjmcathedral@gmail.com</p>
                <AiFillPhone />
                <p>Phone</p>
                <p style={{marginTop:'-25px'}}>0471 2320132</p>
            </div>
            <div className={styles.contact_card}>
                <HiOfficeBuilding />
                <p>Office Hours</p>
                <p>9:00am : 1:00pm </p>
                    <p>4:00pm : 6:00pm</p>
            </div>
            <div className={styles.contact_card}>
                <BiChurch />
                <p>Catechism</p>
                <p>8:30 am : 10:00 am</p><p>(Sunday)</p>
            </div>
            <div className={styles.contact_card}>
                <GiIronCross />
                <p>Parish Priest</p>
                <p style={{marginTop:'-25px', fontSize:"1.1rem"}}>Very Rev.Msgr.Wilfred.E</p>
                <p>Asst. Parish Priest</p>
                <p style={{marginTop:'-25px' , fontSize:"1.1rem"}}>Rev.Fr. Bijo Bernad</p>
                <p style={{marginTop:'-25px' , fontSize:"1.1rem"}}>Rev.Fr. Manish Peter</p>

            </div>
        </div>
    )
}
