import React from 'react';
import ClipsComponent from '../components/Clips/ClipsComponent';
import {useEffect, useState} from 'react';
import PaginationComponent from '../components/Pagination/Pagination';


const Clips = (props) => {
  const [videos, setVideos] = useState([]);
  const [totalVideos, setTotalVideos] = useState(null);
  const [currPage, setCurrPage] = useState(props.page||1);
  const [vtubers, setVtubers] = useState(props.vtubers||null);
  const [perPage] = useState(props.perPage||process.env.REACT_APP_PERPAGE);

  useEffect(()=>{
    getClips()
  },[currPage]);

  async function getClips() {
    let url = new URL(process.env.REACT_APP_URLAPI);
    if(perPage){url.searchParams.append('perPage', perPage)};
    console.log(currPage)
    if(currPage){url.searchParams.append('page', currPage)};
    if(props.vtubers){url.searchParams.append('vtubers', props.vtubers)};

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then((data)=>{
      setVideos(data.videos);
      setTotalVideos(data.totalVideos);
    })
  }
  
  // Change page
  const paginate = (pageNumber) => {
    setCurrPage(pageNumber);
  }
  return (
      
    <div
    style={{
      textAlign: 'center',
      height: '100vh'
    }}
    >
      <h1>Clips</h1>
      {videos &&   
        <ClipsComponent props={{videos: videos}}/>
      }
      {totalVideos &&
        <PaginationComponent props={{currentPage: currPage,lastPage: Math.floor(totalVideos/(props.perPage||15)),paginate: paginate}}/>
      }
    </div>
  );

};
  
export default Clips;