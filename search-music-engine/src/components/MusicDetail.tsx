import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Welcome, Album, Artist } from "./types/music";


const MusicDetail =()=> {
    const [songDetail, setSongDetail] = useState<Album[]>([])


    const params = useParams()
    const trackId = params.id
    const fetchSongDetail =async()=> {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${trackId}`)
        if(response.ok){
            const data = await response.json()
            setSongDetail(data.data)
        }
    }


    useEffect(() => {
        fetchSongDetail();
      }, []);
    
    return(
        <>
        {
            songDetail.map(song=> (
                <h1>{song.title}</h1>
            //     <div id="favourite-songs-container" className="bg-wrapper px-4">
            //     <div className="row my-3">
            //       <div className="col-12 album-action-icons d-flex align-items-center">
            //         <i className="bi bi-play-circle-fill">
            //           <div className="white-bg"></div>
            //         </i>
            //         <i className="bi bi-three-dots"></i>
            //       </div>
            //     </div>
    
            //     <div className="row light-gray-text">
            //       <div className="col-1">
            //         <p>#</p>
            //       </div>
    
            //       <div className="col-10">
            //         <p>{song.title}</p>
            //       </div>
    
            //       <div className="col-1">
            //         <p>
            //           <i className="bi bi-clock"></i>
            //         </p>
            //       </div>
            //     </div>
            //     <div className="divider"></div>
            //   </div>



            ))
            
               
        }
        </>
    )
}
export default MusicDetail