import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListBoardComponent from "./components/ListBoardComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import InsertComponent from "./components/InsertComponent.jsx";
import BoardComponent from "./components/BoardComponent.jsx";
import UpdateComponent from "./components/UpdateComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/*http://localhost:3000*/}
        <Route path="/" element={<ListBoardComponent />} />
        <Route path="/board" element={<ListBoardComponent />} />
        <Route path="/write-board" element={<InsertComponent />} />
        <Route path="/board/:no" element={<BoardComponent />} />
        <Route path="/board/update/:no" element={<UpdateComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
