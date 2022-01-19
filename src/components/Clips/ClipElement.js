import React from 'react';

const ClipElement = ({ data }) =>  {
    var vtuberArr = data.vtuber.split(',');
    var imgref= 'https://i.ytimg.com/vi_webp/'+data.id+'/mqdefault.webp'
    return (
        <>
        <div class="col-md-3">
            <a>
              <img href={imgref}/>
            </a>
            <h3>{data.title}</h3>
            <p>{data.uploadTime}</p>
            <p>{data.duration}</p>
            <p>{data.channel.name}</p>
            {vtuberArr.map((vtuber, i) => {     
            return (<p key={vtuber}>{vtuber}</p>) 
            })}
        </div>
        </>
    );

} 
export default ClipElement;
