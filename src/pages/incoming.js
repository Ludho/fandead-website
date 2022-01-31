import React from 'react';
import Countdown from 'react-countdown';
import {useEffect, useState} from 'react';

const Incoming = () => {

  const [lives, setLives] = useState(null);
  const [upcomings, setUpcomings] = useState([]);

  useEffect(()=>{
    getLives()
  },[]);



  async function getLives() {
    let url = new URL(process.env.REACT_APP_URLAPILIVES);
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then((data)=>{
      data.live.forEach(live => {
        if(live.channel.name.includes("Rushia")){
          setLives(live);
        }
      });
      let upcoming=[];
      data.upcoming.forEach(live => {
        if(live.channel.name.includes("Rushia")){
          upcoming.push(live);
        }
      });
      setUpcomings(upcoming);
    })
  }

  return (<>
    { lives &&
    <div className='container' style={{padding:'60px',height:'100vh'}}> 
      <iframe title="live" style={{display: 'block', width:'80%',marginLeft:'auto',marginRight:'auto',height:'80%'}} src={'https://www.youtube.com/embed/'+lives.yt_video_key+'?autoplay=1&playsinline=1&enablejsapi=1'}></iframe>
    </div>
    }
    { !lives && upcomings[0] &&
        <div className='container' style={{padding:'60px',height:'100vh'}}> 
          <p style={{color:'white',textAlign:'center',fontSize:'xxx-large'}}><Countdown date={new Date(upcomings[0].live_schedule)} onComplete={getLives}/></p>
          <iframe title="live" style={{display: 'block', width:'80%',marginLeft:'auto',marginRight:'auto',height:'80%'}} src={'https://www.youtube.com/embed/'+upcomings[0].yt_video_key+'?autoplay=1&playsinline=1&enablejsapi=1'}></iframe>
        </div>
    }
    { !lives && !upcomings[0] &&
          <div style={{backgroundColor:process.env.REACT_APP_DARK_BLUE}}>
            <div className='container' style={{width:'100vh',padding:'60px',height:'100vh',textAlign: 'center'}}> 
              <p style={{color:'white',textAlign:'center',fontSize:'xxx-large',fontFamily:'Brush Script MT'}}>Nothing scheduled ...</p>
              <img alt='RushiaSad' style={{display: 'block', width:'30%',height:'auto',marginLeft:'auto',marginRight:'auto'}} src={require('../asset/uruha-rushia-hololive.gif')}/>
            </div>
          </div>
    }
    </>
  );
};
  
export default Incoming;