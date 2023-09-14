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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = __importDefault(require("./js/apiService"));
const btnMore_1 = __importDefault(require("./js/btnMore"));
const getRefs_1 = __importDefault(require("./js/getRefs"));
const onFetchError_1 = __importDefault(require("./js/onFetchError"));
const renderGallery_1 = require("./js/renderGallery");
const modalImg_1 = __importDefault(require("./js/modalImg"));
// import { scroll } from './js/skrollUp';
const refs = (0, getRefs_1.default)();
const btnMore = new btnMore_1.default({
    selector: '[data-action="load-more"]',
    hidden: true,
});
const imgApiService = new apiService_1.default('', 0);
(_a = refs.searchForm) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', onSearchImg);
(_b = refs.searchBtn) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', onBtnClickScrollMore);
btnMore.refs.button.addEventListener('click', fetchGalleryImg);
btnMore.refs.button.addEventListener('click', onBtnClickScrollMore);
(_c = refs.gallery) === null || _c === void 0 ? void 0 : _c.addEventListener('click', modalImg_1.default);
function onSearchImg(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const inputElement = form.elements.namedItem('query');
    imgApiService.query = inputElement.value;
    if (imgApiService.query === '') {
        return (0, onFetchError_1.default)();
    }
    btnMore.show();
    imgApiService.resetPage();
    (0, renderGallery_1.clearImgsGallery)();
    fetchGalleryImg();
}
function fetchGalleryImg() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            btnMore.disable();
            const galleryImg = yield imgApiService.fetchImg();
            (0, renderGallery_1.renderGalleryCard)(galleryImg);
            btnMore.enable();
            if (galleryImg.length === 0) {
                (0, onFetchError_1.default)();
                btnMore.hide();
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
function onBtnClickScrollMore() {
    setTimeout(() => {
        btnMore.refs.button.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, 700);
}
