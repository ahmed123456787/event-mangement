import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pricingPlans } from "./../../../public/data";

const Plan = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          Choose Your Plan
        </h2>

        <Tabs defaultValue="organizer-pricing" className="w-full ">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 rounded-xl bg-transparent">
            <TabsTrigger
              value="organizer-pricing"
              className=" data-[state=active]:bg-pink-400 rounded-xl"
            >
              Organizer Plans
            </TabsTrigger>
            <TabsTrigger
              value="attendee-pricing"
              className="data-[state=active]:bg-pink-400 rounded-xl"
            >
              Attendee Plans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="organizer-pricing">
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              {pricingPlans.organizer.map((plan, index) => (
                <PricingCard key={index} plan={plan} userType="organizer" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="attendee-pricing" className="">
            <div className="grid md:grid-cols-2 mx-auto">
              {pricingPlans.attendee.map((plan, index) => (
                <PricingCard key={index} plan={plan} userType="attendee" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
const PricingCard = ({ plan }) => {
  const isRecommended = plan.recommended;

  return (
    <div
      className={`relative p-8 rounded-2xl transition-transform duration-300 hover:scale-105 ${
        isRecommended
          ? "bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl"
          : "bg-gray-800"
      }`}
    >
      {isRecommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Recommended
        </span>
      )}

      <h2 className="text-2xl font-bold text-white mb-4">{plan.name}</h2>

      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${plan.price}</span>
        {plan.period && (
          <span className="text-gray-300 ml-2">/{plan.period}</span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <svg
              className="w-5 h-5 mr-2 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-3xl font-semibold transition-colors duration-200 ${
          isRecommended
            ? "bg-white text-blue-600 hover:bg-gray-100"
            : "bg-blue-600 text-white hover:bg-blue-700 "
        }`}
      >
        Get Started
      </button>
    </div>
  );
};
export default Plan;
