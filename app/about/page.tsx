import { Card } from "@/components/ui/card";
import { Users, BookOpen, Heart, Target } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding in everything we do."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong support networks for sustainable change."
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Empowering through knowledge and skill development."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Creating measurable, lasting positive change."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10 dark:opacity-5" />
          <div className="relative">
            <h1 className="text-4xl font-bold text-green-800 dark:text-white mb-4">
              About Baleke Foundation
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We are dedicated to transforming the lives of orphans and vulnerable children
              through comprehensive care, education, and sustainable support systems.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="p-4 bg-green-100 dark:bg-green-800 rounded-full w-fit mx-auto mb-4">
                <value.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-400">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-3xl p-12 shadow-xl text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-green-50 dark:text-gray-300">
            <p>
              Founded in 2020, Baleke Foundation emerged from a deep commitment to addressing
              the needs of orphaned and vulnerable children in our communities.
            </p>
            <p>
              What started as a small local initiative has grown into a comprehensive
              support system that has touched the lives of over 1,000 children.
            </p>
            <p>
              Today, we continue to expand our reach while maintaining our core values
              of compassion, integrity, and sustainable impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
