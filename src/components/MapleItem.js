import React, { useState, useEffect } from 'react';
import MapleItemStats from './MapleItemStats';
import { prettyInt } from '../utility';

import { db } from '../firebaseConfig';
import { collection, doc, onSnapshot, updateDoc } from '@firebase/firestore';

const MapleItem = (props) => {
  const { title, url, price, stats, type, id } = props;
  const [ quantity, setQuantity ] = useState(props.quantity);

  const buyItem = async () => {    
    console.log('click');
    const itemRef = doc(db, 'items', id);

    if(quantity > 0) {
      setQuantity(quantity - 1)
      await updateDoc(itemRef, {
        quantity: quantity
      });
      return;
    }

    alert('That item is sold out :(');
  }
  
  return(
    <article className='mapleItem'>
      <h4 className='title'>
        {title}
      </h4>
      <img src={url} alt=''/>
      <p><b>Type: </b>{type}</p>
      <MapleItemStats {...stats}/>
      <p><b>Quantity: </b>{quantity}</p>
      <p><b>Price: </b>{prettyInt(price)} mesos</p>
      <button className='mapleButton' onClick={buyItem}>
        Buy Item
      </button>
    </article>
  );
}

export default MapleItem;