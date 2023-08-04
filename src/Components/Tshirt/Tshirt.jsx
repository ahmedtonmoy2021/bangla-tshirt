import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const{picture,name,price} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt='image'/>
            <h4>Color : {name}</h4>
            <p>Price: {price}$</p>
            <button onClick={() => handleAddToCart(tshirt)}>But now</button>
        </div>
    );
};

export default Tshirt;