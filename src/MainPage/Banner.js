import React, { useState } from 'react';
import styles from './Main.module.css'
import { Link } from 'react-router-dom';
function Banner() {
    const [show, hide] = useState(false)
    return (
        <>
        {/* enqire now form */}
        <div className={`${styles.enquireNowHide} ${show? styles.enquireNow:''}`}>
         <div className={styles.enquireNowContainer}>
        <button onClick={()=>hide(!show)} className={styles.crossToggleButton}>
        <div className={styles.crossToggle} ></div>
        </button>
        <h1>Enquire Now</h1>
        <p>Fill out the form below and we'll get back to you</p>
            <form className={styles.enquireForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email"  placeholder="Your Email" required />
          <textarea placeholder="Your Message"  rows="3" required></textarea>
        <button type="submit" name='index' >Submit</button>
        </form>
      </div>
    </div>
    {/* enquire now form end */}
    <div className='border-y-[1px] border-[#ffffff1a]'>
        <div className={styles.bannerContainer}>
            <div className={styles.banner}>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerItems}>
                        <span>Skill Path</span>
                    </div>

                    <div className={styles.bannerItems}>
                        <h1>Build a Website with HTML, CSS, and GitHub Pages</h1>
                    </div>

                    <div className={styles.bannerItems}>
                        <p>Web developer that  build your own website.</p>
                    </div>

                    <div className={styles.bannerItems}>
                        <p id={styles.bannerItemsChild}>
                            Includes <strong>HTML</strong>, <strong>CSS</strong>, <strong>Responsive Design</strong>,
                            <strong>Flexbox</strong>, <strong>CSS Transitions</strong>, <strong>GitHub Pages</strong>, and more.
                        </p>
                    </div>

                    <div className={styles.bannerItems}>
                        <span>To start YOUR WEBSIDE MAKING, upgrade your plan.</span>
                    </div>

                    <div>
                        <button className={styles.bannerButton} onClick={()=>hide(!show)}>Start</button>
                    </div>
                </div>

                <div className={styles.bannerContent2}>
                    <div className={styles.bannerItems2}>
                        <span>We offer feature like :-</span>
                        <ul>
                            <li>

                                <button>AI assistance for good template</button>
                            </li>
                            <li>

                                <button>2000+ Web developer for you assistence</button>
                            </li>
                            <li>

                                <button>900+ design of creativity</button>
                            </li>
                            <li>

                                <button>Ready webside in the minutes</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        </>
    );
}

export default Banner;