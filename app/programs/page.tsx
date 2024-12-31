import Image from "next/image";

const programs = [
  {
    title: "Education Support",
    description:
      "Providing school fees, supplies, and tutoring to ensure every child has access to quality education.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Healthcare Access",
    description:
      "Regular medical check-ups, vaccinations, and health education for children in our care.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Safe Housing",
    description:
      "Providing safe and nurturing homes for orphaned children in partnership with local families.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Digital Skills",
    description:
      "Teaching essential computer and internet skills to prepare children for the modern workforce.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Nutrition Program",
    description:
      "Ensuring children receive balanced, nutritious meals and learn about healthy eating habits.",
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Mentorship",
    description:
      "Connecting children with positive role models who provide guidance and support.",
    image:
      "https://images.unsplash.com/photo-1555529771-3a14e7c6d78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5 dark:opacity-10" />
          <div className="relative">
            <h1 className="text-4xl font-bold text-green-800 dark:text-white mb-4">
              Our Programs
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive support through various programs designed to nurture,
              educate, and empower children in need.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgramCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
      <div className="relative w-full h-64">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-all duration-300" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <button className="self-start px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
}
