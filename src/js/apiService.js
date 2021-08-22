export default class ApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchImg() {
    console.log(this);
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '23025169-5a1370e5bf826cff1ac1e8732';

    fetch(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=2&per_page=12&key=${KEY}`,
    ).then(response => response.json());
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
