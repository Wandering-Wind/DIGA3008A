
// List of designs pages in order
const blogPages = [
  "design_week_5.html",
  "design_week_6.html",
  "designs_web_style_group_project.html",
  "designs_wireframe.html"
];

// Get current page filename
const currentPage = window.location.pathname.split("/").pop();

// Find current index in the blogPages array
const currentIndex = blogPages.indexOf(currentPage);

// Get buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function transitionToPage(targetURL) {
    const overlay = document.getElementById("transitionOverlay");
    overlay.classList.add("active");

    // Delay navigation until fade-out finishes ( The delay before the page actually loads)
    setTimeout(() => {
        window.location.href = targetURL; //this is suppose to work with window.location.href
    }, 1500); // Match CSS transition duration
}

// Enable/disable and set up navigation
/*
if (prevBtn && currentIndex > 0) {
  prevBtn.onclick = () => {
    transitionToPage(blogPages[currentIndex - 1]);  //window.location.href = blogPages[currentIndex - 1];
  };
} else if (prevBtn) {
  prevBtn.disabled = true;
}

if (nextBtn && currentIndex < blogPages.length - 1) {
  nextBtn.onclick = () => {
    transitionToPage(blogPages[currentIndex + 1]);  //window.location.href = blogPages[currentIndex + 1];
  };
} else if (nextBtn) {
  nextBtn.disabled = true;
}
  */

if (prevBtn && currentIndex > 0) {
  prevBtn.addEventListener('click', () => {
    transitionToPage(blogPages[currentIndex - 1]);
  });
} else if (prevBtn) {
  prevBtn.disabled = true;
}

if (nextBtn && currentIndex < blogPages.length - 1) {
  nextBtn.addEventListener('click', () => {
    transitionToPage(blogPages[currentIndex + 1]);
  });
} else if (nextBtn) {
  nextBtn.disabled = true;
}


//trying to delay the overlay removal on the newly loaded page
window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("transitionOverlay");
  if (overlay) {
    setTimeout(() => overlay.classList.remove("active"), 900); // Or 1000ms for longer
  }
});