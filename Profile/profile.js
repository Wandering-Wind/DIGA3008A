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
