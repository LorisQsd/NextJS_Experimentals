import { Metadata } from "next";
import { cache } from "react";
import axios from "axios";
import Renderer from "./client/Renderer";

type TResult = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

let axiosCount = 0;
let fetchCount = 0;

const fetchFakeData = cache(async () => {
  try {
    fetchCount++;
    // console.log("fetch");
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await result.json();

    // console.log(fetchCount);

    return data as TResult;
  } catch (error) {
    console.error(error);
  }
});

// Thanks to the cache react function, we can fetch without duplating calls
const axiosFakeData = cache(async () => {
  try {
    axiosCount++;
    // console.log("axios");
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    // console.log(axiosCount);

    return result.data as TResult;
  } catch (error) {
    console.error(error);
  }
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await axiosFakeData();

  return {
    title: data?.title,
    alternates: {
      canonical: "/test",
    },
  };
}

export default async function ProductPage() {
  const data = await axiosFakeData();

  return (
    <section>
      <h1 className="text-center font-bold text-xl">I&apos;m a product page</h1>
      <h2 className="text-center font-bold text-lg pt-10">
        Below result from fetch
      </h2>
      <p className="text-center pt-2">{data?.title}</p>

      <Renderer />
    </section>
  );
}
