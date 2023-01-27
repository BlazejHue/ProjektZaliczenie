import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Products() {
    return (
        <div id='products'>
            <h1> CHOOSE & ENJOY</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium facere optio enim soluta illum, recusandae dignissimos quia voluptatum temporibus. Possimus illo laboriosam ullam dolor modi! Mollitia rerum eligendi reprehenderit!</p>
           <div className='a-container'>
            <Productbox image={pimage1} title="Huge Burger" />
            <Productbox image={pimage2} title="Le Mans Burger" />
            <Productbox image={pimage1} title="Huge Burger" />
           </div>
            </div>
    )
}
export default Products;