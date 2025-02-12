import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPro = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPro?: boolean;
}) => {
  return (
    <div
      className={`rounded-2xl p-8 ${
        isPro
          ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white"
          : "bg-white border border-gray-200"
      }`}
    >
      <h3
        className={`text-2xl font-bold ${
          isPro ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <div className="mt-4 flex items-baseline">
        <span
          className={`text-5xl font-bold tracking-tight ${
            isPro ? "text-white" : "text-gray-900"
          }`}
        >
          {price}
        </span>
        <span
          className={`ml-1 text-lg ${
            isPro ? "text-gray-100" : "text-gray-500"
          }`}
        >
          /month
        </span>
      </div>
      <p
        className={`mt-6 text-base ${
          isPro ? "text-gray-100" : "text-gray-500"
        }`}
      >
        {description}
      </p>
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <Check
              className={`h-5 w-5 shrink-0 ${
                isPro ? "text-white" : "text-blue-600"
              }`}
            />
            <span
              className={`ml-3 text-sm ${
                isPro ? "text-gray-100" : "text-gray-700"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        className={`mt-8 w-full ${
          isPro
            ? "bg-white text-blue-600 hover:bg-gray-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Get started
      </Button>
    </div>
  );
};

export default function PricingCards() {
  const plans = [
    {
      title: "Basic",
      price: "$29",
      description:
        "Perfect for individuals and small businesses getting started with Instagram automation.",
      features: [
        "Up to 1,000 automated responses per month",
        "Basic analytics dashboard",
        "2 social accounts",
        "Email support",
        "Basic integrations",
      ],
    },
    {
      title: "Pro",
      price: "$99",
      description:
        "Advanced features for growing businesses that need more power and customization.",
      features: [
        "Unlimited automated responses",
        "Advanced analytics and reporting",
        "Unlimited social accounts",
        "Priority 24/7 support",
        "Advanced integrations",
        "Custom workflows",
        "API access",
      ],
      isPro: true,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
