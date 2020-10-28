import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        // Header at the top of page including logo and search icon. MenuButton not included here. 
        // Using SVG for icons for improvements when sizing. 
        <div className={styles.container}>
            <a className={styles.iconlink} href="https://www.stoxenergy.com">
                <div className={styles.logo}>
                    <img className={styles.styledlogo} src="https://www.wandel.nl/upload_mm/7/a/b/59ec7eba-5910-45cb-ba55-a0a7cdaf807f_LOGO%20III_zwart_1200_850x132.png" />
                </div>
            </a>

            <div className={styles.icons}>
                <a className={styles.iconlink} href="https://www.stoxenergy.com/en-GB/">
                    <svg 
                        className={styles.search}  
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </a>
                
                <div className={styles.divi}>
                    <a className={styles.iconlink} href="https://www.stoxenergy.com/en-GB/">
                        <svg 
                            className={styles.cart} 
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"/>
                        </svg>
                    </a>
                    <p className={styles.text}>0</p>
                </div>
            </div>
        </div>      
    )
}

export default Header;