import React from 'react';


function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "00" : "");
    }

    ret += "" + (mins < 10 ? "0"+mins : mins) + ":" + (secs < 10 ? "00" : "");

    ret += "" + secs;
    return ret;
}

function timeSince(date) {
    
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " year(s) ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " month(s) ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " day(s) ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hour(s) ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

const ClipElement = ({ data }) =>  {
    let vtuberArr = data.vtuber.split(',');
    let imgref= 'https://i.ytimg.com/vi_webp/'+data.id+'/mqdefault.webp';
    let ytref='https://www.youtube.com/watch?v='+data.id;
    let time=fancyTimeFormat(data.duration);
    let date = new Date(data.uploadTime);
    return (
        <>
        <div class="col-md-3" 
        style={{
            padding:'3px'
            
        }}
        >
            <div class="videocard"
            style={{
                backgroundColor: '#6F96CD',
                padding:'6px',
                height:'100%',
                borderRadius:'6px',
            }}>
            <a href={ytref} 
                style={{
                    position: 'relative',
                    display: 'block',
                    height: '200px'
                }}
            >
                <img src={imgref} class="img-fluid"
                                style={{
                    height: '200px',
                    borderRadius:'6px',
                    width:'310px'
                }}
                />
                <p
                style={{
                    color:'white',
                    backgroundColor:"#2E2926",
                    position: 'absolute',
                    padding: '6px',
                    opacity: '90%',
                    top:'160px',
                    right:'3px',
                }}
                >{time}</p>
            </a>
            <div 
            style={{
                    display: 'flex',
                    flexDirection: 'column'
            }}>
            <p style={{
                    display: 'block',
                    fontWeight:"bold",
                    margin:'10px'
            }}>{data.title}</p>
            
            <p>{timeSince(new Date(date))}</p>
            <p>{data.channel.name}</p>
            {vtuberArr.map((vtuber, i) => {     
            return (<p key={vtuber}>{vtuber}</p>) 
            })}
            </div>

            </div>
            
        </div>
        </>
    );

} 
export default ClipElement;
