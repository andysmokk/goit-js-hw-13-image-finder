"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23025169-5a1370e5bf826cff1ac1e8732';
class ApiService {
    constructor(searchQuery, page) {
        this.searchQuery = '';
        this.page = 1;
        this.searchQuery = searchQuery;
        this.page = page;
    }
    fetchImg() {
        return __awaiter(this, void 0, void 0, function* () {
            // const response = await fetch(
            //   `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
            // );
            // const dataResponse = await response.json();
            // const images = dataResponse.hits;
            // this.incrementPage();
            // return images;
            try {
                const response = yield fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const dataResponse = yield response.json();
                const images = dataResponse.hits;
                this.incrementPage();
                return images;
            }
            catch (error) {
                throw new Error('Error fetching data: ' + error.message);
            }
        });
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
exports.default = ApiService;
