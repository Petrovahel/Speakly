import { useEffect, useState } from "react";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import Filters from "../components/Filters/Filters";
import { getTeachers } from "../services/teachersApi";
import css from "./Teachers.module.css";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [selectedLevel, setSelectedLevel] = useState("");

  const [selectedPrice, setSelectedPrice] = useState("");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await getTeachers(visibleCount);

        setTeachers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeachers();
  }, [visibleCount]);

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesLanguage =
      !selectedLanguage || teacher.languages.includes(selectedLanguage);

    const matchesLevel =
      !selectedLevel || teacher.levels.includes(selectedLevel);

    const matchesPrice =
      !selectedPrice || teacher.price_per_hour === Number(selectedPrice);

    return matchesLanguage && matchesLevel && matchesPrice;
  });

  const languages = [
    ...new Set(teachers.flatMap((teacher) => teacher.languages)),
  ];

  const levels = [...new Set(teachers.flatMap((teacher) => teacher.levels))];

  const prices = [
    ...new Set(teachers.map((teacher) => teacher.price_per_hour)),
  ].sort((a, b) => a - b);

  return (
    <div className={css.teachersPage}>
      <Filters
        languages={languages}
        levels={levels}
        prices={prices}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        setVisibleCount={setVisibleCount}
      />

      <ul className={css.teachersList}>
        {filteredTeachers.map((teacher) => (
          <li key={`${teacher.name}-${teacher.surname}`}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </ul>

      {teachers.length === visibleCount && (
        <LoadMoreButton onClick={() => setVisibleCount((prev) => prev + 4)} />
      )}
    </div>
  );
}
