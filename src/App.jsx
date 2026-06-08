import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Toolkit from "./pages/Toolkit";
import PrivacyPolicy from "./pages/PrivacyPolicy";



export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/team" element={<Team />} />
<Route path="/toolkit" element={<Toolkit />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />

</Routes>
</BrowserRouter>
);
}