import CatImage from "./componentes/CatImage";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center from-indigo-800 to-indigo-950 bg-gradient-to-b text-white">
      <CatImage />
    </main>
  );
}