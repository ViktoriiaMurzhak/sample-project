import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Photos } from '../../utils/types';
import css from './GalleryItem.module.css';

const Slider = ({ images }: { images: Photos[] }) => {
  const formattedImages = images.map(image => ({
    original: image.largeImageURL,
  }));

  return <ImageGallery items={formattedImages} additionalClass={css.bigImg} lazyLoad />;
};

export default Slider;
