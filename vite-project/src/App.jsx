// IMPORTS //
import Nav from "./components/Nav/Nav.jsx";
import {  BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

// COMPONENT //
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
