import React from 'react'

const Header = ({title,image,type}) => {
    const images = [
        "https://img.freepik.com/free-photo/medium-shot-family-eating-together-table_23-2148972781.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapE6TwToDs5qRghye7gtdgteV123whjXgamVt7xiArujAU9_nyJ0PGch63DOFyrclVsc&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyxwH90sVnFEYDU-3uLHC55QBQc1RDKr4T8MnBioZ6-VGDA33vxG0qzl9iV6Ni7QtkLs&usqp=CAU",
        "https://i.pinimg.com/736x/d3/a3/09/d3a30920b1a2c700db046c766b012d77.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBUAAak_K15CwtNsWpdCRSfJpbvMJ4Zl9TTPTChUCBzS-qTh8VjYg8PYmDqG_83nRb-0&usqp=CAU",

    ]
  return (
    <div className='w-full h-[100vh]'>
        <div className="relative w-full h-full">
            <img 
            className='w-full h-full object-cover'
            src={image ?? images[Math.floor(Math.random()*images.length)]} alt="" />

        </div>
        {/*  */}
        <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
            <h1 className='text-white text-4xl md:text-5xl font-bold
            text-center
            '>{title}</h1>
            {
                type && (
                    <p className='text-sm mt-4 text-center  text-green-500
                    bg-[#00000090]
                    px-6
                    py-4
                    rounded-full
                    '>
                       Welcome to FlavorVerse, your passport to culinary adventures 
                       <br  className='hidden md:block'/>
                       Discover a treasure trove of 
                       delectable recipe from around the globe.
                    </p>
                )
            }


        </div>
      
    </div>
  )
}

export default Header
