import * as basicLightbox from 'basiclightbox';

export default function onModalImg(e: Event) {
  const target = e.target as HTMLElement;
  const url = target.dataset.source;
  const currentImg = target.nodeName;

  if (currentImg === 'IMG') {
    const instance = basicLightbox.create(`<img src="${url}">
`);
    instance.show();
  }
}
