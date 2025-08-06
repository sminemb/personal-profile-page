import React from "react";
import ProfilePicture from "./ProfilePicture";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Button from "./Button";

const Profile = () => {
  const socialLinks = [
    { url: "https://github.com", icon: "fab fa-github" },
    { url: "https://linkedin.com", icon: "fab fa-linkedin-in" },
    { url: "https://twitter.com", icon: "fab fa-twitter" },
    { url: "https://instagram.com", icon: "fab fa-instagram" },
  ];

  return (
    <div className="profile">
      <ProfilePicture />
      <AboutMe />
      <Skills />

      <hr />
      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <Button key={index} url={link.url} iconClass={link.icon} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Profile;
