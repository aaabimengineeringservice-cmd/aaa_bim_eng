import { stats } from "../data/statsData";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Why Choose Our BIM Services?
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              We deliver high-quality BIM solutions with accuracy, efficiency,
              and industry-standard workflows. Our expertise in Revit,
              Navisworks, and BIM coordination ensures smooth project execution
              from concept to construction.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Advanced 3D Modeling Expertise</li>
              <li>✔ Clash-Free Coordination</li>
              <li>✔ On-Time Project Delivery</li>
              <li>✔ International BIM Standards</li>
            </ul>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/images/whyus.jpg"
              alt="BIM Project"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-gray-100 p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                {stat.number}
              </h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
