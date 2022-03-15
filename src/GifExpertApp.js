import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Shrek']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = {setcategories} />
            <hr></hr>
            <ol>
                {
                    categories.map(ctg => <GifGrid  key={ctg} category={ctg} />)
                }
            </ol>
        </>
    )
}
