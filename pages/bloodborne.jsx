import { db } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { collection, getDoc, doc } from "firebase/firestore";

const Bloodborne = () => {
  const [bosses, setBosses] = useState([]);

  const getBossList = async () => {
    const docRef = doc(db, "gamelist", "Bloodborne");
    const docSnap = await getDoc(docRef);
    if (docSnap) {
      console.log("Document data:", docSnap.data());
      setBosses(docSnap.data());
      console.log(bosses.bossList);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getBossList();
  }, []);
  return (
    <div>
      {bosses.bossList &&
        bosses.bossList.map((boss, index) => (
          <div key={boss.name + index}>
            <h1>{boss.bossName}</h1>
          </div>
        ))}
    </div>
  );
};
export default Bloodborne;
