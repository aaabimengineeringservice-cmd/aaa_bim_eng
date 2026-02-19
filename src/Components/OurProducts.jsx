

const OurProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800">
          Our BIM Products
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Ready-to-use BIM templates and digital construction tools designed
          for engineers and project teams.
        </p>

        {/* Products Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-blue-600 font-bold">
                    {product.price}
                  </span>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurProducts;
