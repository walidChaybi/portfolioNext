import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import ThreeD from "./ThreeD";
function Header() {
  return (
    <header className="header mx-auto max-w-7xl sticky top-0 flex justify-between p-5 items-center z-10">
      <motion.div
        initial={{
          x: -500,

          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,

          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center"
      >
        <Image src="/walidchaybi.png" width={80} height={80} />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="flex items-center cursor-pointer"
      >
        <SocialIcon network="email" />
        <p className="ml-5 hidden md:inline-flex text-sm text-gray-400 ">
          <Link href="#contact"></Link>
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
