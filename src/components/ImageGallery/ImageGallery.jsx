import { ImageGalleryItems } from 'components/ImageGalleryItems/ImageGalleryItems';
import css from './ImageGallery.module.css';
export const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {items.map(item => (
        <li key={item.id} className={css.ImageGalleryItem}>
          <ImageGalleryItems image={item} open={openModal} />
        </li>
      ))}
    </ul>
  );
};
