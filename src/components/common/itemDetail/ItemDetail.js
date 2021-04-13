import React, {useState, useEffect} from 'react';
import './ItemDetail.css';

export default function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(item);
  }, []);

  const [item, setItem] = useState({
    images : {}
  });

  const fetchItem = async () => {
    const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    const item = await response.json();
    setItem(item.data.item);
    console.log(item.data.item);
    
  };
  

  return (
    <div className="main">
      <h1> {item.name} </h1>
      <img src={item.images.icon}></img>
    </div>
  );
}