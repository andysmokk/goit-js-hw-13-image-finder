import getRefs from './getRefs';
import { galleryImgTpl } from '../templates/gallery-img';
import { ImageData } from '../templates/gallery-img';

const refs = getRefs();

function renderGalleryCard(images: ImageData[]) {
  if (refs.gallery) {
    refs.gallery.insertAdjacentHTML('beforeend', galleryImgTpl(images));
  }
}

function clearImgsGallery() {
  if (refs.gallery) {
    refs.gallery.innerHTML = '';
  }
}

export { renderGalleryCard, clearImgsGallery };
