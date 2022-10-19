import css from './ImageGalleryItems.module.css';
const ImageGalleryItems = ({ image, open }) => {
  return (
    <img
      className={css.ImageGalleryItemImage}
      src={image.webformatURL}
      alt={image.tags}
      onClick={() => open(image.largeImageURL)}
    />
  );
};

export default ImageGalleryItems;
