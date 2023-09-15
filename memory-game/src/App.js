
import Home from "./Pages/Home"
import Result from "./Pages/Result"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Home></Home>}></Route>
        <Route path ="/result" element = {<Result></Result>}></Route>

        </Routes>
      </BrowserRouter>

   
  );
}

export default App;
