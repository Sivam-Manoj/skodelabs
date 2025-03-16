"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa"; // Import the star icon for ratings

const testimonials = [
  {
    quote:
      "Skode Labs responded within ten minutes of initial contact. They went straight from an idea to a good solution proposal and proactively maintained communication. In my opinion, they have a good understanding of solutions and approach customers proactively while not neglecting their own creativity. I will definitely work with them again in the future.",
    name: "svebol",
    position: "Repeat Client, Germany",
    price: "$50-$100",
    duration: "4 days",
    service: "Desktop Applications",
    rating: 5,
  },
  {
    quote:
      "Skode Labs truly excels in AI Development, delivering work with utmost professionalism. Collaborating with them was a breeze, thanks to their high level of cooperation. Highly recommend!",
    name: "starbart",
    position: "Repeat Client, polland",
    price: "$100-$200",
    duration: "3 weeks",
    service: "AI Websites & Software",
    rating: 5,
  },
  {
    quote:
      "Thank you for the upgrades I wanted! Skode Labs made it happen perfectly.",
    name: "ivanc5",
    position: "Repeat Client, Croatia",
    price: "Up to $50",
    duration: "1 day",
    service: "AI Websites & Software",
    rating: 5,
  },
  {
    quote:
      "Very good work, app works like a charm. Will work again with Skode Labs for sure!",
    name: "ivanc5",
    position: "Repeat Client, Croatia",
    price: "$200-$400",
    duration: "7 days",
    service: "AI Websites & Software",
    rating: 5,
  },
  {
    quote:
      "Skode Labs exceeded all expectations! Their expertise, creativity, and attention to detail were truly incredible. Communication was seamless, and they delivered ahead of schedule with top-tier quality, professionalism, dedication, and efficiency. Highly recommend—I&amp;#39;ll definitely be back for more!",
    name: "Kumar Sangar",
    position: "Repeat Client, Sri Lanka",
    price: "Up to $50",
    duration: "1 day",
    service: "AI Websites & Software",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to manually change the testimonial index on dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gray-100/50 py-11 w-full">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white/70 backdrop-blur-md p-8 shadow-xl rounded-lg text-center mx-auto"
              style={{
                width: "100%",
                maxWidth: "100%", // Prevent it from exceeding available space
                boxSizing: "border-box", // Ensure padding is included in the width
              }}
            >
              <p className="text-gray-700 text-xl md:text-2xl">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <h3 className="mt-4 text-blue-600 font-semibold text-lg">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].position}
              </p>

              {/* Display Rating */}
              <div className="mt-4 flex justify-center items-center">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)} // Call the handleDotClick function
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 w-4 h-4" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
