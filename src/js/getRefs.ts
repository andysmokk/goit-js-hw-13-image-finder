export default function getRefs() {
  return {
    searchForm: document.querySelector<HTMLFormElement>('#search-form'),
    gallery: document.querySelector<HTMLDataListElement>('.gallery'),
    searchBtn: document.querySelector<HTMLButtonElement>('[data-action="search-btn"]'),
  };
}
