import { useEffect, useState } from "react";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import { getTeachers } from "../services/teachersApi";
import { getFavorites } from "../services/favoritesApi";
import { useAuth } from "../hooks/useAuth";
import css from "./Favorites.module.css";

export default function FavoritesPage() {
  const [teachers, setTeachers] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const allTeachers = await getTeachers();

        const favorites = getFavorites(user.uid);

        const favoriteTeachers = allTeachers.filter((teacher) =>
          favorites.includes(`${teacher.name}-${teacher.surname}`),
        );

        setTeachers(favoriteTeachers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorites();
  }, [user]);

  if (!user) {
    return <h2>Please log in to view favorites</h2>;
  }

  return (
    <div className={css.favoritesPage}>
      {teachers.length > 0 ? (
        <ul className={css.favoritesList}>
          {teachers.map((teacher) => (
            <li key={`${teacher.name}-${teacher.surname}`}>
              <TeacherCard teacher={teacher} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noFavorites}>No favorite teachers yet</p>
      )}
    </div>
  );
}
