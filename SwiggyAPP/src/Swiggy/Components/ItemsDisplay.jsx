import React, { useState } from 'react';
import { itemData } from '../data';

const ItemsDisplay = () => {
  
    const[displayItem,setDisplayItem]=useState(itemData)
  return (
    <div className="itemSection">

    {displayItem.map((i)=>{return(<div className='gallery'><img src={i.item_img} alt='Gallery Images'/></div>)})}

    </div>
  )
}

export default ItemsDisplay