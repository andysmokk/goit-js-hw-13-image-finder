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
  };
}

const refs = getRefs();

const imgApiService = new ImgApiService();

refs.searchForm.addEventListener('submit', onSerchImg);
refs.btnMore.addEventListener('click', onBtnMore);

function onBtnMore(e) {
  imgApiService.fetchImg();
}

function onSerchImg(e) {
  e.preventDefault();

  //   const form = e.currentTarget;
  //   const searchQuery = form.elements.query.value;

  //   imgApiService
  //     .fetchImg(searchQuery)
  //     .then(renderGalleryCard)
  //     .catch(error => console.log(error))
  //     .finally(() => form.reset());

  imgApiService.query = e.currentTarget.elements.query.value;
  imgApiService.fetchImg();
}

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '23025169-5a1370e5bf826cff1ac1e8732';

// function fetchImgByName(searchImg) {
//   return fetch(
//     `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchImg}&page=2&per_page=12&key=${KEY}`,
//   ).then(response => response.json());
// }

function renderGalleryCard(nameImg) {
  const markupCardImg = galleryImgTpl(nameImg.hits);
  refs.gallery.innerHTML = markupCardImg;
}
