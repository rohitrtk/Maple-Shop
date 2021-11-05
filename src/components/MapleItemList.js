import { useState, useEffect } from 'react';

import MapleItem from './MapleItem';

import { pFirestore as db } from '../firebaseConfig';
import { collection, onSnapshot } from '@firebase/firestore';

const MapleItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => 
    onSnapshot(collection(db, 'items'), (snapshot) => {
      setItems(snapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id};
      }));
    }), []);
  
  return(
    <section className='mapleItemList'> {
      items.map((item) => {
        return <MapleItem key={item.id} {...item}/>
      })}
    </section>
  );
}

export default MapleItemList;