
// List of game analysis pages in order
const blogPages = [
  "game_analysis_1.html",
  "game_analysis_2.html",
  "game_analysis_3.html"
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

//API Section, hopefully this works
//So this doesn't work because I'm getting an error whereby the API requires a proxy due to CORS
/*document.addEventListener('DOMContentLoaded', () => {
    const newGameBtn = document.getElementById('new-game-btn');
    const gameCard = document.getElementById('game-card');

    async function getRandomGame() {
        try {
            const response = await fetch('https://www.freetogame.com/api/games');
            console.log('Response:', response.status, response.statusText);

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const games = await response.json();
            const randomIndex = Math.floor(Math.random() * games.length);
            const game = games[randomIndex];

            gameCard.innerHTML = `
                <h3>${game.title}</h3>
                <p><strong>Genre:</strong> ${game.genre}</p>
                <p><strong>Platform:</strong> ${game.platform}</p>
                <a href="${game.game_url}" target="_blank">🔗 Play Now</a>
                <img src="${game.thumbnail}" alt="Thumbnail of ${game.title}">
            `;
        } catch (error) {
            console.error('Fetch error:', error);
            gameCard.innerHTML = `<p>Could not load game data. Check console for details.</p>`;
        }
    }

    newGameBtn.addEventListener('click', getRandomGame);
    getRandomGame();
});*/

//The usual of waiting for the html document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const newGameBtn = document.getElementById('new-game-btn'); //getting the button
    const gameCard = document.getElementById('game-card');

    const API_KEY = '6f2d429c52d0421c849d7b80eccebe03';     //Personal API_Key

    //writing the function to fetch and display a random game
    async function getRandomGame() {
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);//making the request to the api to get a list of games
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); // check if the response is okay

            const data = await response.json();
            const games = data.results; //get the list, extraction stuff
            const randomIndex = Math.floor(Math.random() * games.length);
            const game = games[randomIndex]; //pick random from the array

            //display selected game's said details
            gameCard.innerHTML = ` 
                <h3>${game.name}</h3>
                <p><strong>Released:</strong> ${game.released}</p>
                <p><strong>Rating:</strong> ${game.rating} / 5</p>
                <a href="${game.website || '#'}" target="_blank">🔗 Official Website</a>
                <img src="${game.background_image}" alt="Screenshot of ${game.name}">
            `;
        } catch (error) {
            console.error('Fetch error:', error); //display error message if something goes wrong
            gameCard.innerHTML = `<p>Could not load game data. Check console for details.</p>`;
        }
    }

    newGameBtn.addEventListener('click', getRandomGame);
    getRandomGame(); //try and load a game when the page loads
});

//Play on Itch button //Hardcoding CSS
/*document.addEventListener('DOMContentLoaded', () => {
  const itchLinks = document.querySelectorAll('.itch-btn');

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
*/