import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6"; // Import icons
import FlipIcon from "../../AnimationComponents/FlipIcon/FlipIcon";

function SocialMediaIcons() {
  const icons = [
    { icon: <FaXTwitter className="text-2xl" />, href: "https://twitter.com" },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://linkedin.com",
    },
    { icon: <FaGithub className="text-2xl" />, href: "https://github.com" },
  ];

  return (
    <div className="fixed bottom-[7%] left-[5%] z-[999]">
      <div className="flex flex-col gap-4">
        {icons.map((item, index) => (
          <FlipIcon
            key={index}
            icon={item.icon}
            href={item.href}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SocialMediaIcons;
