import { db } from './firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const awardXP = async (uid, amount) => {
  if (!uid || !amount) return;

  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const currentXP = userSnap.data().xp || 0;
      await setDoc(userRef, { ...userSnap.data(), xp: currentXP + amount }, { merge: true });
    } else {
      await setDoc(userRef, { xp: amount });
    }

    console.log(`🏅 +${amount} XP assegnati a ${uid}`);
  } catch (error) {
    console.error('Errore assegnazione XP:', error);
  }
};
