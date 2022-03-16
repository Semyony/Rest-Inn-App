import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Properties from "./components/Properties/Properties";
import Property from "./components/Property/Property";
import PropertiesT from "./components/PropertyType/PropertiesT";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/properties" element={<Properties />} exact={true} />
        <Route path="/signin" element={<SignIn />} exact={true} />
        <Route path="/signup" element={<SignUp />} exact={true} />
        <Route path="/property" element={<Property />} exact={true} />
        <Route path="/propertybytype" element={<PropertiesT />} exact={true} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
