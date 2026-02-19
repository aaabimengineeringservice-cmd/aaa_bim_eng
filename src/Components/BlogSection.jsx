import { blogs } from "../data/blogData";

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Latest BIM Insights
          </h2>
          <p className="mt-4 text-gray-600">
            Stay updated with industry trends, tools, and BIM best practices.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-blue-600 font-medium">
                  {blog.date}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">
                  {blog.description}
                </p>

                <button className="mt-4 text-blue-600 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BlogSection;
