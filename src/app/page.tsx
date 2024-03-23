import { Welcome, Header, Features, About, Support } from "@/sections";

export default function Home() {
  return (
    <main className="bg-[#000000] text-[#ecedee]">
      {/* header start */}
      <Header />
      {/* header end */}

      {/* welcome start */}
      <Welcome />
      {/* welcome end */}

      {/* features start */}
      <Features />
      {/* features end */}

      {/* support start */}
      <Support />
      {/* support end */}

      {/* about start */}
      <About />
      {/* about end */}
    </main>
  );
}
