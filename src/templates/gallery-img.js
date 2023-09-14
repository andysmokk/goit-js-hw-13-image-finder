"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryImgTpl = void 0;
function galleryImgTpl(images) {
    const template = images.map(img => `<li>
      <div class="photo-card">
        <img class="photo" src='${img.webformatURL}' alt='${img.tags}' data-source='${img.largeImageURL}'/>
        <div class="stats">
            <p class="stats-item">
                <i class="material-icons">thumb_up</i>
                ${img.likes}
            </p>
            <p class="stats-item">
                <i class="material-icons">visibility</i>
                ${img.views}
            </p>
            <p class="stats-item">
                <i class="material-icons">comment</i>
                ${img.comments}
            </p>
            <p class="stats-item">
                <i class="material-icons">cloud_download</i>
                ${img.downloads}
            </p>
        </div>
      </div>
   </li>`);
    return template.join('');
}
exports.galleryImgTpl = galleryImgTpl;
