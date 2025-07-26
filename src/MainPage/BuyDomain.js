import React from 'react';
import styles from './Main.module.css';

export default function BuyDomain() {
  return (
    <div className=' border-y-2 border-[#ffffff1a]'>
    <div className={styles.makeWebsideContainer}>
      <div className={styles.makeWebsideItems}>
        <h1>Make your website official with your own domain name</h1>
      </div>
      <div className={styles.makeWebsideItems}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="e.g. futurep"
            />
            <button className={styles.searchButton}>
              Search <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.makeWebsideItems}>
        <p>Get a
          <a href=""> Custom domain</a> free for one year with the initial purchase of an annual <a href="">Premium Plan</a></p>
      </div>
    </div> 
    </div>
  );
}