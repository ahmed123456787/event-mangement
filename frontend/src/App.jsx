import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { statistics } from "../public/data";

import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import Feature from "./components/home/Feature";
import Footer from "./components/home/Footer";
import Plan from "./components/home/Plan";
import Call from "./components/home/Call";

const App = () => {
  const [activeSection, setActiveSection] = useState("organizer");

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Feature />

      {/* Pricing Section */}
      <Plan />

      {/* Call to Action */}
      <Call />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
