import {useState} from 'react'
import { useParams } from 'react-router-dom'
import {IMusic} from './types/music'


const MusicDetail =()=> {
    const [songDetail, setSongDetail] = useState([])


    const params = useParams()
    const trackId = params.trackId

    const fetchSongDetail =async()=> {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${trackId}`)
    }

    return(

        <h1>This is Music details</h1>
    )
}
export default MusicDetail