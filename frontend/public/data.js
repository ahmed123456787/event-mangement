export const pricingPlans = {
  organizer: [
    {
      name: "Basic",
      price: "$29",
      features: [
        "Up to 5 events/month",
        "Basic Analytics",
        "Email Support",
        "Team Collaboration",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$99",
      features: [
        "Unlimited events",
        "Advanced Analytics",
        "Priority Support",
        "Custom Branding",
      ],
      recommended: true,
    },
  ],
  attendee: [
    {
      name: "Free",
      price: "$0",
      features: [
        "Event Discovery",
        "Basic Ticketing",
        "Mobile Access",
        "Community Access",
        "Pay for Tickets",
      ],
      recommended: false,
    },
  ],
};

export const statistics = {
  organizer: [
    { label: "Events Hosted", value: "100K+" },
    { label: "Total Revenue", value: "$50M+" },
    { label: "Average Rating", value: "4.8/5" },
  ],
  attendee: [
    { label: "Active Users", value: "1M+" },
    { label: "Events Attended", value: "500K+" },
    { label: "User Satisfaction", value: "98%" },
  ],
};
