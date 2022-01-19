import React from 'react';

const ClipElement = ({ data }) =>  {
    console.log(data)
    var vtuberArr = data.vtuber.split(',');
    return (
        <>
        <div >
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
