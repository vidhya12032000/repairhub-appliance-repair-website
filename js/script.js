// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}


// ======================================
// DARK / LIGHT MODE
// ======================================

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("theme");

// Apply saved theme when page loads
if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeIcon) {
        themeIcon.src = "../assets/icons/contrast.png";
    }

} else {

    if (themeIcon) {
        themeIcon.src = "../assets/icons/moon.png";
    }

}


// Toggle theme
if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            // Dark mode
            localStorage.setItem("theme", "dark");

            if (themeIcon) {
                themeIcon.src = "../assets/icons/contrast.png";
            }

        } else {

            // Light mode
            localStorage.setItem("theme", "light");

            if (themeIcon) {
                themeIcon.src = "../assets/icons/moon.png";
            }

        }

    });

}


// ======================================
// CLOSE MOBILE MENU
// ======================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

    });

});


// ======================================
// BLOG CATEGORY FILTER
// ======================================

const categoryButtons =
    document.querySelectorAll(".category-btn");

const blogCards =
    document.querySelectorAll(".blog-card");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons
        categoryButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Get selected category
        const selectedCategory =
            button.getAttribute("data-category");


        // Filter blog cards
        blogCards.forEach(function (card) {

            const cardCategory =
                card.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ======================================
// NEWSLETTER
// ======================================

const newsletterForm =
    document.getElementById("newsletterForm");


if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();


        if (email) {

            alert(
                "Thank you! You have subscribed to RepairHub."
            );

            newsletterForm.reset();

        }

    });

}


// ======================================
// CONTACT FORM
// ======================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const message =
            document.getElementById("message").value.trim();


        // Check empty fields
        if (
            !name ||
            !email ||
            !phone ||
            !service ||
            !date ||
            !time ||
            !message
        ) {

            alert("Please fill in all the fields.");

            return;
        }


        // Check phone number
        if (phone.length < 10) {

            alert("Please enter a valid phone number.");

            return;
        }


        // Success message
        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted successfully."
        );


        contactForm.reset();

    });

}