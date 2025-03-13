import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListBoardComponent from "./components/board/ListBoardComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import InsertComponent from "./components/board/InsertComponent.jsx";
import ReadComponent from "./components/board/ReadComponent.jsx";
import UpdateComponent from "./components/board/UpdateComponent.jsx";
import LoginComponent from "./components/user/LoginComponent.jsx";
import SignupComponent from "./components/user/SignupComponent.jsx";
import TestList from "./components/board/TestList.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import TestQueryPage from "./components/board/TestQueryPage.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*http://localhost:3000*/}
          {/*board*/}
          <Route path="/" element={<ListBoardComponent />} />
          <Route path="/board" element={<ListBoardComponent />} />
          <Route path="/write" element={<InsertComponent />} />
          <Route path="/board/:id" element={<ReadComponent />} />
          <Route path="/board/update/:id" element={<UpdateComponent />} />
          {/*login*/}
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/test" element={<TestList />} />
          <Route path="/testQueryPage" element={<TestQueryPage />} />
        </Routes>
        {/*<FooterComponent />*/}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
