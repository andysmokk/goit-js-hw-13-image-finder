import * as basicLightbox from 'basiclightbox';

export default function onModalImg(e) {
  const modalImg = e.target.dataset.source;
  const currentImg = e.target.nodeName;

  if (currentImg === 'IMG') {
    const instance = basicLightbox.create(`<img src="${modalImg}">
`);
    instance.show();
  }
}
