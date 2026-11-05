// Find the search box on the Product page.
var searchBox = document.getElementById("product-search");
var productCards = document.querySelectorAll(".product-card");
var resultMessage = document.getElementById("search-results");

function searchProducts() {
    var searchText = searchBox.value.toLowerCase();
    var count = 0;
    for (var i = 0; i < productCards.length; i++) {
        var productName = productCards[i].getAttribute("data-name").toLowerCase();
        if (productName.indexOf(searchText) !== -1) {
            productCards[i].style.display = "block";
            count++;
        } else {
            productCards[i].style.display = "none";
        }
    }
    resultMessage.textContent = count + " product(s) found.";
}
if (searchBox) {
    searchBox.addEventListener("input", searchProducts);
    searchProducts();
}

// Enquiry form: show a sample response after checking the fields.
var enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("fname").value.trim();
        var product = document.getElementById("enquiry-product").value;
        var answer = document.getElementById("enquiry-answer");
        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }
        answer.textContent = "Thank you, " + name + ". Your enquiry about " + product + " is ready. Please use the Google Form below to send it to Fresh Choice Dairy. Availability and prices must be confirmed by the business.";
    });
}

// Contact form: validate and prepare a message in the visitor's email app.
var contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }
        var name = document.getElementById("contact-name").value.trim();
        var email = document.getElementById("contact-email").value.trim();
        var type = document.getElementById("contact-type").value;
        var message = document.getElementById("contact-message").value.trim();
        var subject = encodeURIComponent("Fresh Choice Dairy - " + type);
        var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
        document.getElementById("contact-answer").textContent = "Your email application will open so you can review and send the message.";
        window.location.href = "mailto:aiden@fresh-choice.co.za?subject=" + subject + "&body=" + body;
    });
}
