import React from "react"
import {Link} from "react-router-dom"

const AlbumItem = ({album}) => {
    return (
        
        <Link to={`/albums/${album.id}`}><li>{album.title}</li></Link>
   
    )
}

export default AlbumItem