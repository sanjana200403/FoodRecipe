import React, { useState } from 'react'
import FavCard from '../components/FavCard';
import { BsTypeH1 } from 'react-icons/bs';

const Favorite = () => {
   
  const storedNames = JSON.parse(localStorage.getItem("recipeDetail"));
  console.log(storedNames)
  const [favList,setFavList] = useState(storedNames)
  console.log(favList)
  if(favList<=0){
    return(
    <h1>add item</h1>
    )
  }



  return (

    <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
    
    

    <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
 
 
      {
        
        favList.map((item,idx)=><FavCard item={item} key={idx} setFavList={setFavList} />
        
        
        
        
        
        
        )
      }

      
    </div>
      </div>
  )
}

export default Favorite
