// JavaScript to toggle image gallery visibility when "View Images" link is clicked
const viewImagesLinks = document.querySelectorAll('.view-images-link');

viewImagesLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const gallery = link.nextElementSibling; // Get the next element, which is the image gallery

        if (gallery) {
            // Toggle the visibility of the gallery
            if (gallery.style.display === 'block' || gallery.style.display === '') {
                gallery.style.display = 'none';
            } else {
                gallery.style.display = 'block';
            }
        }
    });
});
