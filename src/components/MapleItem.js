import React, { useState } from 'react';

const MapleItem = (props) => {
  const { title, img, reqLevel, attack, price } = props;
  const [ quantity, setQuantity ] = useState(props.quantity);

  const buyItem = () => {
    if(quantity > 0) {
      setQuantity(quantity - 1);
      return;
    }

    alert('That item is sold out :(');
  }

  return(
    <article className='mapleItem'>
      <h4 className='title'>
        {title}
      </h4>
      <img src={img} alt=''/>
      <p>REQ Level: {reqLevel}</p>
      <p>Attack: {attack}</p>
      <p>Price: {price} mesos</p>
      <p>Quantity: {quantity}</p>
      <button className='mapleButton' onClick={buyItem}>
        Buy Item
      </button>
    </article>
  );
}

export default MapleItem;