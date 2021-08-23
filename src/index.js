import ImgApiService from './js/apiService';
import BtnMore from './js/btnMore';
import getRefs from './js/getRefs';
import onFetchError from './js/onFetchError';
import { renderGalleryCard, clearImgsGallery } from './js/renderGallery';

const refs = getRefs();

export const btnMore = new BtnMore({
  selector: '[data-actiion="load-more"]',
  hidden: true,
});

const imgApiService = new ImgApiService();

refs.searchForm.addEventListener('submit', onSearchImg);
refs.searchBtn.addEventListener('submit', onBtnClickScroll);
btnMore.refs.button.addEventListener('click', fetchImgs);
btnMore.refs.button.addEventListener('click', onBtnClickScroll);

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
    })
    .catch(error => console.log(error));
}

function onBtnClickScroll() {
  setTimeout(() => {
    btnMore.refs.button.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 700);
}
