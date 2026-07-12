import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { socialLinks } from "../../data/portfolioData";

function SocialIcons() {
  return (
    <div className="flex items-center gap-6 text-2xl mt-8">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition duration-300"
      >
        <FaGithub />
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href={socialLinks.email}
        className="hover:text-blue-600 transition duration-300"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialIcons;