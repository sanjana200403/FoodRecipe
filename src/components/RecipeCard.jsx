import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipes}) => {
  const {image,label,cuisineType,dietType,mealType,uri} = recipes?.recipe
  // console.log(uri)
  const id = uri?.split('#')[1]
  // console.log(id)
  const favItemHandler = ()=>{
    console.log(recipes)
    var storedNames = JSON.parse(localStorage.getItem("recipeDetail"));
    if(storedNames!==null){
        storedNames.push({id,image,label,cuisineType,mealType,uri})
    }
    else{
        storedNames = []
        storedNames.push({id,image,label,cuisineType,mealType,uri})
    }


   localStorage.setItem("recipeDetail",JSON.stringify(storedNames))

  }

  return (
    <div>
   <div className='bg-_gradient shadow w-full rounded-lg'>
   <Link to={`/recipes/${id}`}>
                <img src={image} alt={label} className='rounded-lg h-[200px] md:h-[170px] w-[240px]' /></Link>

                <div className='p-3'>
                    <p className='text-white font-semibold w-[240px]'>{label}</p>

                    <div className='mt-2'>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500'>
                            {cuisineType}
                        </span>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500'>
                            {mealType}
                        </span>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500 cursor-pointer'
                        
                        onClick={()=>favItemHandler()}
                        >
                            favorite
                        </span>
                    </div>
                </div>
            </div>
    
      
    </div>
  )
}

export default RecipeCard
