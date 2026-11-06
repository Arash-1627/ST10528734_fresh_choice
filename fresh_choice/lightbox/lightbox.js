// Simple lightbox: click a product image to view it larger.
var galleryImages = document.querySelectorAll(".gallery-image");
var lightbox = document.getElementById("lightbox");
var largeImage = document.getElementById("lightbox-image");
var imageCaption = document.getElementById("lightbox-caption");
var closeButton = document.getElementById("lightbox-close");

function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
}
if (lightbox) {
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener("click", function () {
            largeImage.src = this.src;
            largeImage.alt = this.alt;
            imageCaption.textContent = this.alt;
            lightbox.hidden = false;
            document.body.style.overflow = "hidden";
            closeButton.focus();
        });
        galleryImages[i].addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                this.click();
            }
        });
    }
    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
}
