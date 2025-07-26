import React from 'react';
import styles from './Design.module.css';

export default function JoinPlatform() {
  return (
    <section className={styles.joinPlatform}>
      <div className={styles.joinPlatformContent}>
        <div className={styles.joinPlatformHeader}>
          <h1>Join the platform trusted by over 250 million users</h1>
          <a href="#">Start Designing</a>
        </div>
        
        <div className={styles.platformCards}>
          <div className={styles.platformCard}>
            <div className={styles.cardImageWrapper}>
              <img 
                src="https://static.wixstatic.com/media/0784b1_c8dde84c69eb4415855dd54c17050b09~mv2.jpg" 
                alt="Website designs showcase" 
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Find inspiring website designs created by our users</h3>
              <a href="#">Explore Sites</a>
            </div>
          </div>
          
          <div className={styles.platformCard}>
            <div className={styles.cardImageWrapper}>
              <img 
                src="https://static.wixstatic.com/media/0784b1_998c2b60c58f49a8b2be0e920b44c1fe~mv2.jpg" 
                alt="Professional designers" 
                loading="lazy"
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Hire a professional designer to bring your vision to life</h3>
              <a href="#">Hire a Pro</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}