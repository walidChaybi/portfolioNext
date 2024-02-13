import HooksHeader from "@/components/HooksHeader";
import Image from "next/image";
import useCopyToClipBoard from "@dilawchaybi/usehooks/useCopyToClipBoard";
import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Table from "@/components/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hooks from "@/components/Hooks";

const parameters = [
  {
    index: "newValue",
    type: "any",
    description: "The new value to track and return the previous of.",
  },
];
const returnValue = [
  {
    index: "previousValue",
    type: "any",
    description: "The previous value of the provided newValue.",
  },
];

const useprevious = () => {
  const [copiedText, copyToClipboard] = useCopyToClipBoard();
  const [copied, setCopied] = useState(false);
  const [hash, setHash] = useState("");

  const handleCopy = () => {
    copyToClipboard("npm i @dilawchaybi/usehooks");
    setCopied(true);
  };

  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    setHash(crypto.randomUUID());
    const id = window.setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      window.clearTimeout(id);
    };
  }, [copied]);

  return (
    <div className="wrapper">
      <HooksHeader />
      <main className="hook-wrapper">
        <section className="hook-description">
          <Link href="/usehooks">
            <Image
              alt="usehooks"
              src="/logo-useHooks.svg"
              width={200}
              height={200}
            />
          </Link>
          <div className="mb-10 mt-10">
            <h1 className="text-3xl text-[#12b5e5] font-extrabold">
              usePrevious
            </h1>
            <p className="text-xl mt-2">
              Track the previous value of a variable with usePrevious.{" "}
            </p>
          </div>
          <div className="install">
            <h2 className="font-semibold">INSTALL:</h2>
            <div className=" w-[100%] h-[70px] flex justify-between items-center p-5 mt-3 bg-gray-950 border-1 rounded-lg">
              <div className="flex items-center gap-1">
                <FaChevronRight color="yellow" />
                <code className="text-xl">npm i @dilawchaybi/usehooks</code>
              </div>
              <button className="btn-copy" onClick={handleCopy}>
                <FaRegCopy /> {copied ? <span>copied</span> : <span>copy</span>}
              </button>
            </div>
          </div>
          <div>
            <h2 className="font-bold mt-8 mb-4 text-xl ">DESCRIPTION:</h2>
            <p className="text-lg">
              The usePrevious hook is a useful tool for tracking the previous
              value of a variable in a functional component. This can be
              particularly handy in scenarios where it is necessary to compare
              the current value with the previous one, such as triggering
              actions or rendering based on changes.
            </p>
          </div>
          <div>
            <h2 className="font-bold mt-8 mb-4 uppercase text-xl">
              Parameters
            </h2>

            <Table name="Name" data={parameters} />
          </div>
          <div>
            <h2 className="font-bold mt-8 mb-4 uppercase text-xl">
              Parameters
            </h2>

            <Table name="Name" data={returnValue} />
          </div>
        </section>
        <div className="m-4">
          <h2 className="text-4xl">Other hooks</h2>
          <Hooks />
        </div>
      </main>
    </div>
  );
};

export default useprevious;
