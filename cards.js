// Value-to-grid mapping
const layoutMap = {
  "A": { grid: "grid-1", count: 1 },
  "2": { grid: "grid-2", count: 2 },
  "3": { grid: "grid-3", count: 3 },
  "4": { grid: "grid-4", count: 4 },
  "5": { grid: "grid-5", count: 5 },
  "6": { grid: "grid-6", count: 6 },
  "7": { grid: "grid-7", count: 7 },
  "8": { grid: "grid-8", count: 8 },
  "9": { grid: "grid-9", count: 9 },
  "10": { grid: "grid-10", count: 10 },
  "J": { grid: "grid-1", count: 1 },
  "Q": { grid: "grid-1", count: 1 },
  "K": { grid: "grid-1", count: 1 }
};

const redSuits = ["♦", "♥"];

function createCard(value, suit) {
  const container = document.getElementById("playing-cards");
  const { grid, count } = layoutMap[value];

  const card = document.createElement("div");
  card.classList.add("card");
  if (redSuits.includes(suit)) card.classList.add("red");

  const left = document.createElement("div");
  left.className = "left";
  left.innerHTML = `<div class="value">${value}</div><div class="suit">${suit}</div>`;

  const middle = document.createElement("div");
  middle.className = `middle ${grid}`;

  for (let i = 0; i < count; i++) {
    const pip = document.createElement("div");
    pip.textContent = suit;

    // Flip bottom half
    if (i >= count / 2) pip.classList.add("flipped");

    middle.appendChild(pip);
  }

  const right = document.createElement("div");
  right.className = "right";
  right.innerHTML = `<div class="value flipped">${value}</div>
                     <div class="suit flipped">${suit}</div>`;

  card.appendChild(left);
  card.appendChild(middle);
  card.appendChild(right);

  container.appendChild(card);
}

// UI Helpers
function generateSelectedCard() {
  const value = document.getElementById("valueSelect").value;
  const suit = document.getElementById("suitSelect").value;
  createCard(value, suit);
}

function generateRandomCard() {
  const values = Object.keys(layoutMap);
  const suits = ["♠", "♣", "♥", "♦"];

  const value = values[Math.floor(Math.random() * values.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];

  createCard(value, suit);
}

function generateFullDeck() {
  clearTable();

  const suits = ["♠", "♣", "♥", "♦"];
  const values = Object.keys(layoutMap);

  suits.forEach(suit => {
    values.forEach(value => {
      createCard(value, suit);
    });
  });
}

function clearTable() {
  document.getElementById("playing-cards").innerHTML = "";
}
