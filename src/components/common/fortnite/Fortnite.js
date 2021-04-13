import React, {useState, useEffect} from 'react';
import './Fortnite.css';
import { Link } from 'react-router-dom';

export default function Fortnite() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    setItems(items.data)
  }
  

  return (
    <div className="main">
      <h1>Fortnite!</h1>
      <p>This is a test of the Fortnite API</p>
      <p>Get the daily store that automatically updates at 1 am CET.</p>
      
      {items.map(item => (
        <h2 key ={item.itemId}>
          <Link to={`/fortnite/${item.itemId}`}>
            {item.item.name}
          </Link>
        </h2>  
      ))}
    </div>
  );
}