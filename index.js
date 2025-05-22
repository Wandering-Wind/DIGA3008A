
  const lines = [
    "Initializing system core...",
    "Loading interface protocols...",
    "Uplink secure.",
    "Welcome User."
  ]; //Lines that is gonna show

  const target = document.getElementById("boot-text"); //Get the dom element
  let lineIndex = 0; //tracking which line and character we're currently typing
  let charIndex = 0;

  //function to type out a character at a time to get that computer J.A.R.V.I.S effect
  function typeLine() {
    if (lineIndex < lines.length) {
      const line = lines[lineIndex];
      if (charIndex < line.length) {
        target.innerHTML += line.charAt(charIndex); //current line to type
        charIndex++;
        setTimeout(typeLine, 40); // speed per character so waiting 40s before types the next character
      } else {
        target.innerHTML += "<br/>"; //end of the line
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, 500); // delay between lines
      }
    } else {
      setTimeout(() => {
        document.getElementById("boot-sequence").classList.add("fade-out");
      }, 1000); // Delay before fading
    }
  }
  //start typing as the page loads
  window.addEventListener("load", () => {
    typeLine();
  });
