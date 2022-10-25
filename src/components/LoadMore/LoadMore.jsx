import css from './LoadMore.module.css';
import PropTypes from 'prop-types';

export const LoadMore = ({ onclick, children }) => {
  return (
    <button type="button" onClick={onclick} className={css.Button}>
      {children}
    </button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};
