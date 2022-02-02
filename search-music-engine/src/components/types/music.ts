
export interface IMusic{
    duration:number
    id:number
    title:string
    album:{
        id: number
        title: String
        cover: String
        cover_small:string
        cover_medium:string, 
        cover_big:string 
        tracklist: String

    }
    artist:{
        id:number
        name:string
        link:string
        picture:string
        tracklist: String

    }
}

