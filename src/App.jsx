import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Terms from "./TermsAndCondtions.jsx";
import PrivacyAndPolicy from "./PrivacyAndPolicy.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
