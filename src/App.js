import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchPage from "./page/SearchPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import MainPage from "./page/MainPage";
import MyPage from "./page/MyPage";
import ChatPage from "./page/ChatPage";
import CreateChat from "./page/CreateChat";


function App() {
  return (
    <>
      <BrowserRouter> 
      <Routes>
      <Route path="/main" element={<MainPage />} /> 
      <Route path="/signup" element={<SignupPage />} /> 
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/search" element={<SearchPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/create" element={<CreateChat />} />
      <Route path="/mypage" element={<MyPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;