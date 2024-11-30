import React from 'react';
import { Brain, Calculator, Microscope, Heart, Award, Clock, Users, BookOpen } from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'Analytical Thinking',
    description: 'Expertise in breaking down complex concepts into simple, understandable parts'
  },
  {
    icon: Calculator,
    title: 'Mathematics Specialist',
    description: 'Strong foundation in mathematical concepts from elementary to high school level'
  },
  {
    icon: Microscope,
    title: 'Science Expert',
    description: 'Comprehensive knowledge of scientific principles and practical applications'
  },
  {
    icon: Heart,
    title: 'Patient Approach',
    description: 'Understanding and accommodating different learning styles and paces'
  }
];

const achievements = [
  {
    icon: Award,
    stat: '5+',
    label: 'Years Teaching Experience'
  },
  {
    icon: Users,
    stat: '100+',
    label: 'Students Mentored'
  },
  {
    icon: Clock,
    stat: '2000+',
    label: 'Teaching Hours'
  },
  {
    icon: BookOpen,
    stat: '90%',
    label: 'Student Success Rate'
  }
];

export function Profile() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Your Mentor</h2>
          <p className="text-xl text-gray-600">Dedicated to nurturing potential and building confidence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg shadow-2xl overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Aniket Barnwal - Mathematics and Science Tutor"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Aniket Barnwal</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a passionate educator with over 5 years of experience, I specialize in making Mathematics and Science 
              engaging and accessible for students from Grade 2 to 10. My teaching philosophy centers on building 
              strong foundational understanding while fostering critical thinking skills.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong className="text-gray-900">Education:</strong> Bachelor's in Engineering
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-900">Specialization:</strong> Mathematics, Science
              </p>
              <p className="text-gray-600">
                <strong className="text-gray-900">Teaching Approach:</strong> Interactive, Practical, and Student-Centered
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-indigo-50 rounded-lg">
              <achievement.icon className="h-8 w-8 mx-auto text-indigo-600 mb-3" />
              <div className="text-3xl font-bold text-indigo-600 mb-1">{achievement.stat}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <skill.icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}