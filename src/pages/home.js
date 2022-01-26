import React from 'react';
import useSound from 'use-sound';
import rushiaBruhSfx from '../asset/rushiaBruh.mp3';
import {useState} from 'react';

const Home = () => {

  const [play] = useSound(rushiaBruhSfx)
  
  const [bruh, setBruh] = useState(0);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [visible, setVisible] = useState('none');
  const [pictures, setPicture] = useState(
    []
    );
  function addBruh(){
    setBruh(bruh+1)
  }

  function randomPic(index){
    let xpos = Math.floor(Math.random() * 80);
    let ypos = Math.floor(Math.random() * 70);

    let img = Math.floor(Math.random() * 12);
    let pic = "";
    switch(img){
      case 0: pic = require('../asset/rushiaBruh/RushiaBruh.webp'); break;
      case 1: pic = require('../asset/rushiaBruh/RushiaBruh1.webp'); break;
      case 2: pic = require('../asset/rushiaBruh/RushiaBruh2.webp'); break;
      case 3: pic = require('../asset/rushiaBruh/RushiaBruh3.webp'); break;
      case 4: pic = require('../asset/rushiaBruh/RushiaBruh4.webp'); break;
      case 5: pic = require('../asset/rushiaBruh/RushiaBruh5.webp'); break;
      case 6: pic = require('../asset/rushiaBruh/RushiaBruh6.webp'); break;
      case 7: pic = require('../asset/rushiaBruh/RushiaBruh7.webp'); break;
      case 8: pic = require('../asset/rushiaBruh/RushiaBruh8.webp'); break;
      case 9: pic = require('../asset/rushiaBruh/RushiaBruh9.webp'); break;
      case 10: pic = require('../asset/rushiaBruh/RushiaBruh10.webp'); break;
      case 11: pic = require('../asset/rushiaBruh/RushiaBruh11.webp'); break;
      case 12: pic = require('../asset/rushiaBruh/RushiaBruh12.webp'); break;
      default: pic = require('../asset/rushiaBruh/RushiaBruh.webp'); 
    }
    setPicture(pictures => [...pictures, pic]);

    setX(x => [...x, xpos+"%"]);
    
    setY(y => [...y, ypos+"%"]);
        
    setVisible('block');

    setTimeout(
      function() {
        setVisible('none');
        setPicture([]);
        setX([]);
        setY([]);
        setBruh(0);
      },
      1500
    );

    addBruh();

  }

  const handleClick = () => {
    play();
    randomPic(bruh);
    
  };

  return (
    <div
      style={{
        textAlign: 'center',
        height: '100vh',
        color:'white',
        padding:'50px'
      }}
    >
      <h1>Welcome to my fansite of Rushia!</h1>
      {pictures[bruh] && <img alt='rushiabruh0' style={{width:'20%',position:'absolute',left:x[bruh-0],top:y[bruh-0],display:visible}} src={pictures[bruh-0]}/>}
      {pictures[bruh-1] && <img alt='rushiabruh1' style={{width:'20%',position:'absolute',left:x[bruh-1],top:y[bruh-1],display:visible}} src={pictures[bruh-1]}/>}
      {pictures[bruh-2] && <img alt='rushiabruh2' style={{width:'20%',position:'absolute',left:x[bruh-2],top:y[bruh-2],display:visible}} src={pictures[bruh-2]}/>}
      {pictures[bruh-3] && <img alt='rushiabruh3' style={{width:'20%',position:'absolute',left:x[bruh-3],top:y[bruh-3],display:visible}} src={(pictures[bruh-3])}/>}
      {pictures[bruh-4] && <img alt='rushiabruh4' style={{width:'20%',position:'absolute',left:x[bruh-4],top:y[bruh-4],display:visible}} src={(pictures[bruh-4])}/>}
      {pictures[bruh-5] && <img alt='rushiabruh5' style={{width:'20%',position:'absolute',left:x[bruh-5],top:y[bruh-5],display:visible}} src={(pictures[bruh-5])}/>}
      {pictures[bruh-6] && <img alt='rushiabruh6' style={{width:'20%',position:'absolute',left:x[bruh-6],top:y[bruh-6],display:visible}} src={(pictures[bruh-6])}/>}
      {pictures[bruh-7] && <img alt='rushiabruh7' style={{width:'20%',position:'absolute',left:x[bruh-7],top:y[bruh-7],display:visible}} src={(pictures[bruh-7])}/>}
      {pictures[bruh-8] && <img alt='rushiabruh8' style={{width:'20%',position:'absolute',left:x[bruh-8],top:y[bruh-8],display:visible}} src={(pictures[bruh-8])}/>}
      {pictures[bruh-9] && <img alt='rushiabruh9' style={{width:'20%',position:'absolute',left:x[bruh-9],top:y[bruh-9],display:visible}} src={(pictures[bruh-9])}/>}
      {pictures[bruh-10] && <img alt='rushiabruh10' style={{width:'20%',position:'absolute',left:x[bruh-10],top:y[bruh-10],display:visible}} src={(pictures[bruh-10])}/>}
      <button style={{
          /*   Neuromophism design   */
          borderRadius: '16px',
          background: '#65CDAA',
          boxShadow: '#FAFAFA',
          /* Neuromophism design ends*/
          padding: '1em',
          height: '1.2em',
          display: 'flex',
          margin:'auto',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.1s ease',
          fontSize: '1rem',
          cursor: 'pointer',
      }}onClick={handleClick}>Bruh</button>
    </div>
  );
};
  
export default Home;