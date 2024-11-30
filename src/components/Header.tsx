import React from 'react';
import { GraduationCap, Book, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">EduMentor</span>
          </div>
          <div className="flex space-x-6">
            <a href="#services" className="flex items-center hover:text-indigo-200">
              <Book className="h-5 w-5 mr-1" />
              Services
            </a>
            <a href="#contact" className="flex items-center hover:text-indigo-200">
              <Mail className="h-5 w-5 mr-1" />
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}