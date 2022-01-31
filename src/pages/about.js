import React from 'react';
import {useEffect, useState} from 'react';
import { ReactComponent as YoutubeSvg } from '../asset/youtube-svgrepo-com.svg';
import { ReactComponent as TwitterSvg } from '../asset/twitter-svgrepo-com.svg';


const About = () => {

  function processSub(count){
   let million = count/1000000;
   let thousand = count/1000;
   if (million>0){
     return million+"M Subscribers"
   }
   if(thousand>0){
    return thousand+"K Subscribers"
   }

   return count+" Subscribers"
  }

  function urlify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex)
       .map(part => {
          if(part.match(urlRegex)) {
             return <a key={part} style={{color:process.env.REACT_APP_PINK}} href={part}>{part}</a>;
          }
          return part;
       });
  }


  const [channel, setChannel] = useState(null);

  useEffect(()=>{
    getChannel()
  },[]);

  async function getChannel() {
    let url = new URL(process.env.REACT_APP_URLAPICHANNEL);

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then((data)=>{
      setChannel(data);
    })
  }



  return (<>
    {channel &&
    <div style={{height:'100vh'}}>
      <img style={{width:'100%',height:'auto'}} alt='RushiaBanner' src={channel.banner+'=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'}/>
      <div style={{backgroundColor:process.env.REACT_APP_DARK_BLUE}}>
      <div className='container'>
        <div style={{display:'flex',padding:'20px',paddingLeft:0,scrollPaddingRight:'100px'}}>
          <img src={channel.photo} alt='RushiaProfilePicture' style={{width:'100px', height:'100px',borderRadius:'100px'}}/>
          <section style={{padding:'20px',flexGrow:2}}>
            <p style={{color:'white',margin:'0'}}>{channel.name}</p>
            <p style={{color:'#AAAAAA'}}>{processSub(channel.subscriber_count)}</p>
          </section>
          <section style={{padding:'20px'}}>
            <a href='https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ'><YoutubeSvg  style={{width:'30px',height:'30px',margin:'5px'}}/></a>
            <a href='https://twitter.com/uruharushia'><TwitterSvg  style={{width:'30px',height:'30px',margin:'5px'}}/></a>
            
            
          </section>
        </div>
        <div className='row' style={{width:'100%'}}>
        <div className='col-md-10' style={{padding:'20px',paddingLeft:0,scrollPaddingRight:'100px',color:'white',whiteSpace: 'pre-line'}}>
          <p style={{color:'white',fontWeight:'bold'}}>Description</p>
          {urlify(channel.description)}
        </div>
        <div className='col-md-2' style={{padding:'20px',paddingLeft:0,paddingRight:0,scrollPaddingRight:'100px',color:'white',whiteSpace: 'pre-line'}}>
          <p style={{color:'white',fontWeight:'bold'}}>Stats</p>
          <hr/>
          <p key="videoCount" style={{color:'white'}}>{channel.video_count+' Videos'}</p>
          <hr/>
          <p key="clipCount" style={{color:'white'}}>{channel.clip_count+' Clips'}</p>
          <hr/>
          <p key="viewCount" style={{color:'white'}}>{channel.view_count+' Total Views'}</p>
        </div>
        </div>
      </div>
      </div>
    </div>
    }
    </>
  );
};
  
export default About;