import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Call = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Join thousands of event professionals and attendees who have already
          elevated their event experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-purple-900 hover:bg-gray-100"
          >
            I'm an Organizer
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            I'm an Attendee
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Call;
