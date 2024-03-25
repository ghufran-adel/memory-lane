import SignUp from "./pages/SignUp/SignUp";
import'./App.scss' ;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import AddProfile from "./pages/AddProfile/AddProfile";
import DashBoard from "./pages/DashBoard/DashBoard";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/signUp"
        element={<SignUp />} 
      />

      <Route
        exact
        path="/logIn"
        element={<LogIn />}
      />

<Route
        exact
        path="/DashBoard"
        element={<DashBoard />}
      />

<Route
        exact
        path="/profile"
        element={<AddProfile />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
