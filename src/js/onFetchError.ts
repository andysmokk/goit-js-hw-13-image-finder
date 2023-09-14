import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function onFetchError() {
  error({
    text: 'Nothing found. Enter a new query!',
    delay: 2000,
  });
}
