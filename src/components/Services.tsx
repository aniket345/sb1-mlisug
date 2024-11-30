import React from 'react';
import { BookOpen, Users, Target, Clock } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'One-on-One Tutoring',
    description:
      "Personalized attention and customized learning plans for each student's needs.",
  },
  {
    icon: Users,
    title: 'Grade 2-10',
    description:
      'Currently accepting students from Grade 2-10, with special focus on Science, and Maths',
  },
  {
    icon: Target,
    title: 'Career Guidance',
    description: 'Personalized conversation with students to understand their strength and guide them for the best future career',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Convenient timing options to fit your busy schedule.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Services Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
