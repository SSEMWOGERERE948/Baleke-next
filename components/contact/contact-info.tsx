"use client";

import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      info: "info@baleke.org",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      title: "Address",
      info: "123 Charity Lane\nNew York, NY 10001",
    },
  ];

  return (
    <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 dark:bg-green-800 rounded-full">
              <detail.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-400">{detail.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{detail.info}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
