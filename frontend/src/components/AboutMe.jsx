import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-grey">
      <div className="grid grid-cols-2 grid-flow-col mt-[100px]">
        <div>
          <img src="" alt="img"></img>
        </div>

        <div className="">
          <h1>Software engineer</h1>
          <h1 className="">Rishabh Jain</h1>
          <p>
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            a placerat sapien pretium eu.
          </p>
          <button className="border rounded-lg">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
