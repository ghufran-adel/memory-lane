import SignUp from "./pages/SignUp/SignUp";
import'./App.scss' ;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import AddProfile from "./pages/AddProfile/AddProfile";
import DashBoard from "./pages/Home/Home";
import OneMilestonPage from "./pages/OneMilestonePage/OneMilestonePage";
import AddMilestone from "./pages/AddMilestone/AddMilestone";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        exact
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
        path="/"
        element={<DashBoard />}
      />

<Route
        exact
        path="/settings"
        element={<AddProfile />}
      />

<Route
        exact
        path="/:profileId/milestones/:milestoneId" 
        element={<OneMilestonPage />}
      />

<Route
        exact
        path="/:profileId/milestones/" 
        element={<AddMilestone />}
      />

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
