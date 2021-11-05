import React from 'react';
import ReactDom from 'react-dom';

import MapleItemList from './components/MapleItemList';

import './index.css';

const App = () => {
  return(
    <MapleItemList/>
  );
}

ReactDom.render(<App/>, document.getElementById('root'));