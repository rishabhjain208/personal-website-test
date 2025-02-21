import React from "react";

const passions = [
  "Building Scalable Applications",
  "UI/UX Enhancement",
  "Open Source Contribution",
  "AI & Machine Learning",
  "Web Performance Optimization",
];

const Passions = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Passions</h1>
      <div className="text-lg text-gray-700 text-center max-w-xl">
        {passions.map((passion, index) => (
          <p key={index} className="mt-2">
            {passion}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Passions;
