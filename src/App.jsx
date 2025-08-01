import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage"; // Your existing landing page
import CRM from "./CRM"; // The CRM page

import Subscriptions from "./Subscriptions"; // The CRM page
import Privacy from "./Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />{" "}
        {/* Default Route (Landing Page) */}
        <Route path="/subscriptions" element={<Subscriptions />} />{" "}
        {/* Default Route (Landing Page) */}
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/crm" element={<CRM />} /> {/* CRM Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
