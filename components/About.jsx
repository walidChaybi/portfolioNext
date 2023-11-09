import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ThreeD from "./ThreeD";

function About() {
  // eyes movement func
  if (typeof window !== "undefined") {
    document.querySelector("body").addEventListener("mousemove", function (e) {
      let eye1 = document.querySelector(".eye1");
      let eye2 = document.querySelector(".eye2");
      let x = eye1.offsetLeft + 700 / 2;
      let y = eye1.offsetTop + 300 / 2;
      let x2 = eye2.offsetLeft + 300 / 2;
      let y2 = eye2.offsetTop + 300 / 2;
      let rad = Math.atan2(e.pageX - 2 * x, e.pageY - 2 * y);
      let rad2 = Math.atan2(e.pageX - 2 * x2, e.pageY - 2 * y2);
      let rot = rad * (180 / Math.PI) * -1 + 180;
      let rot2 = rad2 * (180 / Math.PI) * -1 + 180;
      console.log(eye1.style["background-color"]);
      eye1.style.transform = `rotate(${rot}deg)`;
      eye2.style.transform = `rotate(${rot2}deg)`;
    });
  }

  return (
    <div className=" relative mt-16 p-16 flex flex-col items-center ">
      <h3 className=" element sticky top-8 text-md md:text-xl xl:text-3xl  tracking-[10px] text-gray-500 z-10">
        ABOUT
      </h3>

      <div className="happyface">
        <div className="eyes">
          <div className="eye1"></div>
          <div className="eye2"></div>
        </div>
      </div>

      <span className="text-2xl md:mt-0 xl:mt-12 mb-8 font-bold md:text-4xl xl:text-4xl">
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

      <div className="max-w-7xl md:p-16  flex flex-col  items-center justify-evenly md:flex-row xl:flex-row">
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
  );
}

export default About;
