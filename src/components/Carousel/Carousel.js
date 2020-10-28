import React, {Component} from 'react';
import styles from './Carousel.module.css';
import Promotion from './Promotion';
import axios from 'axios';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state= {
          promotions: []
        }
    } 
// data hosted in firebase cloud as realtime database
    componentDidMount(){
        axios
        .get('https://carousel-askphill.firebaseio.com/.json')
        .then(response => {
            this.setState({promotions: response.data})
        })
        .catch(error => console.log(error))
    }
        
    render() {
        const{promotions} = this.state
        const target = React.createRef();
        // Mapping promotion items from the database and structured in promotion.js
        const promotionItems = promotions.map((val)=>{
            return (
                <Promotion
                    key={val.id}
                    name={val.name} 
                    image={val.image}
                    link={val.link}>
                </Promotion>
            )   
        });

        return (
            // Carousel layout with promotionItems array 
            <div className={styles.MainContainer}>
                <div className={styles.CarouselContainer} ref={target}>
                    {promotionItems}
                </div>
            </div>
        )
    }
}

export default Carousel;
