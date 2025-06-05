import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./features/auth/pages/SignIn";
import SignUp from "./features/auth/pages/SignUp";
import NotFound from "./features/not-found/pages/NotFound";
import UserProfiles from "./features/userProfile/pages/UserProfiles";
import Videos from "./features/ui-elements/videos/pages/Videos";
import Images from "./features/ui-elements/images/pages/Images";
import Alerts from "./features/ui-elements/alerts/pages/Alerts";
import Badges from "./features/ui-elements/badges/pages/Badges";
import Avatars from "./features/ui-elements/avatars/pages/Avatars";
import Buttons from "./features/ui-elements/buttons/pages/Buttons";
import LineChart from "./features/charts/line-chart/pages/LineChart";
import BarChart from "./features/charts/bar-chart/pages/BarChart";
import Calendar from "./features/calendar/pages/Calendar";
import BasicTables from "./features/tables/basic-tables/pages/BasicTables";
import FormElements from "./features/forms/form-elements/pages/FormElements";
import Blank from "./features/blank/pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./features/dashboard/pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
