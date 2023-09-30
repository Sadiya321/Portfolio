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



// Get the elements by their IDs
var phoneNumber = document.getElementById("phone-number");
var showPhoneLink = document.getElementById("show-phone");

// Add a click event listener to the "Show" link
showPhoneLink.addEventListener("click", function(event) {
    event.preventDefault();

    // Toggle the visibility of the phone number by adding/removing the "hidden" class
    if (phoneNumber.classList.contains("hidden")) {
        phoneNumber.classList.remove("hidden"); // Display the phone number
        showPhoneLink.textContent = "Hide"; // Update the link text
    } else {
        phoneNumber.classList.add("hidden"); // Hide the phone number
        showPhoneLink.textContent = "Show"; // Update the link text
    }
});
