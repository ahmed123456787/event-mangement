import React from "react";

import {
  Calendar,
  BarChart,
  Settings,
  Shield,
  Search,
  Smartphone,
  Users,
  Gift,
} from "lucide-react";
const Feature = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Powerful Features for Everyone
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Advanced tools and features designed to make event management and
            attendance a breeze.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Organizer Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-400">
              For Organizers
            </h3>
            <div className="space-y-6">
              <FeatureCard
                icon={<Calendar className="h-6 w-6" />}
                title="Advanced Event Planning"
                description="Comprehensive tools for event creation, scheduling, and management."
              />
              <FeatureCard
                icon={<BarChart className="h-6 w-6" />}
                title="Real-time Analytics"
                description="Track ticket sales, attendance, and revenue in real-time."
              />
              <FeatureCard
                icon={<Settings className="h-6 w-6" />}
                title="Customization Options"
                description="Brand your event pages and tickets to match your identity."
              />
              <FeatureCard
                icon={<Shield className="h-6 w-6" />}
                title="Secure Payments"
                description="Multiple payment options with advanced fraud protection."
              />
            </div>
          </div>

          {/* Attendee Features */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-pink-400">
              For Attendees
            </h3>
            <div className="space-y-6">
              <FeatureCard
                icon={<Search className="h-6 w-6" />}
                title="Smart Event Discovery"
                description="Find events based on your interests and location."
              />
              <FeatureCard
                icon={<Smartphone className="h-6 w-6" />}
                title="Mobile Experience"
                description="Access tickets and event details from any device."
              />
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Social Integration"
                description="Connect with other attendees and share experiences."
              />
              <FeatureCard
                icon={<Gift className="h-6 w-6" />}
                title="Exclusive Perks"
                description="Access to special offers and early bird tickets."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Components
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-300">
    <p>define</p>
  </div>
);

export default Feature;
