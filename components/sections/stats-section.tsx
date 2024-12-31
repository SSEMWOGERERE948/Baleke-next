import { Heart, Users, Sparkles } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { icon: Heart, value: "1,000+", label: "Children Supported" },
    { icon: Users, value: "50+", label: "Partner Organizations" },
    { icon: Sparkles, value: "100%", label: "Funds to Programs" },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <stat.icon className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-green-800 mb-2">{stat.value}</h3>
              <p className="text-gray-700 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}