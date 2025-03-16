import { Briefcase, Code, Rocket } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          About <span className="text-blue-600">Skode Labs</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          We are an innovative IT company specializing in AI-powered solutions
          and software development. Our mission is to transform businesses with
          cutting-edge technology.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white shadow-lg rounded-xl text-center">
            <Briefcase className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-2">
              Empowering businesses through AI and next-gen software solutions.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl text-center">
            <Code className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">What We Do</h3>
            <p className="text-gray-600 mt-2">
              AI-driven applications, SaaS solutions, and full-stack
              development.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl text-center">
            <Rocket className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Why Choose Us
            </h3>
            <p className="text-gray-600 mt-2">
              Proven expertise, cutting-edge technology, and client-focused
              innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
