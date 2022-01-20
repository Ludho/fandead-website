import React from 'react';

const ClipElement = ({ data }) =>  {
    let vtuberArr = data.vtuber.split(',');
    let imgref= 'https://i.ytimg.com/vi_webp/'+data.id+'/mqdefault.webp';
    let ytref='https://www.youtube.com/watch?v='+data.id;
    return (
        <>
        <div class="col-md-3">
            <a href={ytref} 
                style={{
                    display: 'block',
                    height: '200px'
                }}
            >
                <img src={imgref} class="img-fluid"
                                style={{
                    height: '200px',
                    width:'306px'
                }}
                />
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
