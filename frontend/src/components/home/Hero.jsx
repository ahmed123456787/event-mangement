import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  PieChart,
  UserPlus,
  Search,
  Ticket,
  Users,
} from "lucide-react";
const Hero = () => {
  const organizerFeatures = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Creation",
      description:
        "Create and manage events with customizable templates and scheduling tools",
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description:
        "Real-time insights into ticket sales, attendance, and revenue",
    },
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Team Management",
      description: "Collaborate with team members and assign specific roles",
    },
  ];

  const attendeeFeatures = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Event Discovery",
      description: "Find events that match your interests and preferences",
    },
    {
      icon: <Ticket className="h-6 w-6" />,
      title: "Easy Booking",
      description: "Seamless ticket purchasing and digital ticket management",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Features",
      description: "Connect with other attendees and share experiences",
    },
  ];
  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-gray-900 to-gray-900"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Choose Your Event Journey
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Whether you're organizing the next big event or looking for amazing
            experiences, we've got you covered.
          </p>
        </div>

        <Tabs defaultValue="organizer" className="w-full ">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-800/50 rounded-2xl">
            <TabsTrigger
              value="organizer"
              className="text-lg   data-[state=active]:bg-pink-400 rounded-2xl"
            >
              I'm an Organizer
            </TabsTrigger>
            <TabsTrigger
              value="attendee"
              className="text-lg data-[state=active]:bg-pink-400 rounded-2xl"
            >
              I'm an Attendee
            </TabsTrigger>
          </TabsList>

          <TabsContent value="organizer">
            <div className="grid md:grid-cols-3 gap-8">
              {organizerFeatures.map((feature, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="mb-4 text-purple-400">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="attendee">
            <div className="grid md:grid-cols-3 gap-8">
              {attendeeFeatures.map((feature, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="mb-4 text-purple-400">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Hero;
