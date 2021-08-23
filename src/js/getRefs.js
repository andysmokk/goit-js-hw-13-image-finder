export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    searchBtn: document.querySelector('[data-actiion="search-btn"]'),
  };
}
