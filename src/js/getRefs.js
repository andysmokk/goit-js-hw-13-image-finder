"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRefs() {
    return {
        searchForm: document.querySelector('#search-form'),
        gallery: document.querySelector('.gallery'),
        searchBtn: document.querySelector('[data-action="search-btn"]'),
    };
}
exports.default = getRefs;
