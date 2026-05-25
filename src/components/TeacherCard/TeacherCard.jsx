import css from "./TeacherCard.module.css";
import { useState } from "react";
import { FiStar } from "react-icons/fi";

export default function TeacherCard({ teacher }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <img src={teacher.avatar_url} alt={teacher.name} />
      <ul>
        <p>Languages</p>
        <p>Lessons done: {teacher.lessons_done}</p>
        <p>Rating: {teacher.rating}</p>
        <p>Price/1 hour: {teacher.price_per_hour}$</p>
      </ul>

      <h2>
        {teacher.name} {teacher.surname}
      </h2>

      <p>Speaks: {teacher.languages}</p>

      <p>Lesson Info: {teacher.lesson_info}</p>
      <p>Conditions: {teacher.conditions}</p>
      {!showMore && (
        <button onClick={() => setShowMore(true)}>Read more</button>
      )}

      {showMore && (
        <>
          <p>{teacher.experience}</p>

          <ul>
            {teacher.reviews?.slice(0, 2).map((review, index) => (
              <li key={index}>
                <h4>{review.reviewer_name}</h4>

                <p>
                  <FiStar />
                  {review.reviewer_rating}
                </p>

                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </>
      )}

      <ul>
        {teacher.levels.map((level) => (
          <li key={level}>#{level}</li>
        ))}
      </ul>

      {showMore && (
        <>
          <button>Book trial lesson</button>
        </>
      )}
    </div>
  );
}
