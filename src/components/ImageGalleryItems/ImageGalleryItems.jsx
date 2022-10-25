import css from './ImageGalleryItems.module.css';
import PropTypes from 'prop-types';
import { func } from 'prop-types';
export const ImageGalleryItems = ({ image, open }) => {
  return (
    <img
      className={css.ImageGalleryItemImage}
      src={image.webformatURL}
      alt={image.tags}
      onClick={() => open(image.largeImageURL)}
    />
  );
};

ImageGalleryItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ image: PropTypes.image })),
  open: func.isRequired,
};
