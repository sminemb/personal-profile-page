import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="skills">
      <h2>SKILLS</h2>
      <div className="skill-badges">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
