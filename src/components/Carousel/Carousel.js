import React from 'react';
import styles from './Carousel.module.css';
import Promotion from './Promotion';

const Carousel = (props) => {
    const target = React.createRef();
    const promotions = [{
        name: "Daily",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80", }, 
        { 
        name: "Travel",
        image: "https://images.unsplash.com/photo-1549894595-4698795b38ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", },
        { 
        name: "Sports",
        image: "https://images.unsplash.com/photo-1511110011044-5ce8fb4e7b61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", }, 
        {
        name: "Medical", 
        image: "https://images.unsplash.com/photo-1592671748854-2e0ed15b0441?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80", }]
   
        const promotionItems = promotions.map((val)=>{
            return (
              <Promotion
                name={val.name} 
                image={val.image}
                onClick={()=>{this.handleLinkClick();}}></Promotion>
            )   
        });
          console.log({promotionItems})

    return (
        <div className={styles.MainContainer}>
            <div className={styles.CarouselContainer} ref={target}>
                {promotionItems}
            </div>
        </div>
    )
}

export default Carousel;
