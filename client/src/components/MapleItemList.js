import MapleItem from './MapleItem';
import { itemsAvailable } from './../Items';

const MapleItemList = () => {
  return(
    <section className='mapleItemList'> {
      itemsAvailable.map((item) => {
        return <MapleItem key={item.id} {...item}/>
      })}
    </section>
  );
}

export default MapleItemList;