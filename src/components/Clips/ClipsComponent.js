import React from 'react';
import ClipElement from './ClipElement';

const ClipsComponent = ({ props }) =>  {
    const ClipJSX = [];
    props.videos.forEach(video => {
        ClipJSX.push(
            <ClipElement key={video.id} data={video}/>
          );
    });
    
    return <>
        <div className="row"
        >
            {ClipJSX}
        </div>
    </>

} 
export default ClipsComponent;