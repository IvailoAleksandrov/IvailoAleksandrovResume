import React, { useState, useEffect } from 'react';
import '../styles.css';
import btcLogo from '../Images/btc.png';

function Btc() {
    const [bitcoinPrice, setBitcoinPrice] = useState(null);

    useEffect(() => {
      fetchBitcoinPrice();
    }, []);
  
    const fetchBitcoinPrice = () => {
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => setBitcoinPrice(data.bitcoin.usd))
        .catch(error => console.error('Error fetching Bitcoin price:', error));
    };

  return (
    
      <h3 className="bitcoin-price custom-margin"> Bitcoin Price {bitcoinPrice && (
    <p >
      <img src={btcLogo} alt="Bitcoin Icon" />
        ${bitcoinPrice.toLocaleString()}
    </p>
  )} </h3>

);
 
}

export default Btc;








