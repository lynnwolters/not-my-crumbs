// IMPORTS //
import Nav from "./components/Nav/Nav.jsx";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import HousePage from "./pages/HousePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

// COMPONENT //
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/house" element={<HousePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
