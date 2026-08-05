import Navbar from "@/components/layout/Navibar";

export default function AppPage() {
  return (
    <div className="">
      <Navbar />
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600" href="https://nextjs.org"></a>
        </h1>

        <p className="mt-3 text-2xl"></p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"></div>
      </div>
    </div>
  );
}
