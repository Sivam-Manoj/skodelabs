"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaProjectDiagram, FaUsers, FaSmile } from "react-icons/fa";

const Counter = ({
  from,
  to,
  suffix,
}: {
  from: number;
  to: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const duration = 2000; // Animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / (to - from)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= to) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [from, to]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-blue-500"
    >
      {count}
      {suffix}
    </motion.span>
  );
};

const ProjectCount = () => {
  return (
    <div className="flex flex-wrap text-center justify-center gap-6 p-8 bg-gray-100/50 rounded-lg shadow-md w-full  mx-auto">
      {/* Projects Completed */}
      <div className="flex flex-col items-center w-40 sm:w-48 md:w-56 p-4 bg-white rounded-lg shadow">
        <FaProjectDiagram className="text-5xl text-blue-600 mb-2" />
        <Counter from={0} to={15} suffix="+" />
        <span className="text-lg text-gray-700">Projects Completed</span>
      </div>

      {/* Happy Clients */}
      <div className="flex flex-col items-center w-40 sm:w-48 md:w-56 p-4 bg-white rounded-lg shadow">
        <FaUsers className="text-5xl text-green-600 mb-2" />
        <Counter from={0} to={20} suffix="+" />
        <span className="text-lg text-gray-700">Happy Clients</span>
      </div>

      {/* Satisfaction Rate */}
      <div className="flex flex-col items-center w-40 sm:w-48 md:w-56 p-4 bg-white rounded-lg shadow">
        <FaSmile className="text-5xl text-yellow-500 mb-2" />
        <Counter from={0} to={100} suffix="%" />
        <span className="text-lg text-gray-700">Satisfaction Rate</span>
      </div>
    </div>
  );
};

export default ProjectCount;
