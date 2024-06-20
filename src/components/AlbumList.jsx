import React, {useState, useEffect} from "react"
import axios from "axios"
import AlbumItem from "./AlbumsItem"

const AlbumList = ({userId}) => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
            .then(response => setAlbums(response.data))
    }, [userId])

    return (
        <ul className="container album-list">
            {albums?.map(album => (
                <AlbumItem key={album.id} album={album} />
            ))}
        </ul>
    )
}

export default AlbumList