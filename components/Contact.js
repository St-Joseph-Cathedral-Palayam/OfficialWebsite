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
                <p style={{marginTop:'-25px'}}>Very Rev. Msgr. Nicholas T</p>
                <p>Asst. Parish Priest</p>
                <p style={{marginTop:'-25px'}}>Rev. Fr. Carwin Roch </p>
                <p style={{marginTop:'-25px'}}>Rev. Fr. Sojan</p>

            </div>
 
                {/* <tr>
                    <td>Office Hours</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Catechism</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Parish Priest</td>
                    <td>Very Rev. Msgr. Nicholas T</td>
                </tr>
                <tr>
                    <td>Asst. Parish Priest</td>
                    <td>Rev. Fr. Carwin Roch  </td><td>
                      </td>
                </tr>
                 */}
                
                
            {/* </table>  */}

        </div>
    )
}
