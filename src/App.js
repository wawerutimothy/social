import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/homepage";
import LoginPage from "pages/loginpage";
import ProfilePage from "pages/profilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/profile/:userId" element={<ProfilePage />}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
