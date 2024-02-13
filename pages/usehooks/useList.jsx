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
    index: "defaultList",
    type: "array",
    description: "The initial list of elements. Default is an empty array.",
  },
];
const returnValue = [
  {
    index: "[0]",
    type: "",
    description: "The current list of elements.",
  },
  {
    index: "[1].set",
    type: "array",
    description: "Replaces the entire list with a new array l.",
  },
  {
    index: "[1].push",
    type: "any",
    description: "Appends the element to the end of the list.",
  },
  {
    index: "[1].removeAt",
    type: "number",
    description: "Removes the element at the specified index from the list.",
  },
  {
    index: "[1].insertAt",
    type: "index:number, element:any",
    description: "Inserts the element at the specified index in the list.",
  },
  {
    index: "[1].updateAt",
    type: "index: number, element: any",
    description:
      "Replaces the element at the specified index with the element.",
  },
  {
    index: "[1].clear",
    type: "index: number, element: any",
    description: "Removes all elements from the list.",
  },
];

const useidle = () => {
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
            <h1 className="text-3xl text-[#12b5e5] font-extrabold">useList</h1>
            <p className="text-xl mt-2">
              Manage and manipulate lists with useList.
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
              The useList hook is useful for managing and manipulating lists in
              a React component. It encapsulates the list state and provides a
              set of convenient methods to modify the list. By using this hook,
              you can easily initialize a list with a default value and access
              various methods to add, remove, update, or clear elements within
              the list.
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

export default useidle;
