import React from "react";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "TypeScript",
  "C++",
  "MySQL",
];

const Skills = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">My Skills</h1>

        {/* Skills List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-md text-lg font-medium hover:bg-blue-50 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
