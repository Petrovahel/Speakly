import { ref, get } from "firebase/database";
import { database } from "../firebase/config";

export const getTeachers = async () => {
  try {
    const snapshot = await get(ref(database, "teachers"));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
