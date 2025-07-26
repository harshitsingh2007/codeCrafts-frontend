import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function ContactUs() {
  const [show, showhide] = useState(false);

  return (
    <>
      <header  className={`${styles.headerMain} ${show ? styles.open : styles.closed} `}>
        <div className={styles.container}>
          <div className={styles.contactUs}>
            <p>Contact Us</p>
            <button className={styles.crossToggle1} onClick={() => showhide(!show)}>
              <div className={styles.crossToggle}></div>
            </button>
          </div>
        </div>

        <div className={styles.gridContainer}>
           <div className={styles.gridCard}>
            <Link to='/' className={styles.cardLink}>
            <h1>Home</h1>
            </Link>
            </div>
          <div className={styles.gridCard}>
            <Link to='/about' className={styles.cardLink}>
            <h1>About</h1>
            </Link>
            </div>
          <div className={styles.gridCard}>
            <Link to='/my-account' className={styles.cardLink}>
            <h1>Profile</h1>
            </Link>
            </div>
          <div className={styles.gridCard}>
            <Link to='/template' className={styles.cardLink}>
            <h1>Services</h1>
            </Link>
            </div>
        </div>

        <div className={`${styles.followUs} ${styles.container}`}>
          <p>Follow Us on</p>
         <div className='flex gap-4 text-2xl'>
          <FaInstagram/>
          <FaFacebook/>
          <FaTwitter/>
          <FaLinkedin/>
         </div>
        </div>
      </header>

      {/* Contact Form */}
      <div className={styles.contactUSForm}>
        <div className={`${styles.contactUsFormItem} ${styles.container}`}>
          <p>Contact Us</p>
          <button className={styles.toggleButton} onClick={() => showhide(!show)}>
            <div className={styles.toggle}></div>
            <div className={styles.toggle}></div>
          </button>
        </div>

        <div className={`${styles.contactUsFormItem2} ${styles.container}`}>
          <p>Contact Us</p>
          <h1>Let's get in touch!</h1>
          <h4>We can't wait to hear from you.</h4>
        </div>

        {/* Form */}
        <div className={`${styles.contactUsFormItem3} ${styles.container}`}>
          <div id={styles.contactUsFormItem31}>
            <p>Work Inquires</p>
            <form className={styles.form}>
              <input type="text" placeholder="Name" required/>
              <input type="email" placeholder="Email" required/>
              <input type="text" placeholder="Company Name" required/>
              <input type="text" placeholder="Message" required/>
              <input type="phone" placeholder="Contact Number" required/>
            <button className='w-[250px] py-2.5 bg-black rounded-md  px-4 mt-4 text-white'>We Contact you Shortly</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}