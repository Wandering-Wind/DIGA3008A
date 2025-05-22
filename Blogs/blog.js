
// List of blog pages in order
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
  "blog_week_11.html",
  "blog_week_12.html",
  "blog_week_13.html"
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