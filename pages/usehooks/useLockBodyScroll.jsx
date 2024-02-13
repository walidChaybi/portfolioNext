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

const uselockbodyscroll = () => {
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
              useLockBodyScroll
            </h1>
            <p className="text-xl mt-2">
              Temporarily disable scrolling on the document body with
              useLockBodyScroll.
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
              The useLockBodyScroll hook temporarily disables scrolling on the
              document body. This can be beneficial in scenarios where you want
              to restrict scrolling while displaying a modal, a dropdown menu,
              or any other component that requires the user’s focus. Once the
              component using this hook is unmounted or no longer needed, the
              hook returns a cleanup function that restores the original
              overflow style, ensuring that the scroll behavior is reverted to
              its previous state.
            </p>
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

export default uselockbodyscroll;
