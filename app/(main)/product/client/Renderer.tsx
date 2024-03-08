"use client";
import { useState } from "react";
import axios from "axios";
import fetchAction from "../actions/fetchAction";

export default function Renderer() {
  const [data, setData] = useState({ id: 0 });
  const handleClick = async () => {
    const result = await fetchAction();

    setData(result);
  };

  return (
    <div className="p-4 bg-slate-400 w-1/2 m-auto mt-10 flex flex-col items-center justify-between gap-4 rounded-md">
      <button
        onClick={handleClick}
        className="bg-black hover:bg-slate-800 duration-150 px-4 py-2 rounded-md"
      >
        Click Me
      </button>
      <p>I&apos;m a client component</p>

      <p>{data?.id}</p>
    </div>
  );
}
