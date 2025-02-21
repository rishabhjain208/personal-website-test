import React from "react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Teerthanker Mahaveer University",
    year: "2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vidya Institute of Engineering",
    year: "2023",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Rishabh Academy ",
    year: "2020",
  },
];

const AcademicBackground = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Academic Background
      </h1>
      <div className="text-lg text-gray-700 text-center">
        {education.map((edu, index) => (
          <p key={index} className="mt-2">
            <span className="font-semibold">{edu.degree}</span> -{" "}
            {edu.institution} ({edu.year})
          </p>
        ))}
      </div>
    </div>
  );
};

export default AcademicBackground;
