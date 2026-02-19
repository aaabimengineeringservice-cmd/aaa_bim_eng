import { services } from "../data/ServicesData";

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800">
          BIM Engineering Services
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Delivering advanced Building Information Modeling solutions to enhance
          project accuracy, efficiency, and collaboration.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl">{service.icon}</div>

              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              <button className="mt-5 text-blue-600 font-medium hover:underline">
                Learn More →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
