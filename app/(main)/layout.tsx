import { Metadata } from "next";

export const metadata: Metadata = {
  // The metadataBase NEEDS to be an url using a new instance of URL constructor
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_BASE_URL as string | undefined) ??
      // The value below cannot be an empty string.
      // Avoid error while building the app
      // It must match the following format => http://anything.anything
      "http://example.com"
  ),
  title: "NextJS - Experimentals",
  description: "Je suis la page d'accueil",
};

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1 className="bg-purple-200 text-black font-bold text-center text-xl">
          I&apos;m a header
        </h1>
      </header>
      <main className="grow flex flex-col">{children}</main>
      <footer>
        <h1 className="bg-red-200 text-black font-bold text-center text-xl">
          I&apos;m a footer
        </h1>
      </footer>
    </>
  );
}
