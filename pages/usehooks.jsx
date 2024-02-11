import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import useCopyToClipBoard from "@dilawchaybi/usehooks/useCopyToClipBoard";
import Link from "next/link";

const hooks = [
  "useCopyToClipBoard",
  "useDebounce",
  "useDefault",
  "useDocumentTitle",
  "useFavicon",
  "useIdle",
  "useList",
  "useLockBodyScroll",
  "usePrevious",
  "useWindowSize",
];

const usehooks = () => {
  const [copiedText, copyToClipboard] = useCopyToClipBoard();
  const [copied, setCopied] = useState(false);

  const [time, setTime] = useState("");

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

  useEffect(() => {
    const id2 = window.setTimeout(() => {
      setTime(new Date().getSeconds());
    }, 1000);

    return () => {
      window.clearTimeout(id2);
    };
  }, [time]);

  return (
    <div className="wrapper">
      <div className="container">
        <nav className="nav-container">
          <Image
            alt="walidchaybi"
            className="logo"
            src="/walidchaybi.png"
            width={120}
            height={120}
          />
          <Image
            alt="github"
            className="logo"
            src="/icon-github.svg"
            width={100}
            height={100}
          />
        </nav>
      </div>
      <section className="info">
        <Image
          alt="usehooks"
          src="/logo-useHooks.svg"
          width={320}
          height={320}
        />
        <h1 className="text-xl md:text-2xl mt-6 w-[30rem] text-center">
          A collection of modern, server-safe React hooks – from Chaybi Walid -{" "}
          {time}
        </h1>
        <div className="code">
          <code>npm i @dilawchaybi/usehooks</code>
          <button className="btn-copy" onClick={handleCopy}>
            <FaRegCopy /> {copied ? <span>copied</span> : <span>copy</span>}
          </button>
        </div>
      </section>
      <section className="hooks">
        {hooks.map((hook) => (
          <Link href={`/usehooks/${hook}`}>
            <div key={hook} className="hook">
              <p>{hook}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default usehooks;
