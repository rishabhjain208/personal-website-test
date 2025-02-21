import React from "react";

const hobbies = [
  "Coding",
  "Playing Chess",
  "Blogging",
  "Traveling",
  "Gaming",
  "Photography",
];

const HobbiesInterests = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Hobbies & Interests
      </h1>
      <ul className="list-disc text-gray-700 text-lg">
        {hobbies.map((hobby, index) => (
          <li key={index} className="mt-2">
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HobbiesInterests;
