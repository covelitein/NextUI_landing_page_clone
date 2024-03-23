import { Welcome, Header, Features, About } from "@/sections";

export default function Home() {
  return (
    <main className="bg-[#000000] text-white">
      {/* header start */}
      <Header />
      {/* header end */}

      {/* welcome start */}
      <Welcome />
      {/* welcome end */}

      {/* features start */}
      <Features />
      {/* features end */}

      {/* about start */}
      <About />
      {/* about end */}
    </main>
  );
}
