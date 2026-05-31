import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "./BookingModal.module.css";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

const modalRoot = document.getElementById("modal-root");

const schema = yup.object({
  reason: yup.string().required("Choose a reason"),
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});

export default function BookingModal({ teacher, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    toast.success("Booking submitted successfully!");

    reset();

    onClose();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          <IoClose />
        </button>

        <h2 className={css.modalTitle}>Book trial lesson</h2>

        <p className={css.modalText}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>

        <div className={css.teacherInfo}>
          <img
            className={css.teacherAvatar}
            src={teacher.avatar_url}
            alt={teacher.name}
          />

          <div>
            <p className={css.teacherTitle}>Your teacher</p>

            <p className={css.teacherName}>
              {teacher.name} {teacher.surname}
            </p>
          </div>
        </div>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <h3 className={css.formTitle}>
            What is your main reason for learning English?
          </h3>

          <div className={css.reasonGroup}>
            <label className={css.radioLabel}>
              <input
                className={css.radioInput}
                type="radio"
                value="Career and business"
                {...register("reason")}
              />
              Career and business
            </label>

            <label className={css.radioLabel}>
              <input
                className={css.radioInput}
                type="radio"
                value="Lesson for kids"
                {...register("reason")}
              />
              Lesson for kids
            </label>

            <label className={css.radioLabel}>
              <input
                className={css.radioInput}
                type="radio"
                value="Living abroad"
                {...register("reason")}
              />
              Living abroad
            </label>

            <label className={css.radioLabel}>
              <input
                className={css.radioInput}
                type="radio"
                value="Exams and coursework"
                {...register("reason")}
              />
              Exams and coursework
            </label>

            <label className={css.radioLabel}>
              <input
                className={css.radioInput}
                type="radio"
                value="Culture, travel or hobby"
                {...register("reason")}
              />
              Culture, travel or hobby
            </label>
            <p>{errors.reason?.message}</p>
          </div>

          <div className={css.inputsGroup}>
            <input
              className={css.textInput}
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
            />
            <p>{errors.fullName?.message}</p>

            <input
              className={css.textInput}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <input
              className={css.textInput}
              type="tel"
              placeholder="Phone number"
              {...register("phone")}
            />
            <p>{errors.phone?.message}</p>
          </div>

          <button className={css.bookBtn} type="submit">
            Book
          </button>
        </form>
      </div>
    </div>,
    modalRoot,
  );
}
