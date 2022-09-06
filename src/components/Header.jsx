import { motion } from "framer-motion";

import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import CvIcon from "./icons/CvIcon";
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
        <GithubIcon className="icon" />
        <MailIcon className="icon" />
        <CvIcon className="icon" />
      </motion.div>
    </div>
  );
};

export default Header;
