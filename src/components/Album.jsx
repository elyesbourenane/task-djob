import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Album = () => {

    const {albumId} = useParams()
    const [album, setAlbum] = useState(null)
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then(response =>  setAlbum(response.data))

        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => setPhotos(response.data))

        console.log(photos)
    }, [albumId])

    if (!album) {
        return <div>Loading...</div>
    }

    return (
        <div className='container'>
            <Link className='back-link' to={`/users/${album.userId}`}>&lt;--Back to Users List</Link>
            <h1>{album.title}</h1>
            <div className="photo-grid">
                {photos.map(photo => (
                    <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} />
                )) }
            </div>

        </div>
    )
}

export default Album