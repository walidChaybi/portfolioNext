import Image from "next/image"
import { motion } from "framer-motion"

const ProjectSection = ({ image }) => {
  return (
    <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-auto hover:bg-slate-800 duration-700">
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        width={500}
        height={50}
        src={`/${image}.png`}
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#003788]/50">Case study</span>
        </h4>
        <p className="text-ls text-center md:text-left">
          project summary: lorem ipsum about Netflix and another code based
          project from ai chatgpt, i wordked with javascript html and scss with
          stepzen in mind
        </p>
      </div>
    </div>
  )
}

function Projects() {
  const projects = [1, 2, , 3, 4]
  return (
    <div className=" relative max-w-full mt-20 h-auto flex flex-col text-left items-center ">
      <div className="z-10 sticky top-8 mb-20">
        <h3 className="element uppercase tracking-[20px] text-gray-500 text-3xl z-10">
          Projects
        </h3>
      </div>

      <motion.div
        initial={{
          x: 1000,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className=" w-full flex flex-col "
      >
        {/*Projects Div*/}
        <ProjectSection image="screenweatherapp-min" />
        <ProjectSection image="bookingscreen-min" />
        <ProjectSection image="fithubscreen-min" />
        <ProjectSection image="dilawflix-min" />
      </motion.div>

      {/*<div className="w-[2000px] absolute bg-[#003387]/10 left-[-100px] top-[250px] h-[500px] -skew-y-12" />*/}
    </div>
  )
}

export default Projects
