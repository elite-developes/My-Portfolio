import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { socialLinks } from "../../data/portfolioData";

function SocialIcons({ size = "text-2xl" }) {
  const icons = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Email: <MdEmail />,
  };

  return (
    <div className={`flex items-center gap-5 ${size}`}>
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target={
            social.name === "Email"
              ? "_self"
              : "_blank"
          }
          rel={
            social.name === "Email"
              ? undefined
              : "noopener noreferrer"
          }
          aria-label={social.name}
          className="
            text-gray-700
            transition-all
            duration-300
            hover:text-blue-600
            hover:-translate-y-1
          "
        >
          {icons[social.name]}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;