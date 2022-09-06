import { motion } from "framer-motion";

import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
const Header = () => {
  return (
    <div className="header">
      <div></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
        className="header_icons"
      >
        <a
          href="https://github.com/JugurthaMoad/"
          target="blank"
          rel="noopener"
        >
          <GithubIcon
            handleClick={() => console.log("coucou")}
            className="icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jugurtha-moad-951abb242/"
          target="blank"
          rel="noopener"
        >
          <LinkedinIcon className="icon" />
        </a>

        <a href="mailto:moadjugurtha@gmail.com">
          <MailIcon className="icon" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
