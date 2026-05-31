import css from "./TeacherCard.module.css";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { getFavorites, toggleFavorite } from "../../services/favoritesApi";
import BookingModal from "../BookingModal/BookingModal";
import toast from "react-hot-toast";

export default function TeacherCard({ teacher }) {
  const [showMore, setShowMore] = useState(false);
  const { user } = useAuth();

  const teacherId = `${teacher.name}-${teacher.surname}`;

  const favorites = user ? getFavorites(user.uid) : [];

  const [isFavorite, setIsFavorite] = useState(favorites.includes(teacherId));

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleFavorite = () => {
    if (!user) {
      toast.error("This feature is available only for authorized users");
      return;
    }

    toggleFavorite(user.uid, teacherId);

    if (isFavorite) {
      toast.success("Teacher removed from favorites");
    } else {
      toast.success("Teacher added to favorites");
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className={css.card}>
      <img className={css.avatar} src={teacher.avatar_url} alt={teacher.name} />
      <div className={css.info}>
        <div className={css.header}>
          <p className={css.head}>Languages</p>
          <ul className={css.stats}>
            <p className={css.stat}>Lessons online</p>
            <p className={css.stat}>Lessons done: {teacher.lessons_done}</p>
            <p className={css.stat}>
              <FiStar className={css.star} /> Rating: {teacher.rating}
            </p>
            <p className={css.stat}>
              Price/1 hour:{" "}
              <span className={css.price}>${teacher.price_per_hour}</span>
            </p>
          </ul>
          <button onClick={handleFavorite}>
            {isFavorite ? <FaHeart color="red" /> : <FiHeart />}
          </button>
        </div>

        <h2 className={css.name}>
          {teacher.name} {teacher.surname}
        </h2>

        <div className={css.descriptions}>
          <p className={css.descriotion}>
            <span className={css.head}>Speaks:</span> {teacher.languages}
          </p>

          <p className={css.descriotion}>
            <span className={css.head}>Lesson Info:</span> {teacher.lesson_info}
          </p>
          <p className={css.descriotion}>
            <span className={css.head}>Conditions:</span> {teacher.conditions}
          </p>
          {!showMore && (
            <button className={css.readMore} onClick={() => setShowMore(true)}>
              Read more
            </button>
          )}
        </div>

        {showMore && (
          <>
            <p className={css.experience}>{teacher.experience}</p>

            <ul className={css.reviews}>
              {teacher.reviews?.slice(0, 2).map((review, index) => (
                <li className={css.review} key={index}>
                  <h4>{review.reviewer_name}</h4>

                  <p>
                    <FiStar className={css.star} />
                    {review.reviewer_rating}
                  </p>

                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        <ul className={css.levels}>
          {teacher.levels.map((level) => (
            <li className={css.level} key={level}>
              #{level}
            </li>
          ))}
        </ul>

        {showMore && (
          <>
            <button
              className={css.bookButton}
              onClick={() => setIsBookingOpen(true)}
            >
              Book trial lesson
            </button>{" "}
            {isBookingOpen && (
              <BookingModal
                teacher={teacher}
                onClose={() => setIsBookingOpen(false)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
