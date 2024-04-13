import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import { Route,Routes,Outlet } from "react-router";
function Layout(){
  return(
    <>
    <Navbar/>
     <Outlet/>
    <Footer/>
    </>
  )

}

function App() {


  return (
   
   <>
   <Navbar/>
   <div className="bg-black">
   <Routes>
       <Route path='/' element={<Layout/>}/>
       <Route index  element={<Home/>}/>
       <Route path="recipes/:id" element={<RecipeDetail/>} />
       <Route path="favorites"  element={<Favorite/>}/>
       
   </Routes>
   </div>
   <Footer/>
   
  
  
   </>
  );
}

export default App;
