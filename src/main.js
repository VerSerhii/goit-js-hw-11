
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const loader = document.querySelector('#loader');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  loader.classList.remove('hidden');
  clearGallery();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits.length) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({ message: 'Something went wrong. Please try again later.' });
  } finally {
    loader.classList.add('hidden');
  }
});
