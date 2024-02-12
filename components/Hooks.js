import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Hooks = () => {
  const hooks = [
    {
      name: "useDebounce",
      description:
        "Delay the execution of function or state update with useDebounce.",
    },
    {
      name: "useCopyToClipBoard",
      description: "Copy text to the clipboard using useCopyToClipboard.",
    },
    {
      name: "useDefault",
      description: "Manage state with default values using useDefault.",
    },
    {
      name: "useDocumentTitle",
      description:
        "Dynamically update the title of a webpage with useDocumentTitle.",
    },
    {
      name: "useFavicon",
      description: "Dynamically update the favicon with useFavicon.",
    },
    {
      name: "useIdle",
      description: "Detect user inactivity with useIdle.",
    },
    {
      name: "useList",
      description: "Manage and manipulate lists with useList.",
    },
    {
      name: "useLockBodyScroll",
      description:
        "Temporarily disable scrolling on the document body with useLockBodyScroll.",
    },
    {
      name: "usePrevious",
      description: "Track the previous value of a variable with usePrevious.",
    },
    {
      name: "useWindowSize",
      description:
        "Track the dimensions of the browser window with useWindowSize.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {hooks.map((hook) => (
        <Link href={`/usehooks/${hook.name}`}>
          <div className="w-72 h-56 p-6 flex flex-col justify-between bg-slate-800 rounded-xl hover:scale-105 duration-300 cursor-pointer">
            <div>
              <h2 className="text-2xl text-blue-600 font-bold mb-4">
                {hook.name}
              </h2>
              <p>{hook.description}</p>
            </div>
            <IoIosArrowRoundForward
              size={38}
              className="self-end text-blue-600"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Hooks;
