import Head from "next/head";
import { FaCogs, FaRocket } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";

const Hero: React.FC = () => {
  return (
    <>
      <Head>
        <title>Skode Labs - Empowering Businesses with AI & Innovation</title>
        <meta
          name="description"
          content="Skode Labs provides AI-driven solutions to help businesses innovate and scale. We specialize in AI development, software, automation, and more."
        />
        <meta
          name="keywords"
          content="AI, software development, automation, AI development, machine learning, business innovation"
        />
        <meta
          property="og:title"
          content="Skode Labs - Empowering Businesses with AI & Innovation"
        />
        <meta
          property="og:description"
          content="Skode Labs provides AI-driven solutions to help businesses innovate and scale."
        />
        <meta property="og:image" content="/images/hero-image.jpg" />
        <meta property="og:url" content="https://www.skode-labs.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@skodelabs" />
        <meta name="twitter:title" content="Skode Labs" />
        <meta
          name="twitter:description"
          content="Skode Labs - AI & Innovation"
        />
        <meta name="twitter:image" content="/images/hero-image.jpg" />
      </Head>

      <section className="relative w-full top-11 min-h-screen bg-gradient-to-r from-indigo-600 to-blue-800 flex items-center justify-center px-6">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-900 opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Transform Your Business with <br />
            <span className="text-yellow-400">AI & Innovation</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 px-4 md:px-12">
            At Skode Labs, we provide AI-powered solutions to help your business
            scale, automate, and innovate. Unlock the full potential of
            technology.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 px-4">
            {[
              {
                icon: <FaCogs className="text-yellow-400 text-4xl" />,
                title: "Automation",
                desc: "AI-driven automation to streamline your processes.",
              },
              {
                icon: <MdLightbulb className="text-yellow-400 text-4xl" />,
                title: "Innovation",
                desc: "Cutting-edge AI technologies to drive business success.",
              },
              {
                icon: <FaRocket className="text-yellow-400 text-4xl" />,
                title: "Growth",
                desc: "Optimize performance and scale with intelligent systems.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <a
            href="#about"
            className="inline-block bg-yellow-500 text-gray-900 font-semibold text-lg px-6 py-3 rounded-full shadow-xl hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
