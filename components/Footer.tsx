import Head from "next/head";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      {/* SEO Enhancements */}
      <Head>
        <title>Skode Labs - AI & Software Solutions</title>
        <meta
          name="description"
          content="Skode Labs offers AI development, SaaS solutions, automation, and software development services to help your business grow."
        />
        <meta
          name="keywords"
          content="AI Development, SaaS, Software, Automation, SEO, Web Apps, Mobile Apps"
        />
        <meta name="author" content="Skode Labs" />
        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Skode Labs - AI & Software Solutions"
        />
        <meta
          property="og:description"
          content="Skode Labs offers AI development, SaaS solutions, automation, and software development services to help your business grow."
        />
        <meta property="og:image" content="/images/og-image.jpg" />{" "}
        {/* Add your OG image */}
        <meta property="og:url" content="https://www.skodelabs.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@skodelabs" />
        <meta
          name="twitter:title"
          content="Skode Labs - AI & Software Solutions"
        />
        <meta
          name="twitter:description"
          content="Skode Labs offers AI development, SaaS solutions, automation, and software development services to help your business grow."
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />{" "}
        {/* Add your Twitter card image */}
      </Head>

      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Skode Labs. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="https://www.linkedin.com/company/skodelabs"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl hover:text-blue-400 transition duration-300" />
            </Link>

            <Link
              href="https://wa.me/message/IMA6JXS6QOYXB1"
              target="_blank"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl hover:text-green-500 transition duration-300" />
            </Link>
            <Link href="mailto:office@skodelabs.com" aria-label="Email">
              <FaEnvelope className="text-xl hover:text-red-400 transition duration-300" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
