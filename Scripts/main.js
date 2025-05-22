/*window.addEventListener("scroll", function () {
    const button = document.getElementById("toTopBtn");
    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("backToTop");
    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}); 
Code does not show visible throughout scrolling
*/

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toTopBtn");

    // Scroll listener after DOM is loaded
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    // Click scroll-to-top
    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


/*  // Get the button
  const toTopBtn = document.getElementById("toTopBtn");

  // Show the button when user scrolls down 200px
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  };

  // When the user clicks the button, scroll to the top smoothly
  toTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
*/

/*// List of blog pages in order
const blogPages = [
  "blog_week_1.html",
  "blog_week_2.html",
  "blog_week_3.html",
  "blog_week_4.html",
  "blog_week_5.html",
  "blog_week_6.html",
  "blog_week_7.html",
  "blog_week_9.html",
  "blog_week_10.html",
  "blog_week_11.html"
  // Add more as needed
];

// Get current page filename
const currentPage = window.location.pathname.split("/").pop();

// Find current index in the blogPages array
const currentIndex = blogPages.indexOf(currentPage);

// Get buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Enable/disable and set up navigation
if (prevBtn && currentIndex > 0) {
  prevBtn.onclick = () => {
    window.location.href = blogPages[currentIndex - 1];
  };
} else if (prevBtn) {
  prevBtn.disabled = true;
}

if (nextBtn && currentIndex < blogPages.length - 1) {
  nextBtn.onclick = () => {
    window.location.href = blogPages[currentIndex + 1];
  };
} else if (nextBtn) {
  nextBtn.disabled = true;
}
  */