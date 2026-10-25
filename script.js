const games = [
  {
    title: "Neon Drift",
    genre: "Racing",
    icon: "🏎️",
    badge: "Hot",
    rating: 4.9,
    players: "1-2",
    difficulty: "Medium",
    description: "Blast through glowing city circuits in a high-speed arcade racer built for perfect drift lines.",
    gradient: "linear-gradient(135deg, #7c5cff 0%, #4fc3ff 100%)"
  },
  {
    title: "Pixel Punks",
    genre: "Action",
    icon: "👾",
    badge: "Arena",
    rating: 4.8,
    players: "1-4",
    difficulty: "Hard",
    description: "Melt enemy waves with over-the-top specials and endless combo chaining in a retro arena brawler.",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #f7a72d 100%)"
  },
  {
    title: "Orbital Quest",
    genre: "Adventure",
    icon: "🚀",
    badge: "New",
    rating: 4.7,
    players: "1",
    difficulty: "Medium",
    description: "Explore a handcrafted galaxy, mine resources, and outsmart rogue AI factions in a cosmic quest.",
    gradient: "linear-gradient(135deg, #17d8b7 0%, #1387ff 100%)"
  },
  {
    title: "Cubes & Chaos",
    genre: "Puzzle",
    icon: "🧩",
    badge: "Classic",
    rating: 4.9,
    players: "1",
    difficulty: "Easy",
    description: "Chain colorful blocks, dodge traps, and survive escalating patterns in a pure arcade puzzle rush.",
    gradient: "linear-gradient(135deg, #ff88d7 0%, #ffb86c 100%)"
  },
  {
    title: "Skyball Showdown",
    genre: "Sports",
    icon: "⚽",
    badge: "Online",
    rating: 4.6,
    players: "1-2",
    difficulty: "Medium",
    description: "A fast-football showdown where trick shots, timed tackles, and aerial goals decide each match.",
    gradient: "linear-gradient(135deg, #5ae4a8 0%, #3ec7d3 100%)"
  },
  {
    title: "Dungeon Doodles",
    genre: "RPG",
    icon: "🗡️",
    badge: "Loot",
    rating: 4.8,
    players: "1",
    difficulty: "Hard",
    description: "Traverse cursed halls, collect legendary gear, and build a perfect fighter for brutal boss fights.",
    gradient: "linear-gradient(135deg, #6a5cff 0%, #a759ff 100%)"
  },
  {
    title: "Crash Course",
    genre: "Arcade",
    icon: "💥",
    badge: "Quick Play",
    rating: 4.5,
    players: "1",
    difficulty: "Easy",
    description: "A gravity-bending reflex challenge where timing, distance, and momentum are everything.",
    gradient: "linear-gradient(135deg, #ff5d8f 0%, #ff9f43 100%)"
  },
  {
    title: "Idle Kingdom",
    genre: "Strategy",
    icon: "🏰",
    badge: "Tycoon",
    rating: 4.7,
    players: "1",
    difficulty: "Easy",
    description: "Build an empire from a tiny settlement to a powerful kingdom with smart upgrades and expansions.",
    gradient: "linear-gradient(135deg, #25d0a1 0%, #62d6cc 100%)"
  },
  {
    title: "Laser Lanes",
    genre: "Shooter",
    icon: "🔫",
    badge: "VR-like",
    rating: 4.8,
    players: "1-2",
    difficulty: "Hard",
    description: "Dodge incoming lasers and chain precision shots while clearing relentless enemy lines.",
    gradient: "linear-gradient(135deg, #ff3d81 0%, #6a5cff 100%)"
  },
  {
    title: "Tiny Tactics",
    genre: "Strategy",
    icon: "♟️",
    badge: "Tactical",
    rating: 4.7,
    players: "1",
    difficulty: "Medium",
    description: "Deploy tiny heroes on a battle map and outmaneuver superior enemy formations with smart positioning.",
    gradient: "linear-gradient(135deg, #a8ff78 0%, #34d399 100%)"
  },
  {
    title: "Moon Hop",
    genre: "Arcade",
    icon: "🌙",
    badge: "Endless",
    rating: 4.6,
    players: "1",
    difficulty: "Medium",
    description: "Bounce across moon craters, collect crystals, and survive longer than your last big jump run.",
    gradient: "linear-gradient(135deg, #667eea 0%, #5ba4ff 100%)"
  },
  {
    title: "Power Drift 2",
    genre: "Racing",
    icon: "🏁",
    badge: "Turbo",
    rating: 4.9,
    players: "1-4",
    difficulty: "Hard",
    description: "Smash through boosts, grip the corners, and challenge rivals on high-stakes futuristic tracks.",
    gradient: "linear-gradient(135deg, #fd8e53 0%, #ffe082 100%)"
  },
  {
    title: "Bubble Burst",
    genre: "Puzzle",
    icon: "🫧",
    badge: "Zen",
    rating: 4.5,
    players: "1",
    difficulty: "Easy",
    description: "Pop glowing clusters, manage limited moves, and chase perfect combo chains in a calming puzzle flow.",
    gradient: "linear-gradient(135deg, #5eead4 0%, #6ea8fe 100%)"
  },
  {
    title: "Robo Rumble",
    genre: "Fighting",
    icon: "🤖",
    badge: "Arena",
    rating: 4.7,
    players: "1-2",
    difficulty: "Hard",
    description: "Lock in combos, counter attacks, and dominate robot arenas in a dazzling fighter duel.",
    gradient: "linear-gradient(135deg, #ff6a88 0%, #ffb199 100%)"
  },
  {
    title: "Forest Flip",
    genre: "Puzzle",
    icon: "🌲",
    badge: "Chill",
    rating: 4.6,
    players: "1",
    difficulty: "Easy",
    description: "Swap enchanted tiles, align forest spirits, and unlock hidden woodland zones with every move.",
    gradient: "linear-gradient(135deg, #72d6a7 0%, #8ccf68 100%)"
  },
  {
    title: "Skyline Sprint",
    genre: "Sports",
    icon: "🏃",
    badge: "Rush",
    rating: 4.5,
    players: "1-2",
    difficulty: "Medium",
    description: "Dash through rooftop lanes, dodge traffic, and hit the perfect finish line timing in each run.",
    gradient: "linear-gradient(135deg, #f7b267 0%, #f4845f 100%)"
  },
  {
    title: "Cavern Clicker",
    genre: "Idle",
    icon: "💎",
    badge: "Mining",
    rating: 4.4,
    players: "1",
    difficulty: "Easy",
    description: "Dig deeper, upgrade gear, and turn raw crystals into a massive underground empire.",
    gradient: "linear-gradient(135deg, #3ab0ff 0%, #7d6bff 100%)"
  },
  {
    title: "Glitch Gang",
    genre: "Action",
    icon: "🕹️",
    badge: "Co-op",
    rating: 4.8,
    players: "1-4",
    difficulty: "Medium",
    description: "Fight through glitch-filled streets, rescue allies, and survive increasingly wild enemy waves.",
    gradient: "linear-gradient(135deg, #12c2e9 0%, #c471ed 100%)"
  },
  {
    title: "Rolling Realm",
    genre: "Adventure",
    icon: "🌀",
    badge: "Quest",
    rating: 4.5,
    players: "1",
    difficulty: "Medium",
    description: "Roll through strange lands, solve environmental puzzles, and uncover a forgotten world map.",
    gradient: "linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)"
  },
  {
    title: "Pocket Pilot",
    genre: "Simulation",
    icon: "✈️",
    badge: "Flight",
    rating: 4.6,
    players: "1",
    difficulty: "Medium",
    description: "Manage speed, wind, and route efficiency in a stylish little flight challenge for the sky lovers.",
    gradient: "linear-gradient(135deg, #00bcd4 0%, #8bc34a 100%)"
  },
  {
    title: "Jelly Jam",
    genre: "Casual",
    icon: "🍮",
    badge: "Sweet",
    rating: 4.4,
    players: "1",
    difficulty: "Easy",
    description: "Match fruity treats, build combos, and clear increasingly elaborate jam-packed boards.",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
  },
  {
    title: "Volcano Vault",
    genre: "Shooter",
    icon: "🔥",
    badge: "Boss Rush",
    rating: 4.9,
    players: "1-2",
    difficulty: "Hard",
    description: "Fight your way through lava corridors, destructive drones, and towering boss chambers.",
    gradient: "linear-gradient(135deg, #ff7e5f 0%, #ff4f64 100%)"
  },
  {
    title: "Undersea Union",
    genre: "Strategy",
    icon: "🐠",
    badge: "Guild",
    rating: 4.6,
    players: "1",
    difficulty: "Medium",
    description: "Command a reef guild, build habitats, and protect your coral kingdom from incoming threats.",
    gradient: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)"
  },
  {
    title: "Lunar Landings",
    genre: "Arcade",
    icon: "🚀",
    badge: "Precision",
    rating: 4.7,
    players: "1",
    difficulty: "Medium",
    description: "Land softly, manage fuel, and thread through moon hazards to earn top scores and medals.",
    gradient: "linear-gradient(135deg, #d7d2cc 0%, #304352 100%)"
  },
  {
    title: "Monster Mash",
    genre: "Fighting",
    icon: "👹",
    badge: "Combo",
    rating: 4.8,
    players: "1-2",
    difficulty: "Hard",
    description: "Use wild monster transformations and flashy counters to dominate every duel in the arena.",
    gradient: "linear-gradient(135deg, #90caf9 0%, #7c4dff 100%)"
  },
  {
    title: "Stampede Sprint",
    genre: "Racing",
    icon: "🐎",
    badge: "Wild",
    rating: 4.5,
    players: "1-2",
    difficulty: "Medium",
    description: "Charge through dusty canyon tracks and leap over little obstacles in this chaotic animal racer.",
    gradient: "linear-gradient(135deg, #f4d35e 0%, #f76f8e 100%)"
  },
  {
    title: "Vex.io",
    genre: "Action",
    icon: "🌀",
    badge: "Arena",
    rating: 4.8,
    players: "1-8",
    difficulty: "Hard",
    description: "Zoom around a dynamic arena, absorb smaller rivals, and outmaneuver bigger circles in a survival showdown.",
    gradient: "linear-gradient(135deg, #7c5cff 0%, #00d2ff 100%)"
  },
  {
    title: "Paper.io 2",
    genre: "Arcade",
    icon: "📄",
    badge: "Territory",
    rating: 4.7,
    players: "1-8",
    difficulty: "Medium",
    description: "Claim territory, dodge enemy lines, and turn your expanding square into an unstoppable paper empire.",
    gradient: "linear-gradient(135deg, #5eead4 0%, #60a5fa 100%)"
  },
  {
    title: "Basketbros",
    genre: "Sports",
    icon: "🏀",
    badge: "Team",
    rating: 4.6,
    players: "1-4",
    difficulty: "Medium",
    description: "Run flashy plays, sink clutch shots, and outscore your rivals in a lightning-fast basketball showdown.",
    gradient: "linear-gradient(135deg, #f6b73c 0%, #e76f51 100%)"
  },
  {
    title: "Soccerbros",
    genre: "Sports",
    icon: "⚽",
    badge: "Match",
    rating: 4.7,
    players: "1-4",
    difficulty: "Medium",
    description: "Dribble, pass, and score in a stylish arcade soccer match built for quick, competitive rounds.",
    gradient: "linear-gradient(135deg, #34d399 0%, #0ea5e9 100%)"
  }
];

const genreOptions = [
  "All",
  "Action",
  "Adventure",
  "Arcade",
  "Casual",
  "Fighting",
  "Idle",
  "Puzzle",
  "Racing",
  "RPG",
  "Shooter",
  "Simulation",
  "Sports",
  "Strategy"
];

const gameGrid = document.getElementById("gameGrid");
const genreFilter = document.getElementById("genreFilter");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("resultCount");
const gameTotal = document.getElementById("gameTotal");
const featuredCard = document.getElementById("featuredCard");

let activeGenre = "All";

function renderGenreButtons() {
  genreFilter.innerHTML = genreOptions
    .map(
      (genre) => `
        <button class="filter-btn ${genre === activeGenre ? "active" : ""}" data-genre="${genre}">
          ${genre}
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeGenre = button.dataset.genre;
      renderGenreButtons();
      renderGames();
    });
  });
}

function sortGames(list) {
  const selectedSort = sortSelect.value;

  const sorted = [...list];

  if (selectedSort === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  } else if (selectedSort === "popular") {
    sorted.sort((a, b) => b.players.length - a.players.length);
  } else if (selectedSort === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sorted.sort((a, b) => b.rating * 10 + (b.players.includes("4") ? 2 : 0) - (a.rating * 10 + (a.players.includes("4") ? 2 : 0)));
  }

  return sorted;
}

function getFilteredGames() {
  const query = searchInput.value.trim().toLowerCase();

  return sortGames(
    games.filter((game) => {
      const matchesGenre = activeGenre === "All" || game.genre === activeGenre;
      const haystack = `${game.title} ${game.genre} ${game.description}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      return matchesGenre && matchesSearch;
    })
  );
}

function renderFeaturedGame() {
  const highlight = games[0];
  featuredCard.innerHTML = `
    <div class="featured-meta">
      <span class="featured-tag">${highlight.badge}</span>
      <h3>${highlight.title}</h3>
      <p>${highlight.description}</p>
    </div>
    <div class="featured-actions">
      <button class="primary-btn">Play now</button>
      <button class="secondary-btn">More games</button>
    </div>
  `;
}

function renderGames() {
  const filteredGames = getFilteredGames();

  resultCount.textContent = `${filteredGames.length} game${filteredGames.length === 1 ? "" : "s"}`;
  gameTotal.textContent = String(games.length);

  if (!filteredGames.length) {
    gameGrid.innerHTML = `
      <div class="game-card" style="grid-column: 1 / -1; min-height: 220px; display: grid; place-items: center; text-align: center; padding: 30px;">
        <div>
          <h3 style="margin: 0 0 10px;">No games found</h3>
          <p style="margin: 0; color: var(--muted);">Try a different search or switch genre filters.</p>
        </div>
      </div>
    `;
    return;
  }

  gameGrid.innerHTML = filteredGames
    .map(
      (game) => `
        <article class="game-card">
          <div class="game-art" style="background: ${game.gradient};">
            <span class="game-icon">${game.icon}</span>
            <span class="game-badge">${game.badge}</span>
          </div>
          <div class="game-body">
            <div class="game-header">
              <h3 class="game-title">${game.title}</h3>
              <span class="game-rating">★ ${game.rating}</span>
            </div>
            <div class="game-meta">
              <span>${game.genre}</span>
              <span>${game.difficulty}</span>
            </div>
            <p class="game-description">${game.description}</p>
            <div class="game-footer">
              <button class="play-btn">Play now</button>
              <span class="players-pill">${game.players} players</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

searchInput.addEventListener("input", renderGames);
sortSelect.addEventListener("change", renderGames);

renderGenreButtons();
renderFeaturedGame();
renderGames();

