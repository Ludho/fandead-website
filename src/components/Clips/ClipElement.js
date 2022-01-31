import {React, useState} from 'react';
import { ReactComponent as InformationSvg } from '../../asset/information-svgrepo-com.svg';

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

function vtuberImage(vtuber){
  
  switch(vtuber.vtuber){
      case 'Iofifteen Airani': return require('../../asset/airani.webp')
      case 'Rosenthal Aki': return require('../../asset/aki.webp')
      case 'Mano Aloe': return require('../../asset/aloe.webp')
      case 'Melfissa Anya': return require('../../asset/anya.webp')
      case 'Minato Aqua': return require('../../asset/aqua.webp')
      case 'Oga Aragami': return require('../../asset/aragami.webp')
      case 'Artia': return require('../../asset/artia.webp')
      case 'Aruran': return require('../../asset/aruran.webp')
      case 'Leda Astel': return require('../../asset/astel.webp')
      case 'Nakiri Ayame': return require('../../asset/ayame.webp')
      case 'Risu Ayunda': return require('../../asset/ayunda.webp')
      case 'AZKi': return require('../../asset/azki.webp')
      case 'Shishiro Botan': return require('../../asset/botan.webp')
      case 'Fauna Ceres': return require('../../asset/ceres.webp')
      case 'Yuzuki Choco': return require('../../asset/choco.webp')
      case 'Civia': return require('../../asset/civia.webp')
      case 'Kiryuu Coco': return require('../../asset/coco.webp')
      case 'Doris': return require('../../asset/doris.webp')
      case 'Shiranui Flare': return require('../../asset/flare.webp')
      case 'Shirakami Fubuki': return require('../../asset/fubuki.webp')
      case 'Gura Gawr': return require('../../asset/gawr.webp')
      case 'Akai Haato': return require('../../asset/haato.webp')
      case 'Baelz Hakos': return require('../../asset/hakos.webp')
      case 'Hakui': return require('../../asset/hakui.webp')
      case 'IRyS': return require('../../asset/irys.webp')
      case 'Kanade Izuru': return require('../../asset/izuru.webp')
      case 'Amane Kanata': return require('../../asset/kanata.webp')
      case 'Tsukishita Kaoru': return require('../../asset/kaoru.webp')
      case 'Koyori Hakui': return require('../../asset/hakui.webp')
      case 'Iroha Kazama': return require('../../asset/kazama.webp')
      case 'Kagami Kira': return require('../../asset/kira.webp')
      case 'Inugami Korone': return require('../../asset/korone.webp')
      case 'Ollie Kureiji': return require('../../asset/kureiji.webp')
      case 'Yukihana Lamy': return require('../../asset/lamy.webp')
      case 'Darknesss Laplus': return require('../../asset/laplus.webp')
      case 'Himemori Luna': return require('../../asset/luna.webp')
      case 'Houshou Marine': return require('../../asset/marine.webp')
      case 'Natsuiro Matsuri': return require('../../asset/matsuri.webp')
      case 'Yozora Mel': return require('../../asset/mel.webp')
      case 'Sakura Miko': return require('../../asset/miko.webp')
      case 'Ookami Mio': return require('../../asset/mio.webp')
      case 'Hanasaki Miyabi': return require('../../asset/miyabi.webp')   
      case 'Hoshinova Moona': return require('../../asset/moona.webp')   
      case 'Calliope Mori': return require('../../asset/mori.webp')   
      case 'Mumei Nanashi': return require('../../asset/nanashi.webp')   
      case 'Momosuzu Nene': return require('../../asset/nene.webp')   
      case 'Ninomae': return require('../../asset/ninomae.webp')   
      case 'Shirogane Noel': return require('../../asset/noel.webp')   
      case 'Nekomata Okayu': return require('../../asset/okayu.webp')   
      case 'Kronii Ouro': return require('../../asset/ouro.webp')   
      case 'Reine Pavolia': return require('../../asset/pavolia.webp')   
      case 'Usada Pekora': return require('../../asset/pekora.webp')   
      case 'Omaru Polka': return require('../../asset/polka.webp')   
      case 'Rikka': return require('../../asset/rikka.webp')   
      case 'Yukoku Roberu': return require('../../asset/roberu.webp')   
      case 'Roboco': return require('../../asset/roboco.webp')   
      case 'Rosalyn': return require('../../asset/rosalyn.webp')   
      case 'Uruha Rushia': return require('../../asset/rushia.webp')  
      case 'Chloe Sakamata': return require('../../asset/sakamata.webp')   
      case 'Kageyama Shien': return require('../../asset/shien.webp')   
      case 'Murasaki Shion': return require('../../asset/shion.webp')   
      case 'Tokino Sora': return require('../../asset/sora.webp')   
      case 'Echo Spade': return require('../../asset/spade.webp')   
      case 'Oozora Subaru': return require('../../asset/subaru.webp')   
      case 'Hoshimachi Suisei': return require('../../asset/suisei.webp')   
      case 'Kiara Takanashi': return require('../../asset/takanashi.webp')   
      case 'Lui Takane': return require('../../asset/takane.webp')   
      case 'Kishido Temma': return require('../../asset/temma.webp')  
      case 'Tokoyami Towa': return require('../../asset/towa.webp')  
      case 'Sana Tsukumo': return require('../../asset/tsukumo.webp') 
      case 'Tsunomaki Watame': return require('../../asset/watame.webp') 
      case 'Amelia Watson': return require('../../asset/watson.webp') 
      case 'Yogiri': return require('../../asset/yogiri.webp') 
      default: return require('../../asset/question.webp')
  }


}

const ClipElement = ({ data }) =>  {
    let vtuberArr = data.vtuber.split(',');
    let imgref= 'https://i.ytimg.com/vi_webp/'+data.id+'/mqdefault.webp';
    let ytref='https://www.youtube.com/watch?v='+data.id;
    let time=fancyTimeFormat(data.duration);
    let date = new Date(data.uploadTime);
    const [disp, setDisp] = useState('none');
    return (
        <>
        <div className="col-md-3" 
        style={{
            padding:'3px'
            
        }}
        >
            <div className="videocard"
            style={{
                backgroundColor: '#6F96CD',
                display: 'grid',
                gridTemplateRows: '200px',
                padding:'px',
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
                <img alt="videoImg" src={imgref} className="img-fluid"
                                style={{
                    height: '200px',
                    borderRadius:'6px 6px 0px 0px',
                    width:'326px'
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
                    flexDirection: 'column',
                    position: 'relative',
                    padding:'5px 5px 45px 5px',
                    height:'100%',
                    
            }}>
            <span >
            <p style={{
                    display: 'block',
                    display: '-webkit-box',
                    fontWeight:"bold",
                    width:'280px',
                    margin:'10px',
                    overflow: 'hidden',
                    height:"3em",
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',


            }}>{data.title}</p>
            
            <p style={{margin:'0px'}}>{timeSince(new Date(date))}</p>
            <p style={{margin:'0px', fontWeight:"bold",height:"3em",}}>{data.channel.name}</p>
            </span> 
            <InformationSvg style={{
                                width:'36px',
                                height: '36px',
                                position: 'absolute',
                                bottom:'7px',
                                left:'7px',
                              }}
                             onMouseEnter={e => {
                              setDisp('block');
                          }}
                          onMouseLeave={e => {
                            setDisp('none')
                          }}/>
            <div style={{
              backgroundColor:'black',
              position: 'absolute',
              color:'white',
              padding: '6px',
              borderRadius: '6px',
              display: disp,
              bottom:'48px',
              left:'7px',
            }}>
              <p>Featured idols :</p>
              <div style=
              {{
                display: 'flex',
                flexDirection: 'row', 
                flexWrap: 'wrap',
                maxWidth: '250px',
                padding: '10px 30px 10px 30px'
              }}>
              {vtuberArr.map((vtuber) => {     
              return (<div key={vtuber}><img alt="vtuberImg" style={{
                width: '60px',
                borderRadius: '50px',
              }} src={vtuberImage({vtuber})}/> </div>) 
              })}
              </div>
            </div>

            </div>

            </div>
            
        </div>
        </>
    );

} 
export default ClipElement;
