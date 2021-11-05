import React from 'react';

const MapleItemStats = (props) => {
  const { reqLevel, att } = props;

  return(
    <React.Fragment>
      <p><b>REQ Level: </b>{reqLevel}</p>
      <p><b>Attack: </b>{att}</p>
    </React.Fragment>
  );
}

export default MapleItemStats;