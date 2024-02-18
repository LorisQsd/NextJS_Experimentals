import Link from "next/link";

export default async function HomePage() {

  return (
    <>
      <h1 className="text-center text-xl my-10">Hello world</h1>

      <Link href={"/test"} className="block m-auto bg-white text-black rounded-lg w-fit p-2 hover:bg-slate-200 duration-150 hover:scale-105">Go to not found page</Link>
    </>
  );
}
