import { motion } from "framer-motion";

import ProDeco from "./ProDeco";
const Projects = ({ handleChange }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
        className="content_2"
      >
        <div className="deco3"></div>
        <h2 className="p_title">Projects </h2>
        <ul className="project_container">
          <li>
            <ProDeco
              onClick={() => handleChange(0)}
              name="Zerda game"
            />
          </li>
          <li>
            <ProDeco onClick={() => handleChange(1)} name="Barber shop" />
          </li>
          <li>
            <ProDeco onClick={() => handleChange(2)} name="E-Store" />
          </li>
          <li>
            <ProDeco onClick={() => handleChange(3)} name="AouriMed" />
          </li>
          <li>
            <ProDeco onClick={() => handleChange(4)} name="Copy of pomofocus.io" />
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Projects;
