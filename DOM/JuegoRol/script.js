let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["palo"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
  { name: 'palo', power: 5 },
  { name: 'daga', power: 30 },
  { name: 'martillo', power: 50 },
  { name: 'espada', power: 100 }
];

const monsters = [
  { name: "baba", level: 2, health: 15 },
  { name: "bestia colmilluda", level: 8, health: 60 },
  { name: "dragón", level: 20, health: 300 }
];

const locations = [
  {
    name: "plaza",
    "button text": ["Ir a la tienda", "Ir a la cueva", "Luchar contra el dragón"],
    "button functions": [goStore, goCave, fightDragon],
    text: "Estás en la plaza del pueblo. Ves un cartel que dice \"Tienda\"."
  },
  {
    name: "tienda",
    "button text": ["Comprar 10 de salud (10 oro)", "Comprar arma (30 oro)", "Volver a la plaza"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "Entras a la tienda."
  },
  {
    name: "cueva",
    "button text": ["Luchar contra baba", "Luchar contra bestia colmilluda", "Volver a la plaza"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "Entras a la cueva. Ves algunos monstruos."
  },
  {
    name: "pelea",
    "button text": ["Atacar", "Esquivar", "Huir"],
    "button functions": [attack, dodge, goTown],
    text: "Estás luchando contra un monstruo."
  },
  {
    name: "matar monstruo",
    "button text": ["Volver a la plaza", "Volver a la plaza", "Volver a la plaza"],
    "button functions": [goTown, goTown, goTown],
    text: 'El monstruo grita "¡Arg!" mientras muere. Ganas experiencia y encuentras oro.'
  },
  {
    name: "perder",
    "button text": ["¿REINTENTAR?", "¿REINTENTAR?", "¿REINTENTAR?"],
    "button functions": [restart, restart, restart],
    text: "Has muerto. ☠️"
  },
  { 
    name: "ganar", 
    "button text": ["¿REINTENTAR?", "¿REINTENTAR?", "¿REINTENTAR?"], 
    "button functions": [restart, restart, restart], 
    text: "¡Derrotaste al dragón! ¡GANASTE EL JUEGO! 🎉" 
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Volver a la plaza"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "Encontraste un juego secreto. Elige un número. Si coincide con uno de los 10 números aleatorios, ¡ganas!"
  }
];

// Inicializar botones
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() { update(locations[0]); }
function goStore() { update(locations[1]); }
function goCave() { update(locations[2]); }

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "No tienes suficiente oro para comprar salud.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "Ahora tienes una " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " En tu inventario tienes: " + inventory;
    } else {
      text.innerText = "No tienes suficiente oro para comprar un arma.";
    }
  } else {
    text.innerText = "¡Ya tienes el arma más poderosa!";
    button2.innerText = "Vender arma por 15 oro";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let sold = inventory.shift();
    text.innerText = "Vendiste una " + sold + ".";
    text.innerText += " En tu inventario tienes: " + inventory;
  } else {
    text.innerText = "¡No vendas tu única arma!";
  }
}

function fightSlime() { fighting = 0; goFight(); }
function fightBeast() { fighting = 1; goFight(); }
function fightDragon() { fighting = 2; goFight(); }

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "El " + monsters[fighting].name + " ataca.";
  text.innerText += " Tú lo atacas con tu " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);

  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " Fallas el ataque.";
  }

  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;

  if (health <= 0) lose();
  else if (monsterHealth <= 0) fighting === 2 ? winGame() : defeatMonster();

  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Tu " + inventory.pop() + " se rompe.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - Math.floor(Math.random() * xp);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "Esquivas el ataque del " + monsters[fighting].name + ".";
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() { update(locations[5]); }
function winGame() { update(locations[6]); }

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["palo"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() { update(locations[7]); }
function pickTwo() { pick(2); }
function pickEight() { pick(8); }

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) numbers.push(Math.floor(Math.random() * 11));

  text.innerText = "Elegiste " + guess + ". Números aleatorios:\n";

  for (let n of numbers) text.innerText += n + "\n";

  if (numbers.includes(guess)) {
    text.innerText += "¡Correcto! ¡Ganas 20 de oro!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Incorrecto. Pierdes 10 de salud.";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) lose();
  }
}
