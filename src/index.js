import React, { useState } from 'react';
import ReactDom from 'react-dom';

import MapleItemList from './components/MapleItemList';

import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

import './index.css';

const App = () => {
  const bgFileName = 'background2.jpg';
  const assetsRef = ref(storage, 'assets');
  const bgRef = ref(assetsRef, bgFileName);
  
  const [ bgURL, setBgURL ] = useState('');

  getDownloadURL(bgRef)
  .then(url => setBgURL(url))
  .catch(error => console.log(error.code));
  
  document.body.style.backgroundImage = `url(${bgURL})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.fontFamily = [
    '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
     'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'
  ];

  return(
    <div>
      <MapleItemList/>
    </div>
  );
}

ReactDom.render(<App/>, document.getElementById('root'));