import FeatauredImage from "@/components/FeaturedImage";
import HeroProfiles from "@/components/HeroProfiles";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marvel Gallary</title>
        <meta name="description" content="Demo website - Marvel Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <FeatauredImage />
        <HeroProfiles />
        <Partners />
      </main>
    </>
  );
}
