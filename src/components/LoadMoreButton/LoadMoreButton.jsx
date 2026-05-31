import css from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ onClick }) {
  return (
    <button className={css.loadBtn} onClick={onClick}>
      Load More
    </button>
  );
}
