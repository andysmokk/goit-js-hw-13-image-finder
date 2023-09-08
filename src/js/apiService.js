const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23025169-5a1370e5bf826cff1ac1e8732';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImg() {
    const response = await fetch(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    );
    const dataResponse = await response.json();
    const imgs = await dataResponse.hits;
    console.log('🚀 ~ file: apiService.js:16 ~ ApiService ~ fetchImg ~ imgs:', imgs);
    this.incrementPage();
    return imgs;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
