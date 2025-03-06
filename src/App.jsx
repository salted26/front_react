import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListBoardComponent from "./components/board/ListBoardComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import InsertComponent from "./components/board/InsertComponent.jsx";
import BoardComponent from "./components/board/BoardComponent.jsx";
import UpdateComponent from "./components/board/UpdateComponent.jsx";
import LoginComponent from "./components/user/LoginComponent.jsx";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/*http://localhost:3000*/}
        {/*board*/}
        <Route path="/" element={<ListBoardComponent />} />
        <Route path="/board" element={<ListBoardComponent />} />
        <Route path="/write" element={<InsertComponent />} />
        <Route path="/board/:no" element={<BoardComponent />} />
        <Route path="/board/update/:no" element={<UpdateComponent />} />
        {/*login*/}
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
