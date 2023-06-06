import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

function About() {
  return (
    <div className="relative mt-16 flex flex-col items-center ">
      <h3 className="element sticky top-8 text-md md:text-xl xl:text-3xl tracking-[10px] text-gray-500 z-10">
        ABOUT
      </h3>

      <span className="absolute top-[120px] text-2xl md:mt-0 xl:mt-0 font-bold md:text-4xl xl:text-4xl">
        <Typewriter
          words={[
            "🖐Hi, my name is Walid",
            "Guy-who-loves-coffee.jsx",
            "<AndToCodeMore />",
          ]}
          loop
          deleteSpeed={20}
          cursor
          cursorStyle="_"
          cursorColor="#00f5f5"
        />
      </span>

      <div className="max-w-7xl md:p-16 h-[900px] flex flex-col  items-center justify-evenly md:flex-row xl:flex-row">
        <motion.img
          className="mb-6 cursor-help md:mb-0 w-64 h-64 rounded-[100%] object-cover md:w-[300px] md:rounded-full md:h-[300px] xl:w-[400px] xl:h-[400px]"
          src="/walidchaybilife.webp"
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
        />
        <motion.div
          className=" px-4"
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h4 className="text-[16px] text-center md:text-left leading-8">
            Je m'appelle CHAYBI Walid, je suis quelqu'un de déterminé et
            volontaire💪🏽. Proactif, je suis toujours à la recherche de
            propositions et d'actions pour faire avancer mon travail. J'aborde
            mon activité de manière souple et gère aisément les imprévus. Je
            possède une énergie majoritairement tournée vers l'action.
            L'activité de conception est essentielle pour que je me sente
            pleinement engagé. Je me réalise en poussant les projets et en
            produisant des résultats. Je suis impatient et cherche à impulser
            une dynamique dans la réalisation du travail. Je suis doté d'un
            leadership et d'une volonté de progrès continu.
          </h4>
        </motion.div>
      </div>
    </div>
  )
}

export default About
