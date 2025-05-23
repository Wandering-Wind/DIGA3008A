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

//toTopBtn
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

//Tried to make a glow cursor
document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
  document.body.style.setProperty('--transform', `translate(${e.clientX}px, ${e.clientY}px)`);
});


//Tried to have the heading of everypage type out then erase, then repeat loop
//Does not work
 document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1.typewriter");
    if (!heading) return;

    const fullText = heading.textContent;
    let currentIndex = 0;
    let isDeleting = false;

    function animateText() {
      const visibleText = fullText.substring(0, currentIndex);
      heading.textContent = visibleText;

      if (!isDeleting && currentIndex < fullText.length) {
        currentIndex++;
        setTimeout(animateText, 100);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setTimeout(animateText, 50);
      } else {
        isDeleting = !isDeleting;
        setTimeout(animateText, isDeleting ? 1200 : 1000);
      }
    }

    animateText();
  });

//Read More button attempt
//Play on Itch button
document.addEventListener('DOMContentLoaded', () => {
  const itchLinks = document.querySelectorAll('.readmore-btn');

  itchLinks.forEach(link => {
    link.style.display = 'inline-block';
    link.style.padding = '12px 24px';
    link.style.margin = '10px 0';
    link.style.fontSize = '16px';
    link.style.background = 'linear-gradient(135deg, #02abb7, #0047ff)';
    link.style.color = '#fff';
    link.style.border = '2px solid #0ff';
    link.style.borderRadius = '8px';
    link.style.textTransform = 'uppercase';
    link.style.letterSpacing = '1px';
    link.style.boxShadow = '0 0 12px #0ff, 0 0 20px #0ff inset';
    link.style.transition = 'all 0.3s ease';
    link.style.textDecoration = 'none';
    link.style.fontFamily = '"Share Tech Mono", monospace';

    // Optional hover effect
    link.addEventListener('mouseover', () => {
      link.style.background = '#000';
      link.style.color = '#fff';
      link.style.boxShadow = '0 0 15px #0ff, 0 0 30px #0ff inset';
    });

    link.addEventListener('mouseout', () => {
      link.style.background = 'linear-gradient(135deg, #02abb7, #0047ff)';
      link.style.color = '#fff';
      link.style.boxShadow = '0 0 12px #0ff, 0 0 20px #0ff inset';
    });
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