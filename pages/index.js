import GamesList from "@/components/GamesList";
import LandingPage from "@/components/LandingPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Souls Dex</title>
        <meta name="description" content="Souls Dex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage />
        <GamesList />
      </main>
    </>
  );
}
