import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='animate__animated animate__fadeInLeft'>Cargando...</p>}
            <div className='card-grid animate__animated animate__fadeInLeft'>
                {images.map( (actual) => { return <GifGridItem key={actual.id} { ...actual }/> })}
            </div>
        </>
    )
}
