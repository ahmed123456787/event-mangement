import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">EventMaster</h3>
            <p className="mb-4">
              Transforming how the world creates and attends events.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" className="p-2 hover:text-white">
                Twitter
              </Button>
              <Button variant="ghost" className="p-2 hover:text-white">
                LinkedIn
              </Button>
              <Button variant="ghost" className="p-2 hover:text-white">
                Facebook
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-2">
              <li>For Organizers</li>
              <li>For Attendees</li>
              <li>For Enterprise</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>Documentation</li>
              <li>Support Center</li>
              <li>Success Stories</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          © {new Date().getFullYear()} EventMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
