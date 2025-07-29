
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images.map(img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" class="gallery-img" />
      </a>
      <div class="info">
        <p class="info-descr">  <b>Likes:</b> ${img.likes}</p>
        <p class="info-descr"> <b>Views:</b> ${img.views}</p>
        <p class="info-descr">  <b>Comments:</b> ${img.comments}</p>
        <p class="info-descr"> <b>Downloads:</b> ${img.downloads}</p>
      </div>
    </li>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('visible');
}

export function hideLoader() {
  loader.classList.remove('visible');
}
