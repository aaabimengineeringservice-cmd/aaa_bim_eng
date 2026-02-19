import { showcaseProducts } from "../data/productsShowcaseData";

const ProductsShowcase = () => {
    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Major International Projects
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Powerful tools designed to enhance modeling accuracy and project efficiency.
                    </p>
                </div>

                {showcaseProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >

                        {/* Image */}
                        <div className="md:w-1/2">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Content */}
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-800">
                                {product.title}
                            </h3>

                            <p className="mt-4 text-gray-600">
                                {product.description}
                            </p>

                            <ul className="mt-6 space-y-2">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        ✔ {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                                Explore More
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default ProductsShowcase;
