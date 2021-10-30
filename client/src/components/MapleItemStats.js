import React from 'react';

const MapleItemStats = (props) => {
  const { reqLevel, attack, price } = props;
  
  return(
    <React.Fragment>
      <p><b>REQ Level: </b>{reqLevel}</p>
      <p><b>Attack: </b>{attack}</p>
      <p><b>Price: </b>{price}</p>
    </React.Fragment>
  );
}

export default MapleItemStats;