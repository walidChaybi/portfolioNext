import { FaHtml5, FaGitSquare, FaReact, FaFigma } from "react-icons/fa"
import {
  SiJavascript,
  SiCsswizardry,
  SiAdobephotoshop,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiJest,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import { animate, motion } from "framer-motion"

const Skill = ({ logo, x, y }) => {
  return (
    <motion.div
      className=" z-5 absolute p-3 mt-52 flex items-center justify-center  rounded-xl  font-bold text-light animate-pulse"
      initial={{
        y: 0,
        x: 0,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        y: x,
        x: y,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 0.3,
      }}
    >
      {logo}
    </motion.div>
  )
}

function Hero() {
  return (
    <div className=" snap-center h-screen relative  flex items-center justify-center text-center">
      <div className="rota">
        <Skill logo=<FaHtml5 size={32} color="#ff5e00" /> x={12} y={28} />
      </div>
      <Skill logo=<SiJavascript size={32} color="#ffdd01" /> x={-245} y={20} />
      <Skill
        logo=<SiCsswizardry size={32} color="#0191d9" />
        x={-120}
        y={150}
      />
      <Skill logo=<FaFigma size={32} color="pink" /> x={-110} y={-250} />
      <Skill logo={<FaReact size={34} color="skyblue" />} x={-300} y={-290} />
      <Skill logo=<SiNextdotjs size={32} /> x={-400} y={190} />
      <Skill
        logo=<SiTailwindcss size={32} color="#05daed" />
        x={-280}
        y={420}
      />
      <Skill logo=<SiGraphql size={32} color="#e90f8e" /> x={210} y={-320} />
      <Skill logo=<FaGitSquare size={32} color="#f15315" /> x={210} y={320} />
      <Skill logo=<TbApi size={36} color="#5bcfe9" /> x={210} y={-150} />
      <Skill
        logo={<SiAdobephotoshop size={28} color="#0066db" />}
        x={10}
        y={220}
      />
      <Skill logo={<SiJest size={28} color="#44d434" />} x={-150} y={-450} />
      <div className="absolute rota">
        <motion.img
          initial={{
            x: 0,
          }}
          animate={{
            y: 450,
            x: 150,
          }}
          transition={{
            duration: 3,
          }}
          width={80}
          height={52}
          src="/ringplanet.webp"
        />
      </div>
      <motion.img
        initial={{
          x: 0,
        }}
        whileInView={{
          x: -150,
        }}
        transition={{
          duration: 3,
        }}
        width={80}
        height={52}
        className="absolute top-[200px] right-[20px]"
        src="/moon.webp"
      />
      <BackgroundCircles />
      {/*<GalaxySkills />*/}
      {/* <div className="absolute top-[560px]">
        <h2 className="text-sm uppercase text-gray-500 mb-10 tracking-[10px]">
          Frontend Engineer
        </h2>
  </div>*/}
      <Image
        className="absolute rounded-full"
        src="/echaybi.png"
        width={150}
        height={150}
      />
    </div>
  )
}

export default Hero
