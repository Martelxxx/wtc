const weapons = [
  {
    productType: 'Handgun',
    components: [
      { name: 'Steel', quantity: 5 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Rubber', quantity: 0.5 },
      { name: 'Copper', quantity: 0.2 },
    ],
  },
  {
    productType: 'Rifle',
    components: [
      { name: 'Steel', quantity: 10 },
      { name: 'Plastic', quantity: 2 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Rubber', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
    ],
  },
  {
    productType: 'Shotgun',
    components: [
      { name: 'Steel', quantity: 12 },
      { name: 'Plastic', quantity: 2 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Rubber', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
    ],
  },
  {
    productType: 'Sniper Rifle',
    components: [
      { name: 'Steel', quantity: 15 },
      { name: 'Plastic', quantity: 2 },
      { name: 'Aluminum', quantity: 3 },
      { name: 'Glass', quantity: 1 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Machine Gun',
    components: [
      { name: 'Steel', quantity: 20 },
      { name: 'Plastic', quantity: 3 },
      { name: 'Aluminum', quantity: 3 },
      { name: 'Rubber', quantity: 1 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Submachine Gun',
    components: [
      { name: 'Steel', quantity: 15 },
      { name: 'Plastic', quantity: 3 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Rubber', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
    ],
  },
  {
    productType: 'Grenade Launcher',
    components: [
      { name: 'Steel', quantity: 10 },
      { name: 'Plastic', quantity: 2 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Rubber', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
    ],
  },
  {
    productType: 'Rocket Launcher',
    components: [
      { name: 'Steel', quantity: 25 },
      { name: 'Plastic', quantity: 5 },
      { name: 'Aluminum', quantity: 5 },
      { name: 'Rubber', quantity: 2 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Bazooka',
    components: [
      { name: 'Steel', quantity: 30 },
      { name: 'Plastic', quantity: 5 },
      { name: 'Aluminum', quantity: 5 },
      { name: 'Rubber', quantity: 2 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Flamethrower',
    components: [
      { name: 'Steel', quantity: 20 },
      { name: 'Plastic', quantity: 5 },
      { name: 'Aluminum', quantity: 3 },
      { name: 'Rubber', quantity: 2 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Grenade',
    components: [
      { name: 'Steel', quantity: 5 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Copper', quantity: 0.2 },
      { name: 'Rubber', quantity: 0.1 },
    ],
  },
  {
    productType: 'Landmine',
    components: [
      { name: 'Steel', quantity: 10 },
      { name: 'Plastic', quantity: 2 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Rubber', quantity: 0.2 },
    ],
  },
  {
    productType: 'C4 Explosive',
    components: [
      { name: 'Plastic', quantity: 5 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Rubber', quantity: 0.2 },
      { name: 'Steel', quantity: 1 },
    ],
  },
  {
    productType: 'Mortar',
    components: [
      { name: 'Steel', quantity: 20 },
      { name: 'Plastic', quantity: 3 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Rubber', quantity: 1 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Artillery',
    components: [
      { name: 'Steel', quantity: 100 },
      { name: 'Aluminum', quantity: 20 },
      { name: 'Plastic', quantity: 15 },
      { name: 'Copper', quantity: 5 },
      { name: 'Rubber', quantity: 3 },
    ],
  },
  {
    productType: 'Tank',
    components: [
      { name: 'Steel', quantity: 800 },
      { name: 'Titanium', quantity: 50 },
      { name: 'Aluminum', quantity: 200 },
      { name: 'Plastic', quantity: 150 },
      { name: 'Rubber', quantity: 100 },
    ],
  },
  {
    productType: 'Fighter Jet',
    components: [
      { name: 'Titanium', quantity: 5000 },
      { name: 'Carbon Fiber', quantity: 3000 },
      { name: 'Aluminum', quantity: 2000 },
      { name: 'Glass', quantity: 1000 },
      { name: 'Plastic', quantity: 1000 },
    ],
  },
  {
    productType: 'Drone',
    components: [
      { name: 'Carbon Fiber', quantity: 100 },
      { name: 'Plastic', quantity: 50 },
      { name: 'Silicon', quantity: 20 },
      { name: 'Aluminum', quantity: 30 },
      { name: 'Copper', quantity: 10 },
    ],
  },
  {
    productType: 'Ballistic Missile',
    components: [
      { name: 'Titanium', quantity: 10000 },
      { name: 'Aluminum', quantity: 5000 },
      { name: 'Carbon Fiber', quantity: 8000 },
      { name: 'Plastic', quantity: 4000 },
      { name: 'Glass', quantity: 2000 },
    ],
  },
  {
    productType: 'Anti-Aircraft Gun',
    components: [
      { name: 'Steel', quantity: 200 },
      { name: 'Aluminum', quantity: 50 },
      { name: 'Plastic', quantity: 30 },
      { name: 'Copper', quantity: 10 },
      { name: 'Rubber', quantity: 10 },
    ],
  },
  {
    productType: 'Submarine',
    components: [
      { name: 'Steel', quantity: 10000 },
      { name: 'Titanium', quantity: 5000 },
      { name: 'Copper', quantity: 500 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
    ],
  },
  {
    productType: 'Aircraft Carrier',
    components: [
      { name: 'Steel', quantity: 50000 },
      { name: 'Aluminum', quantity: 20000 },
      { name: 'Titanium', quantity: 10000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Glass', quantity: 3000 },
    ],
  },
  {
    productType: 'Battleship',
    components: [
      { name: 'Steel', quantity: 40000 },
      { name: 'Titanium', quantity: 5000 },
      { name: 'Aluminum', quantity: 10000 },
      { name: 'Plastic', quantity: 3000 },
      { name: 'Glass', quantity: 2000 },
    ],
  },
  {
    productType: 'Cruiser',
    components: [
      { name: 'Steel', quantity: 20000 },
      { name: 'Titanium', quantity: 3000 },
      { name: 'Aluminum', quantity: 5000 },
      { name: 'Plastic', quantity: 2000 },
      { name: 'Glass', quantity: 1000 },
    ],
  },
  {
    productType: 'Frigate',
    components: [
      { name: 'Steel', quantity: 15000 },
      { name: 'Titanium', quantity: 2000 },
      { name: 'Aluminum', quantity: 3000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
    ],
  },
  {
    productType: 'Destroyer',
    components: [
      { name: 'Steel', quantity: 30000 },
      { name: 'Titanium', quantity: 5000 },
      { name: 'Aluminum', quantity: 8000 },
      { name: 'Plastic', quantity: 2000 },
      { name: 'Glass', quantity: 1000 },
    ],
  },
  {
    productType: 'Patrol Boat',
    components: [
      { name: 'Steel', quantity: 5000 },
      { name: 'Aluminum', quantity: 2000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
      { name: 'Rubber', quantity: 300 },
    ],
  },
  {
    productType: 'Amphibious Assault Vehicle',
    components: [
      { name: 'Steel', quantity: 10000 },
      { name: 'Aluminum', quantity: 2000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Rubber', quantity: 500 },
      { name: 'Glass', quantity: 300 },
    ],
  },
  {
    productType: 'Missile Defense System',
    components: [
      { name: 'Steel', quantity: 5000 },
      { name: 'Titanium', quantity: 2000 },
      { name: 'Aluminum', quantity: 3000 },
      { name: 'Plastic', quantity: 1500 },
      { name: 'Copper', quantity: 1000 },
    ],
  },
  {
    productType: 'Nuclear Missile',
    components: [
      { name: 'Uranium', quantity: 2000 },
      { name: 'Titanium', quantity: 1000 },
      { name: 'Aluminum', quantity: 500 },
      { name: 'Carbon Fiber', quantity: 1000 },
      { name: 'Plastic', quantity: 500 },
    ],
  },
  {
    productType: 'Laser Weapon System',
    components: [
      { name: 'Silicon', quantity: 100 },
      { name: 'Aluminum', quantity: 200 },
      { name: 'Copper', quantity: 50 },
      { name: 'Glass', quantity: 50 },
      { name: 'Plastic', quantity: 100 },
    ],
  },
  {
    productType: 'Electromagnetic Railgun',
    components: [
      { name: 'Steel', quantity: 5000 },
      { name: 'Copper', quantity: 2000 },
      { name: 'Aluminum', quantity: 1000 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Glass', quantity: 200 },
    ],
  },
  {
    productType: 'Anti-Tank Missile',
    components: [
      { name: 'Steel', quantity: 500 },
      { name: 'Aluminum', quantity: 300 },
      { name: 'Plastic', quantity: 200 },
      { name: 'Copper', quantity: 100 },
      { name: 'Glass', quantity: 50 },
    ],
  },
  {
    productType: 'Surface-to-Air Missile',
    components: [
      { name: 'Steel', quantity: 1000 },
      { name: 'Aluminum', quantity: 500 },
      { name: 'Plastic', quantity: 300 },
      { name: 'Copper', quantity: 100 },
      { name: 'Glass', quantity: 100 },
    ],
  },
  {
    productType: 'Cruise Missile',
    components: [
      { name: 'Steel', quantity: 1500 },
      { name: 'Aluminum', quantity: 700 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Copper', quantity: 200 },
      { name: 'Glass', quantity: 200 },
    ],
  },
  {
    productType: 'Torpedo',
    components: [
      { name: 'Steel', quantity: 2000 },
      { name: 'Aluminum', quantity: 1000 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Copper', quantity: 200 },
      { name: 'Glass', quantity: 100 },
    ],
  },
  {
    productType: 'Depth Charge',
    components: [
      { name: 'Steel', quantity: 500 },
      { name: 'Plastic', quantity: 200 },
      { name: 'Aluminum', quantity: 100 },
      { name: 'Copper', quantity: 50 },
      { name: 'Rubber', quantity: 50 },
    ],
  },
  {
    productType: 'Naval Mine',
    components: [
      { name: 'Steel', quantity: 1000 },
      { name: 'Plastic', quantity: 300 },
      { name: 'Aluminum', quantity: 200 },
      { name: 'Copper', quantity: 100 },
      { name: 'Glass', quantity: 50 },
    ],
  },
  {
    productType: 'Ballistic Helmet',
    components: [
      { name: 'Kevlar', quantity: 2 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Glass', quantity: 0.5 },
      { name: 'Steel', quantity: 0.5 },
      { name: 'Rubber', quantity: 0.2 },
    ],
  },
  {
    productType: 'Body Armor',
    components: [
      { name: 'Kevlar', quantity: 10 },
      { name: 'Plastic', quantity: 5 },
      { name: 'Steel', quantity: 2 },
      { name: 'Rubber', quantity: 1 },
      { name: 'Glass', quantity: 0.5 },
    ],
  },
  {
    productType: 'Anti-Personnel Mine',
    components: [
      { name: 'Plastic', quantity: 1 },
      { name: 'Steel', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
      { name: 'Copper', quantity: 0.2 },
      { name: 'Rubber', quantity: 0.1 },
    ],
  },
  {
    productType: 'Mortar Shell',
    components: [
      { name: 'Steel', quantity: 2 },
      { name: 'Plastic', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
      { name: 'Copper', quantity: 0.2 },
      { name: 'Rubber', quantity: 0.1 },
    ],
  },
  {
    productType: 'Artillery Shell',
    components: [
      { name: 'Steel', quantity: 5 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Rubber', quantity: 0.2 },
    ],
  },
  {
    productType: 'Nuclear Submarine',
    components: [
      { name: 'Steel', quantity: 10000 },
      { name: 'Titanium', quantity: 5000 },
      { name: 'Copper', quantity: 500 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
    ],
  },
  {
    productType: 'Guided Missile Destroyer',
    components: [
      { name: 'Steel', quantity: 30000 },
      { name: 'Aluminum', quantity: 10000 },
      { name: 'Titanium', quantity: 5000 },
      { name: 'Plastic', quantity: 3000 },
      { name: 'Glass', quantity: 2000 },
    ],
  },
  {
    productType: 'Nuclear Aircraft Carrier',
    components: [
      { name: 'Steel', quantity: 50000 },
      { name: 'Titanium', quantity: 10000 },
      { name: 'Aluminum', quantity: 20000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Glass', quantity: 3000 },
    ],
  },
  {
    productType: 'Stealth Bomber',
    components: [
      { name: 'Carbon Fiber', quantity: 5000 },
      { name: 'Titanium', quantity: 2000 },
      { name: 'Aluminum', quantity: 3000 },
      { name: 'Plastic', quantity: 2000 },
      { name: 'Glass', quantity: 1000 },
    ],
  },
  {
    productType: 'Anti-Ship Missile',
    components: [
      { name: 'Steel', quantity: 1000 },
      { name: 'Aluminum', quantity: 500 },
      { name: 'Plastic', quantity: 300 },
      { name: 'Copper', quantity: 200 },
      { name: 'Glass', quantity: 100 },
    ],
  },
  {
    productType: 'Conventional Bomb',
    components: [
      { name: 'Steel', quantity: 50 },
      { name: 'Plastic', quantity: 10 },
      { name: 'Aluminum', quantity: 15 },
      { name: 'Copper', quantity: 5 },
      { name: 'Sulfuric Acid', quantity: 3 },
      { name: 'Rubber', quantity: 2 },
    ],
  },
  {
    productType: 'Cluster Bomb',
    components: [
      { name: 'Steel', quantity: 100 },
      { name: 'Plastic', quantity: 20 },
      { name: 'Aluminum', quantity: 25 },
      { name: 'Copper', quantity: 10 },
      { name: 'Sulfuric Acid', quantity: 5 },
      { name: 'Rubber', quantity: 5 },
    ],
  },
  {
    productType: 'Thermobaric Bomb',
    components: [
      { name: 'Steel', quantity: 200 },
      { name: 'Plastic', quantity: 50 },
      { name: 'Aluminum', quantity: 40 },
      { name: 'Copper', quantity: 20 },
      { name: 'Sulfuric Acid', quantity: 10 },
      { name: 'Rubber', quantity: 5 },
    ],
  },
  {
    productType: 'Nuclear Bomb',
    components: [
      { name: 'Uranium', quantity: 500 },
      { name: 'Steel', quantity: 300 },
      { name: 'Plastic', quantity: 100 },
      { name: 'Aluminum', quantity: 100 },
      { name: 'Copper', quantity: 50 },
      { name: 'Sulfuric Acid', quantity: 20 },
      { name: 'Rubber', quantity: 10 },
    ],
  },
  {
    productType: 'Hydrogen Bomb',
    components: [
      { name: 'Plutonium', quantity: 200 },
      { name: 'Steel', quantity: 500 },
      { name: 'Plastic', quantity: 200 },
      { name: 'Aluminum', quantity: 150 },
      { name: 'Copper', quantity: 100 },
      { name: 'Sulfuric Acid', quantity: 50 },
      { name: 'Rubber', quantity: 20 },
    ],
  },
];

// Export the weapons array
export default weapons;