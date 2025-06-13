/*window.addEventListener("scroll", function () {
    const button = document.getElementById("toTopBtn");
    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toTopBtn");
    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}); 
Trying to get the button to show while scrolling and not stay stagnent at the bottom of screen
*/




// List of essay pages in order
const blogPages = [
  "essay_1.html",
  "essay_2.html",
  "essay_3_reflection.html"
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


//Trying to create a radar with a trailing sweep. Tried with SVGs since we already have that going
const beamLayer = document.querySelector('.beam-layer');
const beamPath = "M50,50 L95,50 A45,45 0 0,1 50,5 Z";

let angle = 0;
const trailLength = 10;
const trail = [];

function animateSweep() {
  angle = (angle + 2) % 360;

  // Create new trail beam
  const beam = document.createElementNS("http://www.w3.org/2000/svg", "path");
  beam.setAttribute("d", beamPath);
  beam.setAttribute("fill", "rgba(0,255,255,0.2)");
  beam.setAttribute("transform", `rotate(${angle} 50 50)`);
  beamLayer.appendChild(beam);
  trail.push(beam);

  // Limit trail length
  if (trail.length > trailLength) {
    const oldBeam = trail.shift();
    beamLayer.removeChild(oldBeam);
  }

  // Fade older beams
  trail.forEach((b, i) => {
    const opacity = 0.2 * ((trailLength - i) / trailLength);
    b.setAttribute("fill", `rgba(0,255,255,${opacity})`);
  });

  requestAnimationFrame(animateSweep);
}

animateSweep();