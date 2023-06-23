import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Post1 from "./components/pag1";

function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Home/> } />
        <Route path="/post" element={ < Post1/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;