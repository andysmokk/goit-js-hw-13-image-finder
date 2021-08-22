// import fetchImg from './js/apiService';
// import getRefs from './js/getRefs';
// import onSerchImg from './js/searchImg';

// const refs = getRefs();

// console.log(refs.searchForm);

import galleryImgTpl from './templates/gallery-img.hbs';
import ImgApiService from './js/apiService';

function getRefs() {
  return {
    body: document.querySelector('body'),
    searchForm: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    btnMore: document.querySelector('[data-actiion="load-more"]'),
    searchBtn: document.querySelector('.search-button'),
  };
}

const refs = getRefs();

console.log(refs.btnMore);

const imgApiService = new ImgApiService();

refs.searchForm.addEventListener('submit', onSearchImg);
refs.btnMore.addEventListener('click', onBtnMore);
refs.btnMore.addEventListener('click', onBtnClickScroll);

function onSearchImg(e) {
  e.preventDefault();

  clearImgsGallery();

  imgApiService.query = e.currentTarget.elements.query.value;
  imgApiService.resetPage();
  imgApiService.fetchImg().then(renderGalleryCard);
}

function onBtnMore() {
  imgApiService.fetchImg().then(renderGalleryCard);
}

function renderGalleryCard(nameImg) {
  refs.gallery.insertAdjacentHTML('beforeend', galleryImgTpl(nameImg));
}

function clearImgsGallery() {
  refs.gallery.innerHTML = '';
}

function onBtnClickScroll() {
  setTimeout(() => {
    refs.btnMore.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, 800);
}
