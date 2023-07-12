import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchPage from "./page/SearchPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import MainPage from "./page/MainPage";
import MyPage from "./page/MyPage";
import ChatPage from "./page/ChatPage";
import CreateChat from "./page/CreateChat";
import CreateRoom from "./page/CreateRoom";
import axios from "axios";


function App() {
  return (
    <>
      <BrowserRouter> 
      <Routes>
      <Route path="/main/:Id1" element={<MainPage />} /> 
      <Route path="/signup" element={<SignupPage />} /> 
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/search/:Id2" element={<SearchPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/create/:Id4" element={<CreateRoom />} />
      <Route path="/mypage/:Id3" element={<MyPage />} />
      {/* <Route path="/createChat" element={<CreateChat/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;