import React from 'react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Young Minds Through Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Personalized tutoring and coaching to help students reach their full potential
          </p>
          <a
            href="#contact"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
          >
            Start Learning Today
          </a>
        </div>
      </div>
    </section>
  );
}