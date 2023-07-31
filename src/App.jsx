import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<div>Page not found</div>}/>
      </Routes>
    </div>
  );
};

export default App;

//to fetch data from slice use the hook useSelector()