import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./features/auth/pages/SignIn";
import SignUp from "./features/auth/pages/SignUp";
import NotFound from "./features/not-found/pages/NotFound";
// import UserProfiles from "./features/example/userProfile/pages/UserProfiles";
// import Videos from "./features/example/ui-elements/videos/pages/Videos";
// import Images from "./features/example/ui-elements/images/pages/Images";
// import Alerts from "./features/example/ui-elements/alerts/pages/Alerts";
// import Badges from "./features/example/ui-elements/badges/pages/Badges";
// import Avatars from "./features/example/ui-elements/avatars/pages/Avatars";
// import Buttons from "./features/example/ui-elements/buttons/pages/Buttons";
// import LineChart from "./features/example/charts/line-chart/pages/LineChart";
// import BarChart from "./features/example/charts/bar-chart/pages/BarChart";
// import Calendar from "./features/example/calendar/pages/Calendar";
// import BasicTables from "./features/example/tables/basic-tables/pages/BasicTables";
// import FormElements from "./features/example/forms/form-elements/pages/FormElements";
// import Blank from "./features/blank/pages/Blank";
import AppLayout from "./components/layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./features/example/dashboard/pages/Home";

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
            {/* <Route path="/profile" element={<UserProfiles />} /> */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
            {/* <Route path="/blank" element={<Blank />} /> */}

            {/* Forms */}
            {/* <Route path="/form-elements" element={<FormElements />} /> */}

            {/* Tables */}
            {/* <Route path="/basic-tables" element={<BasicTables />} /> */}

            {/* Ui Elements */}
            {/* <Route path="/alerts" element={<Alerts />} /> */}
            {/* <Route path="/avatars" element={<Avatars />} /> */}
            {/* <Route path="/badge" element={<Badges />} /> */}
            {/* <Route path="/buttons" element={<Buttons />} /> */}
            {/* <Route path="/images" element={<Images />} /> */}
            {/* <Route path="/videos" element={<Videos />} /> */}

            {/* Charts */}
            {/* <Route path="/line-chart" element={<LineChart />} /> */}
            {/* <Route path="/bar-chart" element={<BarChart />} /> */}
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
