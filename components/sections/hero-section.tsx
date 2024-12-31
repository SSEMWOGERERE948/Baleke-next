import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-green-100 to-green-50/50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Making a Difference in
          <span className="text-green-600"> Children's Lives</span>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Join us in our mission to provide care, education, and support to orphans and children in need. Every donation makes a difference.
        </p>
        <Link href="/donate">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
            Donate Now
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-green-50/50" />
    </div>
  );
}