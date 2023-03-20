import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GamesList = () => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const gamesCol = collection(db, "gamelist");
    const gamesSnapshot = await getDocs(gamesCol);
    const gamesList = gamesSnapshot.docs.map((doc) => doc.data());
    setGames(gamesList);
    console.log(gamesList);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <section className="flex flex-col w-11/12 py-6 m-auto text-4xl">
      {games &&
        games.map((game, index) => (
          <div
            className="relative flex items-center content-center justify-start h-full border-t "
            key={game.gameName + index}
          >
            <h2 className="relative z-10 flex items-center w-full h-full px-4 py-8 text-3xl bg-black font-hina bg-opacity-60 ">
              <Link href={"/bloodborne"}>{game.gameName}</Link>
            </h2>
            <div className="">
              <Image
                src={game.coverArt}
                alt={game.gameName + " cover image"}
                fill
                className="z-0 object-cover"
              ></Image>
            </div>
          </div>
        ))}
    </section>
  );
};
export default GamesList;
