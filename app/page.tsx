"use client";

import { Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const sliderWords = [
    "Children's Lives",
    "Education",
    "Healthcare",
    "Nutrition",
    "Future Generations",
  ];

  const impactStats = [
    {
      title: "1,000+",
      description: "Children Supported",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
    },
    {
      title: "50+",
      description: "Partner Organizations",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      title: "100%",
      description: "Funds to Programs",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200", // Classroom learning
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-green-100 to-green-50/50 dark:from-gray-800 dark:to-gray-900/50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Making a Difference in
            <br />
            <span className="text-green-600 dark:text-green-400">
              <Slider {...sliderSettings}>
                {sliderWords.map((word, index) => (
                  <div key={index} className="outline-none">
                    {word}
                  </div>
                ))}
              </Slider>
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Join us in our mission to provide care, education, and support to
            orphans and children in need. Every donation makes a difference.
          </p>
          <Link href="/donate">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Donate Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-gradient-to-b from-green-50/50 to-white dark:from-gray-900/50 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={stat.image}
                  alt={stat.description}
                  className="mb-4 w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-4xl font-bold text-green-800 dark:text-green-400 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-400 mb-10">
            Our Work in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-green-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Your support can help us provide essential care, education, and
              opportunities to children in need.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Donate Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-gray-800"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
