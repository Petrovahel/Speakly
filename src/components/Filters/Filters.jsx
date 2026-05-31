import css from "./Filters.module.css";

export default function Filters({
  languages,
  levels,
  prices,
  selectedLanguage,
  setSelectedLanguage,
  selectedLevel,
  setSelectedLevel,
  selectedPrice,
  setSelectedPrice,
  setVisibleCount,
}) {
  return (
    <div className={css.filters}>
      <div className={css.filtersItem}>
        <p className={css.filtersItemTitle}>Languages</p>
        <select
          className={css.filtersSelect}
          value={selectedLanguage}
          onChange={(e) => {
            setSelectedLanguage(e.target.value);
            setVisibleCount(4);
          }}
        >
          <option value="">Languages</option>

          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      <div className={css.filtersItem}>
        <p className={css.filtersItemTitle}>Level of knowledge</p>
        <select
          className={css.filtersSelect}
          value={selectedLevel}
          onChange={(e) => {
            setSelectedLevel(e.target.value);
            setVisibleCount(4);
          }}
        >
          <option value="">Level</option>

          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className={css.filtersItem}>
        <p className={css.filtersItemTitle}>Price</p>
        <select
          className={css.filtersSelect}
          value={selectedPrice}
          onChange={(e) => {
            setSelectedPrice(e.target.value);
            setVisibleCount(4);
          }}
        >
          <option value="">Price</option>

          {prices.map((price) => (
            <option key={price} value={price}>
              {price}$
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
