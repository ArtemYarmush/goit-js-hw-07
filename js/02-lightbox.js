import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector(".gallery");
galleryListEl.setAttribute('uk-lightbox', 'caption-position:bottom');

galleryListEl.addEventListener('click', onGalleryListElClick);

function createGalleryElement(array) {
    
   return array.map(({ preview, original, description }) => {
        const item = document.createElement('a');
        
        item.href = original;
       item.classList.add('gallery__item');
       item.dataset.caption = description;
        const image = document.createElement('img');
        image.src = preview;
        image.classList.add('gallery__image');
       image.alt = description;
       image.title = description;
       image.delay = 250;
       image.titlePosition = 'top';
        item.append(image);
        
       return item;
    })
   
}

const galleryElements = createGalleryElement(galleryItems);
galleryListEl.append(...galleryElements);


function onGalleryListElClick(event) {
  
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return
    };
    

    let href = (event.target.closest('a').getAttribute('href'));
    return href;
 
}
let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
});

gallery.on('error.simplelightbox', function (event) {
});



