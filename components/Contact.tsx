"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageCircle } from "lucide-react"; // Lucide React Icons

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="py-16 bg-slate-100/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/70 p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <User className="text-gray-500 mr-3" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent text-gray-700 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <Mail className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent text-gray-700 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-start border-b-2 border-gray-300 py-2">
              <MessageCircle className="text-gray-500 mr-3" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-transparent text-gray-700 focus:outline-none resize-none h-32"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
