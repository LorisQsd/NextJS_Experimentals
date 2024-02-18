'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type dataType = {
    title404: string;
}

export default function ErrorPage({
  fetchErrorPageContent,
}: {
  fetchErrorPageContent: () => Promise<any>;
}) {
  const { push } = useRouter();
  const [data, setData] = useState<dataType>();

  const handleClick = () => {
    push("/");
  };

  useEffect(() => {
    const getData = async () => {
        const {fields} = await fetchErrorPageContent();

        setData(fields)
    }
    getData();

  }, [fetchErrorPageContent])


  return (
    <section className="flex items-center justify-center flex-col gap-4 grow">
      <h1 className="text-center font-bold text-xl">{data?.title404 ?? "undefined"}</h1>

      <button onClick={handleClick}>click me</button>
    </section>
  );
}
