import React from 'react';
import styles from './Header.module.css';

const Header = () => {
        return (
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img className={styles.styledlogo} src="https://www.wandel.nl/upload_mm/7/a/b/59ec7eba-5910-45cb-ba55-a0a7cdaf807f_LOGO%20III_zwart_1200_850x132.png" href="www.stoxenergy.com"/>
                    </div>
                    <div className={styles.icons}>
                        <i className="fas fa-search"></i>
                        <div className={styles.divi}>
                            <svg 
                                className={styles.cart} 
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"/>
                            </svg>
                            <p className={styles.text}>0</p>
                        </div>
                    </div>
                </div>      
        )
    }

export default Header;