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
    <section className="w-screen py-6 m-auto text-4xl bg-darkBg">
      <div className="flex flex-col w-11/12 gap-4 m-auto">
        {games &&
          games.map((game, index) => (
            <div
              className="relative flex items-center content-center justify-center "
              key={game.gameName + index}
            >
              <h2 className="relative z-10 w-full px-4 py-8 text-4xl text-center bg-black rounded-xl font-hina bg-opacity-60">
                <Link href={"/" + game.urlLink}>{game.gameName}</Link>
              </h2>

              <Image
                src={game.coverArt}
                alt={game.gameName + " cover image"}
                fill
                className="z-0 object-cover rounded-xl"
              ></Image>
            </div>
          ))}
      </div>
    </section>
  );
};
export default GamesList;
