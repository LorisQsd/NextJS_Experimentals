import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  //TODO fetch data

  return {
    alternates: {
      canonical: "/test",
    },
  };
}

export default function ProductPage() {
  return (
    <section>
      <h1 className="text-center font-bold text-xl">I&apos;m a product page</h1>
    </section>
  );
}
