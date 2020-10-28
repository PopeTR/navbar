import React, {Component} from 'react';
import styles from './Carousel.module.css';

class Promotion extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div className={styles.PromotionContainer}>
                <div className={styles.PromotionCard}>
                    <div className={styles.PromotionWrapper}>
                        <img className={styles.PromotionImage} src={this.props.image} alt="promo" href="www.stoxenergy.com"></img>
                        <div className={styles.PromotionTitle}>
                            {this.props.name}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Promotion;