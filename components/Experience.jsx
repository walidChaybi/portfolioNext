import { motion } from "framer-motion";
import Work from "./Work";
import ThreeD from "./ThreeD";

function Experience() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className=" relative flex flex-col text-left md:flex-row max-w-7xl mx-auto items-center"
    >
      <Work />
    </motion.div>
  );
}

export default Experience;
