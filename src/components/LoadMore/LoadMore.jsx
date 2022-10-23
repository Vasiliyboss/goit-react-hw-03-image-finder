import css from './LoadMore.module.css';

export const LoadMore = ({ onclick, children }) => {
  return (
    <button type="button" onClick={onclick} className={css.Button}>
      {children}
    </button>
  );
};
