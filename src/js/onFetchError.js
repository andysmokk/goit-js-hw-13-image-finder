import { error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

export default function onFetchError() {
  error({
    text: 'Ничего не найдено. Введите новый запрос!',
    delay: 2000,
  });
}
