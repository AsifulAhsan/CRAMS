import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import HeroSec from "./components/HeroSection/Hero";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HeroSec />
      <Card />
    </>
  );
}
export default App;
