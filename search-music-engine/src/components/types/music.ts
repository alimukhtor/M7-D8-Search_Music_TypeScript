
export interface IMusic{
    duration:number
    id:number
    title:string
    album:{
        id: number
        title: String
        cover: String
        cover_Small:string
        cover_Medium:string, 
        cover_Big:string 
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

