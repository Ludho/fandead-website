import React from 'react';
import ClipElement from './ClipElement';

const ClipsComponent = ({ props }) =>  {
    console.log(props.videos)
    return <>
        
        {props.videos && props.videos.map(video=>{
                <ClipElement data={video}/>
            })
        }
        </>

} 
export default ClipsComponent;