import * as basicLightbox from 'basiclightbox';

export default function onModalImg(e) {
  const img = e.target.dataset.source;

  const modalImg = img.substring(0, img.length - 1);
  console.log('🚀 ~ file: modalImg.js:8 ~ onModalImg ~ modalImg:', modalImg);

  const currentImg = e.target.nodeName;

  if (currentImg === 'IMG') {
    const instance = basicLightbox.create(`<img src="${modalImg}">
`);
    instance.show();
  }
}
