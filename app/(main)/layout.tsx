export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1 className="bg-purple-200 text-black font-bold text-center text-xl">I&apos;m a header</h1>
      </header>
      <main className="grow flex flex-col">

      {children}
      </main>
      <footer>
        <h1 className="bg-red-200 text-black font-bold text-center text-xl">I&apos;m a footer</h1>
      </footer>
    </>
  );
}
