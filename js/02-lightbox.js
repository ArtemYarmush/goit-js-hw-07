import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryListEl = document.querySelector(".gallery");
galleryListEl.setAttribute("uk-lightbox", "caption-position:bottom");

galleryListEl.addEventListener("click", onGalleryListElClick);

// function createGalleryElement(array) {
//   return array.map(({ preview, original, description }) => {
//     const item = document.createElement("a");

//     item.href = original;
//     item.classList.add("gallery__item");
//     //item.dataset.caption = description;
//     const image = document.createElement("img");
//     image.src = preview;
//     image.classList.add("gallery__image");
//     image.alt = description;
//     image.title = description;
//     //image.delay = 250;
//     image.titlePosition = "top";
//     item.append(image);

//     return item;
//   });
// }

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
galleryListEl.insertAdjacentHTML("beforeend", ...galleryElements);

function onGalleryListElClick(event) {}

const gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});
