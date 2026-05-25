import { useEffect, useState } from "react";
import TeacherCard from "../components/TeacherCard/TeacherCard";
import { getTeachers } from "../services/teachersApi";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await getTeachers();
      setTeachers(data);
    };

    fetchTeachers();
  }, []);

  return (
    <div>
      {teachers.slice(0, visibleCount).map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
      <button onClick={() => setVisibleCount((prev) => prev + 3)}>
        Load More
      </button>
    </div>
  );
}
