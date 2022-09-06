import { motion } from "framer-motion";
import Deco from "./Deco";
import AnimateText from "./AnimateText";
import Section from "./Section";
const Presentation = ({ change, choice, element }) => {
  return (
    <>
      <div className="content_1">
        <div>
          {!change && !choice && (
            <h2>
              <AnimateText className="text_anim" />
            </h2>
          )}
          {choice && <h2 className="title">{element.title}</h2>}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
            className="cnt"
          >
            <Deco />
            <Section change={change} choice={choice} element={element} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Presentation;
