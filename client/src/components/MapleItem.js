import React, { useState } from 'react';
import MapleItemStats from './MapleItemStats';

const MapleItem = (props) => {
  const { title, img } = props;
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
      <MapleItemStats {...props}/>
      <p><b>Quantity: </b>{quantity}</p>
      <button className='mapleButton' onClick={buyItem}>
        Buy Item
      </button>
    </article>
  );
}

export default MapleItem;