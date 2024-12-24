import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-800/80 backdrop-blur-lg border-b border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              EventMaster
            </span>
            <div className="hidden md:flex space-x-6">
              <h2 className="text-gray-300 hover:text-gray-500 hover:cursor-pointer">
                Features
              </h2>
              <h2 className="text-gray-300 hover:text-gray-500 hover:cursor-pointer">
                Pricing
              </h2>
              <h2 className="text-gray-300 hover:text-gray-500 hover:cursor-pointer">
                Resources
              </h2>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 ">
            <Button className="text-gray-300 hover:text-white rounded-2xl">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl">
              Get Started
            </Button>
          </div>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
