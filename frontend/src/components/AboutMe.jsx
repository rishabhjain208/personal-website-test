import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="your-image-url.jpg"
            alt="Rishabh Jain"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Software Engineer
          </h1>
          <h2 className="text-4xl font-extrabold text-blue-600 mt-2">
            Rishabh Jain
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            a placerat sapien pretium eu.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
