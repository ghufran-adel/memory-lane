import { BrowserRouter, Routes, Route ,Navigate  } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import DashBoard from "./pages/Home/Home";
import OneMilestonPage from "./pages/OneMilestonePage/OneMilestonePage";
import AddMilestone from "./pages/AddMilestone/AddMilestone";
import Layout from "./component/Layout/Layout";
import Settings from "./pages/Settings/Settings";
import MilestonesList from "./component/MilestonesList/MilestonesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/logIn" element={<LogIn />} />
        <Route element={<Layout />}>
          <Route path="/" element={<DashBoard />}>
            <Route exact path="/:profileId" element={<MilestonesList />} />
          </Route>
          <Route exact path="/settings" element={<Settings />} />
          <Route
            exact
            path="/:profileId/milestones/:milestoneId"
            element={<OneMilestonPage />}
          />
          <Route
            exact
            path="/:profileId/milestones"
            element={<AddMilestone />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
