import Image from "next/image";
import { services } from "@/data/servicesData";

const Services: React.FC = () => (
  <section id="services" className="py-16 bg-gray-100/50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <div className="relative w-full h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg transition-all duration-300 group-hover:brightness-90"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
