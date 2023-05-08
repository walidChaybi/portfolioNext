import { motion } from "framer-motion"

function BackgroundCircles() {
  return (
    <div className=" flex show relative justify-center items-center">
      <div className="absolute border border-blue-500 rounded-[100%] h-[300px] w-[300px] animate-pulse " />
      <div className="absolute border border-blue-300 rounded-[100%] h-[500px] w-[500px] animate-pulse  " />
      <div className="absolute border border-blue-300 rounded-[100%] h-[700px] w-[700px] animate-pulse  " />
      <div className="absolute border border-blue-300 rounded-[100%] h-[900px] w-[900px] animate-pulse  " />
    </div>
  )
}

export default BackgroundCircles
