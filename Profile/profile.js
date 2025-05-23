 const scanner = document.getElementById("scanner-beam");

  function triggerScan() {
    scanner.style.opacity = "1";
    scanner.style.top = "-100px";
    scanner.style.transition = "none";

    setTimeout(() => {
      scanner.style.transition = "top 1s ease";
      scanner.style.top = "100%";
    }, 10);

    setTimeout(() => {
      scanner.style.opacity = "0";
      scanner.style.top = "-100px";
    }, 1100);
  }

  //Waiting for page to load
  document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card'); //select all skill-cards
    //loop through each card
    skillCards.forEach((card, i) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        //delaying each card animation
        setTimeout(() => {
            //animating the card back to visible and original place
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, i * 200);
    });
});

/* This would be cool but can't abuse js like that
  // Trigger scan on scroll (once per scroll event)
  let scrollTimer;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);
    triggerScan();
    scrollTimer = setTimeout(() => {}, 200); // debounce
  });
*/

  // Also trigger on initial load
  window.addEventListener("load", () => {
    triggerScan();
  });
