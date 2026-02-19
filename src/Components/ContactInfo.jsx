import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Information
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Connect with AAA BIM Engineering Service for reliable,
            cost-effective and high-quality BIM solutions tailored
            to your project requirements.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Location */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-6">
              <MapPin className="text-blue-700" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Office Location
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AAA BIM Engineering Service<br />
              Chennai, Tamil Nadu<br />
              India
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-6">
              <Phone className="text-blue-700" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Phone Number
            </h3>
            <p className="text-gray-600 text-sm">
              +91-XXXXXXXXXX
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-6">
              <Mail className="text-blue-700" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Email Address
            </h3>
            <p className="text-gray-600 text-sm break-words">
              aaabimengineering@gmail.com
            </p>
          </div>

          {/* Portfolio */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mb-6">
              <Globe className="text-blue-700" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Portfolio
            </h3>
            <a
              href="https://issuu.com/loganathan78/docs/loganathan_portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-sm font-medium hover:underline"
            >
              View Company Portfolio
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
