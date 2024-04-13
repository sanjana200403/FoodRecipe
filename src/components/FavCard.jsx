import React from 'react'
import { Link } from 'react-router-dom'

const FavCard = ({item,setFavList}) => {
   const  {id,image,label} = item
   const favRemove = (id)=>{
    let storedNames = JSON.parse(localStorage.getItem("recipeDetail"));
    const newArr = storedNames.filter((e)=>e.id !==id)
    // console.log(object)
    localStorage.setItem("recipeDetail",JSON.stringify(newArr))
    setFavList(newArr)

   }
  return (
    <>
   
   <div>
    <div className='bg-_gradient shadow w-full rounded-lg'>
                 <img src={image} alt={label} className='rounded-lg h-[200px] md:h-[170px] w-[240px]' />
    
 
                 <div className='p-3'>
                     <p className='text-white font-semibold w-[240px]'>{label}</p>
 
                     <div className='mt-2'>
                        
                     
                     
                         <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500'
                      onClick={()=>favRemove(id)}
                        >
                             Remove from favorite
                         </span>
                         <Link to={`/recipes/${id}`}>
                         <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500'
                         
                         
                        >
                             see detaisls
                         </span>
                         </Link>
                     </div>
                 </div>
             </div>
     
       
  
                            </div>
  
                             </>
                             
  )
}

export default FavCard
