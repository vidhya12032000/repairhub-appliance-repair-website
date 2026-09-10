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


// Set theme icon
function setThemeIcon(iconName) {

    if (!themeIcon) return;

    const primaryPath = `assets/icons/${iconName}`;
    const fallbackPath = `../assets/icons/${iconName}`;

    themeIcon.src = primaryPath;

    // Fallback for pages inside /pages folder
    themeIcon.onerror = function () {
        themeIcon.src = fallbackPath;
        themeIcon.onerror = null;
    };
}


// Apply saved theme when page loads
if (savedTheme === "dark") {

    document.body.classList.add("dark");

    // Dark mode → Sun icon
    setThemeIcon("sun-svgrepo-com.svg");

} else {

    // Light mode → Moon icon
    setThemeIcon("moon-svgrepo-com.svg");
}


// Toggle dark / light mode
if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        if (isDark) {

            // Save dark mode
            localStorage.setItem("theme", "dark");

            // Show sun icon
            setThemeIcon("sun-svgrepo-com.svg");

        } else {

            // Save light mode
            localStorage.setItem("theme", "light");

            // Show moon icon
            setThemeIcon("moon-svgrepo-com.svg");
        }
    });
}


// ======================================
// RTL / LTR TOGGLE
// ======================================

const rtlBtn = document.getElementById("rtlBtn");


// Get saved direction
const savedDirection = localStorage.getItem("direction");


// Apply saved direction
if (savedDirection) {

    document.documentElement.dir = savedDirection;

} else {

    // Default direction
    document.documentElement.dir = "ltr";
}


// Update RTL button text
function updateRTLButton() {

    if (!rtlBtn) return;

    if (document.documentElement.dir === "rtl") {

        rtlBtn.textContent = "LTR";

    } else {

        rtlBtn.textContent = "RTL";
    }
}


// RTL / LTR button click
if (rtlBtn) {

    rtlBtn.addEventListener("click", function () {

        if (document.documentElement.dir === "rtl") {

            // RTL → LTR
            document.documentElement.dir = "ltr";

            localStorage.setItem("direction", "ltr");

        } else {

            // LTR → RTL
            document.documentElement.dir = "rtl";

            localStorage.setItem("direction", "rtl");
        }

        updateRTLButton();
    });
}


// Initial button state
updateRTLButton();


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

const categoryButtons = document.querySelectorAll(".category-btn");
const blogCards = document.querySelectorAll(".blog-card");


if (categoryButtons.length > 0 && blogCards.length > 0) {

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
}


// ======================================
// NEWSLETTER FORM
// ======================================

const newsletterForm =
    document.getElementById("newsletterForm");


if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const emailInput =
            document.getElementById("email");


        if (!emailInput) return;


        const email = emailInput.value.trim();


        // Check email
        if (!email) {

            alert("Please enter your email address.");

            return;
        }


        // Basic email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        // Success message
        alert(
            "Thank you! You have subscribed to RepairHub."
        );


        // Clear form
        newsletterForm.reset();
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


        // Get form fields
        const nameInput =
            document.getElementById("name");

        const emailInput =
            document.getElementById("email");

        const phoneInput =
            document.getElementById("phone");

        const serviceInput =
            document.getElementById("service");

        const dateInput =
            document.getElementById("date");

        const timeInput =
            document.getElementById("time");

        const messageInput =
            document.getElementById("message");


        // Make sure all elements exist
        if (
            !nameInput ||
            !emailInput ||
            !phoneInput ||
            !serviceInput ||
            !dateInput ||
            !timeInput ||
            !messageInput
        ) {

            return;
        }


        // Get values
        const name =
            nameInput.value.trim();

        const email =
            emailInput.value.trim();

        const phone =
            phoneInput.value.trim();

        const service =
            serviceInput.value;

        const date =
            dateInput.value;

        const time =
            timeInput.value;

        const message =
            messageInput.value.trim();


        // ==================================
        // VALIDATION
        // ==================================


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


        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        // Phone validation
        const phonePattern =
            /^[0-9]{10}$/;


        if (!phonePattern.test(phone)) {

            alert("Please enter a valid 10-digit phone number.");

            return;
        }


        // ==================================
        // SUCCESS
        // ==================================

        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted successfully."
        );


        // Reset form
        contactForm.reset();
    });
}