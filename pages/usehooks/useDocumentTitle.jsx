import HooksHeader from "@/components/HooksHeader";
import Image from "next/image";
import useCopyToClipBoard from "@dilawchaybi/usehooks/useCopyToClipBoard";
import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Table from "@/components/Table";
import Hooks from "@/components/Hooks";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import Editor from "react-simple-code-editor";
import useDocumentTitle from "@dilawchaybi/usehooks/useDocumentTitle";

const parameters = [
  {
    index: "title",
    type: "string",
    description: "The title to be set for the document.",
  },
];

const usedocumenttitle = () => {
  const [copiedText, copyToClipboard] = useCopyToClipBoard();
  const [copied, setCopied] = useState(false);

  const [code, setCode] = useState(`import * as React from "react";
import { useDocumentTitle } from "@uidotdev/usehooks";

export default function App() {
  const [count, setCount] = React.useState(0);

  useDocumentTitle( {count} times.);
  return (
    <section>
      <h1>useDocumentTitle</h1>
      <h6>
        <a
          className="link"
          href="https://6vmc1n.csb.app/"
          target="_blank"
          rel="noreferrer"
        >
          Try in a new tab
        </a>
      </h6>
      <button className="primary" onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
    </section>
  );
}
`);

  const handleCopy = () => {
    copyToClipboard("npm i @dilawchaybi/usehooks");
    setCopied(true);
  };

  useEffect(() => {
    const id = window.setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      window.clearTimeout(id);
    };
  }, [copied]);

  useDocumentTitle("useDocumentTitle");

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
              useDocumentTitle
            </h1>
            <p className="text-xl mt-2">
              Dynamically update the title of a webpage with useDocumentTitle.
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
              The useDocumentTitle hook is useful for dynamically updating the
              title of a webpage based on the current state or data. This hook
              proves beneficial in scenarios where the title needs to be
              dynamically updated, such as displaying the name of the currently
              selected item or reflecting changes in application state.
            </p>
          </div>
          <div>
            <h2 className="font-bold mt-8 mb-4 uppercase text-xl">
              Parameters
            </h2>

            <Table name="Name" data={parameters} />
          </div>
        </section>
        <div>
          <h2 className="font-bold mt-8 mb-4 uppercase text-xl">demo</h2>
          <div className="p-8 flex flex-col items-center bg-[#131313] rounded-xl">
            <pre></pre>
          </div>
        </div>

        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '  "Fira Mono", monospace',
            fontSize: 16,
          }}
        />
        <div className="m-4">
          <h2 className="text-4xl">Other hooks</h2>
          <Hooks />
        </div>
      </main>
    </div>
  );
};

export default usedocumenttitle;
