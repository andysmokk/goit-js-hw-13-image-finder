import ImgApiService from './js/apiService';
import BtnMore from './js/btnMore';
import getRefs from './js/getRefs';
import onFetchError from './js/onFetchError';
import { renderGalleryCard, clearImgsGallery } from './js/renderGallery';
import onModalImg from './js/modalImg';
import * as scroll from './js/skrollUp';

const refs = getRefs();

const btnMore = new BtnMore({
  selector: '[data-actiion="load-more"]',
  hidden: true,
});

const imgApiService = new ImgApiService();

refs.searchForm.addEventListener('submit', onSearchImg);
refs.searchBtn.addEventListener('submit', onBtnClickScrollMore);
btnMore.refs.button.addEventListener('click', fetchImgs);
btnMore.refs.button.addEventListener('click', onBtnClickScrollMore);
refs.gallery.addEventListener('click', onModalImg);

function onSearchImg(e) {
  e.preventDefault();

  imgApiService.query = e.currentTarget.elements.query.value;

  if (imgApiService.query === '') {
    return onFetchError();
  }

  btnMore.show();
  imgApiService.resetPage();
  clearImgsGallery();

  fetchImgs();
}

function fetchImgs() {
  btnMore.disable();

  imgApiService
    .fetchImg()
    .then(imgs => {
      renderGalleryCard(imgs);
      btnMore.enable();

      if (imgs.length === 0) {
        onFetchError();
        btnMore.hide();
      }
    })
    .catch(error => console.log(error));
}

function onBtnClickScrollMore() {
  setTimeout(() => {
    btnMore.refs.button.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 700);
}
