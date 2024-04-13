import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = ()=>{
    const [open ,setOpen ] = useState(false)
    return(
        <>
       
       <header className='w-full fixed z-10 bg-black
       opacity-90
       '>
        <nav className='flex w-full py-2 md:py-3 px-4
        md:px-20 items-center justify-between
        ' >
            <Link to='/' className="flex items-center
             justify-center text-white text-lg
             cursor-pointer
            ">
            <img 
            className='hidden md:block w-14 h-8 lg:w-20 lg:h-14'
            src="https://images.deccanchronicle.com/dc-Cover-g6cpca63spmouog48p68fk20a0-20170530145539.Medi.jpeg" alt="" />
            Flavor <span>Verse</span>
            </Link>
            <ul className='hidden md:flex text-white gap-6'>
                <li>
                    <Link to="/">Home 
                    </Link>
                </li>
                <li>
                    {/* <Link to="/recipes">Explore 
                    </Link> */}
                </li>
                <li>
                    <Link to="/favorites">Favorites
                    </Link>
                </li>


            </ul>
            <Button
                    title='Sign in'
                    conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
                />
                <button 
                onClick={()=> setOpen(prev => !prev)}
                className='block md:hidden 
                text-white
                text-xl
                '>
                   {open? <AiOutlineClose/>:<HiMenuAlt3/>} 
                </button>
                


        </nav>
        <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <Link to="/">Home</Link>
                {/* <Link to="/#recipes">Recipes</Link> */}
                <Link to="/">Favorites</Link>
            </div>

       </header>


        </>
    )
}
export default Navbar