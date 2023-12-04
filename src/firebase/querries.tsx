
import { app } from './firebase'; 

import { collection, getFirestore, query, getDocs, where} from 'firebase/firestore'

const db = getFirestore(app);

const findUser = async () => {
  const uid = "mX9K6p8c8kSsX4aGf6agllLvOMv2"
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    console.log(querySnapshot.docs[0].data()) 
    return querySnapshot.docs[0].data();
  } else {
    // Retorna null ou undefined se nenhum documento for encontrado
    return null;
  }
};

export {findUser};