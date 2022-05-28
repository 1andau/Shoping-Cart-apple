import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import NavBar from "./pages/NavBar";
import Cart from "./pages/Cart";
import FavoriteBlock from "./pages/FavoriteBlock";
function App() {

  return (


<div className="">
<NavBar/>


  <Routes>
  <Route  path="/" element={<Main/>}></Route>
  <Route  path="/home" element={<Home/>}></Route>
  <Route  path="/Cart" element={<Cart/>}></Route>
  <Route  path="/FavoriteBlock" element={<FavoriteBlock/>}></Route>


       
  </Routes>

</div>


  );
}

export default App;




