import {
  Welcome,
  Header,
  Features,
  About,
  Support,
  Accessibility,
  Themes,
  Customization,
  ExtendedFeatures,
  Contributions,
} from "@/sections";

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

      {/* accesibility start */}
      <Accessibility />
      {/* accesibility end */}

      {/* themes start */}
      <Themes />
      {/* themes end */}

      {/* customization start */}
      <Customization />
      {/* customization end */}

      {/* extended features start */}
      <ExtendedFeatures />
      {/* extended features end */}

      {/* contributions start */}
      <Contributions />
      {/* contributions end */}
    </main>
  );
}
