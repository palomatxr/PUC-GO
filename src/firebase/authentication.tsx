import { app } from './firebase'; 

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { addDoc, collection, getFirestore, query, getDocs, where} from 'firebase/firestore'

const auth = getAuth(app);
const dataBase = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();

const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    //Adicionar usuario ao banco de dados
    await addDoc(collection(dataBase, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    })
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('Usuário fez logout com sucesso');
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw error;
  }
};

const logout =  () => {
  signOut(auth);
}

const loginWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleAuthProvider);
      const user = userCredential.user;
      
      const findUser = query(collection(dataBase, "user"), where("uid", "==", user.uid))
      const docs = await getDocs(findUser);

      if (docs.docs.length > 0) {
        await addDoc(collection(dataBase, "user"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email
        })
      }

    } catch (error) {
      console.error('Erro ao fazer login com a conta do Google:', error);
      throw error;
    }
  };
  

export { auth, registerUser, loginUser, logoutUser, loginWithGoogle, logout };
