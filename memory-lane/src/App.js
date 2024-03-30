import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import AddProfile from "./pages/AddProfile/AddProfile";
import DashBoard from "./pages/Home/Home";
import OneMilestonPage from "./pages/OneMilestonePage/OneMilestonePage";
import AddMilestone from "./pages/AddMilestone/AddMilestone";
import Layout from "./component/Layout/Layout";

import { useState } from "react";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [profileId, setProfileId] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/logIn" element={<LogIn />} />
        <Route
          element={
            <Layout
              profiles={profiles}
              setProfiles={setProfiles}
              setProfileId={setProfileId}
              profileId={profileId}
            />
          }
        >
          <Route
            exact
            path="/"
            element={
              <DashBoard
                profiles={profiles}
                setProfiles={setProfiles}
                setProfileId={setProfileId}
                profileId={profileId}
              />
            }
          />
          <Route exact path="/settings" element={<AddProfile />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
