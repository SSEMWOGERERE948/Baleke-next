import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProgramCard({ icon: Icon, title, description }: ProgramCardProps) {
  return (
    <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200 group">
      <div className="p-4 bg-green-100 dark:bg-green-800 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-200">
        <Icon className="h-8 w-8 text-green-600 dark:text-green-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-400">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </Card>
  );
}
