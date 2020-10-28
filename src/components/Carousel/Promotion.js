import React, {Component} from 'react';
import styles from './Carousel.module.css';

class Promotion extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
// props passed from carousel to display each individual promotion as a link
    render() {
        const {image, link, name} = this.props
        return(
            <a className={styles.link} href={link}>
                <div className={styles.PromotionContainer} >
                    <div className={styles.PromotionCard}>
                        <div className={styles.PromotionWrapper}>
                            <img className={styles.PromotionImage} src={image} alt="promo"></img>
                            <div className={styles.PromotionTitle}>
                                {name}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default Promotion;