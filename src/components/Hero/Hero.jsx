import css from "./Hero.module.css";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className={css.hero}>
      <div className={css.content}>
        <div className={css.mainContent}>
          <h1 className={css.mainTitle}>
            Unlock your potential with the best{" "}
            <span className={css.cursor}> language </span> tutors
          </h1>
          <p className={css.subtitle}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <NavLink to="/teachers">
            <button className={css.startBtn}>Get started</button>
          </NavLink>
        </div>
        <img
          src="/Speakly/hero.jpg"
          srcSet="/Speakly/hero.jpg 1x, /Speakly/hero2x.jpg 2x"
          alt="Hero Image"
          className={css.mainImg}
        />
      </div>
      <ul className={css.features}>
        <li className={css.feature}>
          <p className={css.featureTitle}>32,000 +</p>
          <p className={css.featureDescription}>Experienced tutors</p>
        </li>
        <li className={css.feature}>
          <p className={css.featureTitle}>300,000 +</p>
          <p className={css.featureDescription}>5-star tutor reviews</p>
        </li>
        <li className={css.feature}>
          <p className={css.featureTitle}>120 +</p>
          <p className={css.featureDescription}>Subjects taught</p>
        </li>
        <li className={css.feature}>
          <p className={css.featureTitle}>200 +</p>
          <p className={css.featureDescription}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
