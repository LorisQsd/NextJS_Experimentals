import { getContentById } from "../lib/actions/contentful/getContent";

export default async function HomePage() {
  const {fields} = await getContentById("4paiMUzolsqHBIhT52LRlB");

  return (
    <>
      <h1 className="text-center text-xl my-10">Hello world</h1>
      <h2 className="text-center text-lg mt-10">{fields.title404 as string}</h2>
    </>
  );
}
