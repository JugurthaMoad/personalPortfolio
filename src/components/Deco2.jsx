import { motion } from "framer-motion";
const Deco2 = ({ ...props }) => {
  return (
    <>
      <svg
        {...props}
        viewBox="0 0 203 203"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M200 2.95043e-06L200 140.479V200L-3.56974e-06 200"
          stroke="url(#paint0_diamond_54_6)"
          strokeWidth="20"
        />
        <defs>
          <radialGradient
            id="paint0_diamond_54_6"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(148 166) rotate(41.1358) scale(204.455)"
          >
            <stop offset="0.260477" stopColor="#28988B" stopOpacity="0.77" />
            <stop offset="0.730193" stopColor="#8E2727" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

export default Deco2;
