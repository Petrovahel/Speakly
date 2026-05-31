import { ref, get, query, limitToFirst } from "firebase/database";

import { database } from "../firebase/config";

export const getTeachers = async (limit = null) => {
  try {
    let teachersRef;

    if (limit) {
      teachersRef = query(ref(database, "teachers"), limitToFirst(limit));
    } else {
      teachersRef = ref(database, "teachers");
    }

    const snapshot = await get(teachersRef);

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return [];
  } catch (error) {
    console.error(error);

    throw error;
  }
};
