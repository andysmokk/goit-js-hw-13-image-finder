// import fetchImg from './js/apiService';
// import getRefs from './js/getRefs';
// import onSerchImg from './js/searchImg';

// const refs = getRefs();

// console.log(refs.searchForm);

import galleryImgTpl from './templates/gallery-img.hbs';
import ImgApiService from './js/apiService';
import BtnMore from './js/btnMore';

function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    searchBtn: document.querySelector('[data-actiion="search-btn"]'),
  };
}

const refs = getRefs();

const btnMore = new BtnMore({
  selector: '[data-actiion="load-more"]',
  hidden: true,
});

const imgApiService = new ImgApiService();

refs.searchForm.addEventListener('submit', onSearchImg);
refs.searchBtn.addEventListener('submit', onBtnClickScroll);
btnMore.refs.button.addEventListener('click', onBtnMore);
btnMore.refs.button.addEventListener('click', onBtnClickScroll);

function onSearchImg(e) {
  e.preventDefault();

  clearImgsGallery();

  btnMore.show();
  imgApiService.resetPage();
  btnMore.disable();

  imgApiService.query = e.currentTarget.elements.query.value;

  btnMore.disable();
  imgApiService
    .fetchImg()
    .then(imgs => {
      renderGalleryCard(imgs);
      btnMore.enable();
    })
    .catch(error => console.log(error));
}

function onBtnMore() {
  btnMore.disable();
  imgApiService
    .fetchImg()
    .then(imgs => {
      renderGalleryCard(imgs);
      btnMore.enable();
    })
    .catch(error => console.log(error));
}

function renderGalleryCard(nameImg) {
  refs.gallery.insertAdjacentHTML('beforeend', galleryImgTpl(nameImg));
}

function clearImgsGallery() {
  refs.gallery.innerHTML = '';
}

function onBtnClickScroll() {
  setTimeout(() => {
    btnMore.refs.button.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 800);
}

function onFetchError() {
  const markupError = `<h1>Enter the correct country name</h1>`;
  refs.cardContainer.innerHTML = markupError;
}
