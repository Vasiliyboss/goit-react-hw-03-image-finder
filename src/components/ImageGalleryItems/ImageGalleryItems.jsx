import css from './ImageGalleryItems.module.css';
const ImageGalleryItems = ({ image }) => {
  return (
    <img
      className={css.ImageGalleryItemImage}
      src={image.webformatURL}
      alt={image.tags}
    />
  );
};

export default ImageGalleryItems;
