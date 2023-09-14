const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23025169-5a1370e5bf826cff1ac1e8732';

export default class ApiService {
  searchQuery: string = '';
  page: number = 1;

  constructor(searchQuery: string, page: number) {
    this.searchQuery = searchQuery;
    this.page = page;
  }

  async fetchImg() {
    try {
      const response = await fetch(
        `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const dataResponse = await response.json();
      const images = dataResponse.hits;
      this.incrementPage();
      return images;
    } catch (error: any) {
      throw new Error('Error fetching data: ' + error.message);
    }
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

  set query(newQuery: string) {
    this.searchQuery = newQuery;
  }
}
