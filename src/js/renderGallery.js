import getRefs from './getRefs';
import galleryImgTpl from '../templates/gallery-img.hbs';

const refs = getRefs();

function renderGalleryCard(nameImg) {
  refs.gallery.insertAdjacentHTML('beforeend', galleryImgTpl(nameImg));
}

function clearImgsGallery() {
  refs.gallery.innerHTML = '';
}

export { renderGalleryCard, clearImgsGallery };
