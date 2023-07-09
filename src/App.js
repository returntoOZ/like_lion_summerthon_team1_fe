import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchPage from "./page/SearchPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";


function App() {
  return (
    <div>
      <SignupPage></SignupPage>
    </div>
  );
}

export default App;