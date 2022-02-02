import {useState, useEffect} from 'react'
import { IMusic } from './types/music'

const HomeSearch =()=> {
    const [searchInput, setSearchInput] = useState('')
    const [music, setMusic] = useState<IMusic[]>([])
    
    const fetchMusic = async(searchInput="eminem")=> {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`)
            if(response.ok){
                const data = await response.json()
                setMusic(data.data)
                console.log(data);
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=> {
        fetchMusic()
    }, [])

    return(
        <>
        {
            music.map(song => (
                <h1 key={song.id}>{song.artist.name}</h1>

            ))
        }
        </>
    )
}
export default HomeSearch