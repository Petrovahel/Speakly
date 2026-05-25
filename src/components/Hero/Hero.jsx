import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>
        Unlock your potential with the best <span> language </span> tutors
      </h1>
      <p className={css.subtitle}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button className={css.cta}>Get started</button>
      <img
        src="/images/hero-image.jpg"
        alt="Hero Image"
        className={css.image}
      />
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
