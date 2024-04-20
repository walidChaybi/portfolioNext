import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectSection = ({ image, name, description, link }) => {
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
          <Link target="_blank" rel="noopener noreferrer" href={link}>
            <span className="underline decoration-[#003788]/50">{name}</span>
          </Link>
        </h4>
        <p className="text-ls text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className=" relative max-w-full mt-20 h-auto flex flex-col text-left items-center ">
      <div className="z-10 sticky top-8 mb-20">
        <h3 className="element uppercase tracking-[10px] text-gray-500 text-md md:text-xl xl:text-3xl z-10">
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
          duration: 0.4,
        }}
        className=" w-full flex flex-col "
      >
        {/*Projects Div*/}
        <ProjectSection
          name="App Méteo + Chatgpt 3.5"
          image="screenweatherapp-min"
          link="https://weather.chaybi.ovh/"
          description="Application de méteo qui affiche le température actuelle dans tous les pays du monde. J'ai utilisé la framework NextJS pour le developpement de cette app, HTML5, Tailwind CSS, Framer motion, Sanity.io"
        />
        <ProjectSection
          name="Booking Replica"
          link="https://booking.chaybi.ovh/"
          image="bookingscreen-min"
          description="Une copie du siteweb Booking.com, je l'ai refait  en utilisant ReactJS, React Router, HTML5, CSS, et quelques React Packages pour aider surtout sur le calendrier"
        />
        <ProjectSection
          name="Github Profils Viewer"
          link="https://github.chaybi.ovh/"
          image="fithubscreen-min"
          description="Un projet qui affiche les profiles Github avec des details sur leurs reposotories et stacks qui utilisent dans leurs repos "
        />
        <ProjectSection
          name="Netflix Replica"
          link="http://netflix.chaybi.ovh/"
          image="dilawflix-min"
        />
      </motion.div>

      {/*<div className="w-[2000px] absolute bg-[#003387]/10 left-[-100px] top-[250px] h-[500px] -skew-y-12" />*/}
    </div>
  );
}

export default Projects;
