import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListEl = document.querySelector(".gallery");
galleryListEl.setAttribute("uk-lightbox", "caption-position:bottom");

galleryListEl.addEventListener("click", galleryListEl);
function createGalleryElement(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    titlePosition = "${top}"
                />
                </a>`;
    })
    .join("");
}

const galleryElements = createGalleryElement(galleryItems);
galleryListEl.insertAdjacentHTML("beforeend", galleryElements);

const gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});
