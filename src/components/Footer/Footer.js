import React from 'react';
import styles from './Footer.module.css'

const contactInfo = [
    {
        info: "phone",
        title: "Call",
        address: "+31 (0)20 260 0129",
    },
    {
        info: "address",
        title: "Address",
        address: "Singel 436, Amsterdam, 1017 BR",
    },
    {
        info: "email",
        title: "mail",
        address: "support@stoxenergy.com",
    }
]


const Footer = () => {
    return(
        <div className={styles.FooterContainer}>
            <div className={styles.Navigation}>
                <a href="https://www.stoxenergy.com/en-GB/technology/">Technology</a>
                <a href="https://www.stoxenergy.com/en-GB/reviews/">Reviews</a>
                <a href="https://www.stoxenergy.com/en-GB/blog/">Blog</a>
                <a href="https://www.stoxenergy.com/en-GB/general-terms-conditions/">Terms</a>
            </div>
            <div className={styles.Info}>
                <p><strong>Call</strong> +31 (0)20 260 0129</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p><strong>mail</strong> support@stoxenergy.com</p>
            </div>
        </div>
    )
}

export default Footer;