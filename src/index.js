import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import MapleItemList from './components/MapleItemList';

const App = () => {
  return(
    <MapleItemList/>
  );
}

ReactDom.render(<App/>, document.getElementById('root'));