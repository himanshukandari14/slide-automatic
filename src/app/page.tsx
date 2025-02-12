import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PricingCards from "@/components/PricingCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a36a2] via-[#ffffff] to-[#ffffff]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
            <div className="h-4 w-4 bg-black rounded-sm"></div>
          </div>
          <span className="text-white text-xl font-semibold">Slide</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-gray-200 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-gray-200 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-gray-200 hover:text-white transition-colors"
          >
            About
          </Link>
        </div>

        <Button
          variant="secondary"
          size="sm"
          className="bg-white text-black hover:bg-gray-100"
        >
          <Link href="/dashboard">
          Login
          </Link>
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Transform Your
            <br />
            Instagram Engagement
            <br />
            with Slide
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Slide revolutionizes how you connect with your audience on
            Instagram. Automate responses and boost engagement effortlessly,
            turning interactions into valuable business opportunities.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100 px-8"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Profile Images */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="aspect-square rounded-[2.5rem] overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-gray-200">
            <img
              src="/api/placeholder/400/400"
              alt="Profile 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-[2.5rem] overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-gray-200">
            <img
              src="/api/placeholder/400/400"
              alt="Profile 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-[2.5rem] overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-gray-200">
            <img
              src="/api/placeholder/400/400"
              alt="Profile 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-[2.5rem] overflow-hidden transform hover:scale-105 transition-transform duration-300 bg-gray-200">
            <img
              src="https://unsplash.com/photos/a-couple-of-white-pedestals-sitting-next-to-each-other-Sm4iCS8CMtQ"
              alt="Profile 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
      <PricingCards />
    </div>
  );
}
