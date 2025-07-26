import React from 'react';
import styles from './Design.module.css';

export default function ExploreDesign() {
  return (
    <div className={styles.exploreDesign}>
      <div className={styles.exploreDesignContainer}>
        <div className={styles.exploreDesignHeader}>
          <h1>Ignite your design with optimized templates</h1>
        </div>
        <div className={styles.exploreDesignHeader}>
          <p>Explore our industry-leading collection of website templates and customize them to reflect your brand's unique identity.</p>
          <a href="">Explore Templates</a>
        </div>
      </div>
        
      <div className={styles.exploreDesignContainer2}>
        <div className={styles.exploreDesignCard}>
          <img 
            src="https://static.wixstatic.com/media/0784b1_1547b65cfb5248b69b64e11083d1e60b~mv2.jpg/v1/fill/w_710,h_411,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fold%202%20-%20Template%201.jpg" 
            alt="eCommerce template" 
            className={styles.cardImage1}
            loading="lazy"
          />
          <a>eCommerce</a>
        </div>
        <div className={styles.exploreDesignCard}>
          <img 
            src="https://static.wixstatic.com/media/0784b1_7b97501ab70f45719c5129ab5fdfabb3~mv2.jpg/v1/fill/w_710,h_407,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202023-09-04%20at%2015_28.jpg" 
            alt="Business template"
            className={styles.cardImage1} 
            loading="lazy"
          />
          <a>Business & Services</a>
        </div>
        <div className={styles.exploreDesignCard}>
          <img 
            src="https://static.wixstatic.com/media/0784b1_9bcd1e3aa09041d69ac26e2bd1a9d737~mv2.jpg/v1/fill/w_220,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fold%202%20-%20Template%202.jpg" 
            alt="Photography template"
            className={styles.cardImage2} 
            loading="lazy"
          />
          <a>Photography</a>
        </div>
      </div>

      <div className={styles.exploreDesignContainer2}>
        <div className={styles.exploreDesignCard}>
          <img 
            src="https://static.wixstatic.com/media/0784b1_aa4a444bd9044245aa92c5f0a6f7838d~mv2.jpg/v1/fill/w_221,h_411,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fold%202%20-%20Template%204.jpg" 
            alt="Portfolio template"
            className={styles.cardImage2}
            loading="lazy"
          />
          <a>portfolio</a>
        </div>
        <div className={styles.exploreDesignCard}>
          <img 
            src="https://static.wixstatic.com/media/0784b1_2d7cac830cf74f36844830aa7bb68614~mv2.jpg/v1/fill/w_710,h_411,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fold%202%20-%20Template%205.jpg" 
            alt="Food template"
            className={styles.cardImage1} 
            loading="lazy"
          />
          <a>Food & Drink</a>
        </div>
        <div className={styles.exploreDesignCard}>
          <img 
            src="https://static.wixstatic.com/media/0784b1_b9b5f2b1ca3b481399a1a02f91d08cf0~mv2.jpg/v1/fill/w_710,h_411,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fold%202%20-%20Template%206.jpg" 
            alt="Blog template"
            className={styles.cardImage1} 
            loading="lazy"
          />
          <a>Blog</a>
        </div>
      </div>
    </div>
  );
}