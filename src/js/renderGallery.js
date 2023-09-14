"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearImgsGallery = exports.renderGalleryCard = void 0;
const getRefs_1 = __importDefault(require("./getRefs"));
const gallery_img_1 = require("../templates/gallery-img");
const refs = (0, getRefs_1.default)();
function renderGalleryCard(images) {
    if (refs.gallery) {
        refs.gallery.insertAdjacentHTML('beforeend', (0, gallery_img_1.galleryImgTpl)(images));
    }
}
exports.renderGalleryCard = renderGalleryCard;
function clearImgsGallery() {
    if (refs.gallery) {
        refs.gallery.innerHTML = '';
    }
}
exports.clearImgsGallery = clearImgsGallery;
