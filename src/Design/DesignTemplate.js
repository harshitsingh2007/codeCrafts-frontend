import React from 'react';
import styles from './Design.module.css';

export default function DesignTemplate() {
  return (
    <div className={styles.designtemplate}>
      <div className={styles.designtemplatecontent}>
        <h1>Your complete website design solution</h1>
        <p>Turn your ideas into a remarkable website experience with thousands of built-in design features that are just a click away.</p>
        <a href="#">Get Started</a>
      </div>
      <div className={styles.designtemplateImage}>
        <img 
          src="https://static.wixstatic.com/media/dea07e_21032d31eeeb44f2828b8fc9ac62a864~mv2.jpg/v1/fill/w_1901,h_730,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dekstop%20%26%20Tablet%20-%20Hero%20Section%20-%20Background%20V2_5%20(29_11_23)%20%5B60%25%5D.jpg" 
          alt="Design Template" 
          loading="lazy"
        />
      </div>
    </div>
  );
}