import React from 'react';
import useSound from 'use-sound';
import rushiaBruhSfx from '../asset/rushiaBruh.mp3';

const Home = () => {

  const [play] = useSound(rushiaBruhSfx)


  const handleClick = () => {
    play();
    setTimeout(() => {  console.log("World!"); }, 2000);
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
      <button onClick={handleClick}>Bruh</button>
      <img style={{width:'10%',position:'absolute'}} src={require('../asset/rushiaBruh/RushiaBruh.png')}/>

    </div>
  );
};
  
export default Home;