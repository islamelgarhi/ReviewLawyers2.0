import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { UserProfile } from '../types/user';

export async function createUserProfile(userData: Partial<UserProfile>): Promise<void> {
  if (!userData.uid) throw new Error('User ID is required');
  
  const userRef = doc(db, 'users', userData.uid);
  const now = new Date();
  
  await setDoc(userRef, {
    ...userData,
    createdAt: now,
    lastLoginAt: now,
  });
}

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    return userSnap.data() as UserProfile;
  }
  
  return null;
}

export async function updateUserProfile(uid: string, data: Partial<UserProfile>): Promise<void> {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, {
    ...data,
    lastLoginAt: new Date(),
  });
}