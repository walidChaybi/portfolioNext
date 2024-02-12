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

const returnValue = [
  {
    index: "0",
    type: "string",
    description: "The value that was last copied to the clipboard.",
  },
  {
    index: "1",
    type: "function",
    description: "A function to copy a specified value to the clipboard.",
  },
];

const usecopytoclipboard = () => {
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
              useCopyToClipBoard
            </h1>
            <p className="text-xl mt-2">
              Copy text to the clipboard using useCopyToClipboard.
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
              The useCopyToClipboard hook is useful because it abstracts the
              complexity of copying text to the clipboard in a cross-browser
              compatible manner. It utilizes the modern
              navigator.clipboard.writeText method if available, which provides
              a more efficient and secure way to copy text. In case the
              writeText method is not supported by the browser, it falls back to
              a traditional method using the document.execCommand(“copy”)
              approach.
            </p>
          </div>
          <div>
            <h2 className="font-bold mt-8 mb-4 uppercase text-xl">
              Return Value
            </h2>
            <p className="text-lg mb-4">
              The useCopyToClipboard hook returns an array with the following
              elements:
            </p>
            <Table data={returnValue} />
          </div>
          <div>
            <h2 className="font-bold mt-8 mb-4 uppercase text-xl">demo</h2>
            <div className="p-8 flex flex-col items-center bg-[#131313] rounded-xl">
              <h3 className="uppercase text-2xl">usecopytoclipboard</h3>
              <p className="mb-8">Click the HASH to copy it</p>
              <pre>
                <code
                  className="cursor-pointer"
                  onClick={() => {
                    copyToClipboard(hash);
                    notify();
                  }}
                >
                  {hash}
                </code>
                <ToastContainer position="bottom-right" />
              </pre>
            </div>
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

export default usecopytoclipboard;
