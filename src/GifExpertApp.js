import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch'] ) 

  // const handleAdd = () =>{
  //   // 'HunterXhunter'
  //   // setcategories( categs => [...categs, 'HunterXhunter']); // Esta es una opción
  //   setcategories([...categories, 'HunterXhunter']); // Esta es otra una opción
  // }

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategory={setcategories} />
      <hr/>

      

      <ol>
        {
          categories.map( category =>( 
            <GifGrid 
              key={category}
              category = {category}
            />
          ))
        }
      </ol>
    </>
  )
}

