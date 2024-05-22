const transportation = [
  {
    productType: 'Sports Car',
    components: [
      { name: 'Carbon Steel', quantity: 100 },
      { name: 'Aluminum', quantity: 50 },
      { name: 'Graphene', quantity: 20 },
      { name: 'Gold', quantity: 5 },
      { name: 'Fiberglass', quantity: 30 },
    ],
  },
  {
    productType: 'Electric Bike',
    components: [
      { name: 'Aluminum', quantity: 10 },
      { name: 'Graphene', quantity: 5 },
      { name: 'Lithium', quantity: 3 },
      { name: 'Rubber Wood', quantity: 7 },
      { name: 'Polycarbonate', quantity: 4 },
    ],
  },
  {
    productType: 'Sedan',
    components: [
      { name: 'Steel', quantity: 1500 },
      { name: 'Plastic', quantity: 300 },
      { name: 'Glass', quantity: 100 },
      { name: 'Rubber', quantity: 200 },
      { name: 'Aluminum', quantity: 500 },
    ],
  },
  {
    productType: 'SUV',
    components: [
      { name: 'Steel', quantity: 2000 },
      { name: 'Plastic', quantity: 400 },
      { name: 'Glass', quantity: 150 },
      { name: 'Rubber', quantity: 250 },
      { name: 'Aluminum', quantity: 700 },
    ],
  },
  {
    productType: 'Pickup Truck',
    components: [
      { name: 'Steel', quantity: 2500 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Glass', quantity: 150 },
      { name: 'Rubber', quantity: 300 },
      { name: 'Aluminum', quantity: 800 },
    ],
  },
  {
    productType: 'Electric Car',
    components: [
      { name: 'Aluminum', quantity: 2000 },
      { name: 'Copper', quantity: 300 },
      { name: 'Lithium', quantity: 500 },
      { name: 'Plastic', quantity: 400 },
      { name: 'Glass', quantity: 150 },
    ],
  },
  {
    productType: 'Motorcycle',
    components: [
      { name: 'Steel', quantity: 300 },
      { name: 'Plastic', quantity: 100 },
      { name: 'Rubber', quantity: 100 },
      { name: 'Aluminum', quantity: 200 },
      { name: 'Glass', quantity: 50 },
    ],
  },
  {
    productType: 'Electric Scooter',
    components: [
      { name: 'Steel', quantity: 100 },
      { name: 'Plastic', quantity: 50 },
      { name: 'Lithium', quantity: 100 },
      { name: 'Rubber', quantity: 50 },
      { name: 'Copper', quantity: 30 },
    ],
  },
  {
    productType: 'Bicycle',
    components: [
      { name: 'Steel', quantity: 50 },
      { name: 'Rubber', quantity: 30 },
      { name: 'Plastic', quantity: 20 },
      { name: 'Aluminum', quantity: 40 },
      { name: 'Leather', quantity: 10 },
    ],
  },
  {
    productType: 'Cargo Ship',
    components: [
      { name: 'Steel', quantity: 100000 },
      { name: 'Aluminum', quantity: 50000 },
      { name: 'Copper', quantity: 2000 },
      { name: 'Glass', quantity: 1000 },
      { name: 'Plastic', quantity: 5000 },
    ],
  },
  {
    productType: 'Fishing Boat',
    components: [
      { name: 'Steel', quantity: 10000 },
      { name: 'Aluminum', quantity: 5000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
      { name: 'Rubber', quantity: 200 },
    ],
  },
  {
    productType: 'Yacht',
    components: [
      { name: 'Aluminum', quantity: 20000 },
      { name: 'Fiberglass', quantity: 10000 },
      { name: 'Plastic', quantity: 2000 },
      { name: 'Glass', quantity: 1000 },
      { name: 'Leather', quantity: 500 },
    ],
  },
  {
    productType: 'Airplane',
    components: [
      { name: 'Aluminum', quantity: 50000 },
      { name: 'Titanium', quantity: 10000 },
      { name: 'Carbon Fiber', quantity: 15000 },
      { name: 'Plastic', quantity: 10000 },
      { name: 'Glass', quantity: 5000 },
    ],
  },
  {
    productType: 'Helicopter',
    components: [
      { name: 'Aluminum', quantity: 10000 },
      { name: 'Titanium', quantity: 5000 },
      { name: 'Carbon Fiber', quantity: 7000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Glass', quantity: 2000 },
    ],
  },
  {
    productType: 'Train',
    components: [
      { name: 'Steel', quantity: 50000 },
      { name: 'Aluminum', quantity: 20000 },
      { name: 'Copper', quantity: 1000 },
      { name: 'Glass', quantity: 5000 },
      { name: 'Plastic', quantity: 3000 },
    ],
  },
  {
    productType: 'Subway Car',
    components: [
      { name: 'Steel', quantity: 40000 },
      { name: 'Aluminum', quantity: 15000 },
      { name: 'Copper', quantity: 800 },
      { name: 'Glass', quantity: 4000 },
      { name: 'Plastic', quantity: 2000 },
    ],
  },
  {
    productType: 'Rocket',
    components: [
      { name: 'Aluminum', quantity: 80000 },
      { name: 'Titanium', quantity: 40000 },
      { name: 'Carbon Fiber', quantity: 60000 },
      { name: 'Plastic', quantity: 20000 },
      { name: 'Glass', quantity: 10000 },
    ],
  },
  {
    productType: 'Satellite',
    components: [
      { name: 'Aluminum', quantity: 10000 },
      { name: 'Titanium', quantity: 5000 },
      { name: 'Carbon Fiber', quantity: 8000 },
      { name: 'Plastic', quantity: 3000 },
      { name: 'Glass', quantity: 2000 },
    ],
  },
  {
    productType: 'Bus',
    components: [
      { name: 'Steel', quantity: 20000 },
      { name: 'Aluminum', quantity: 10000 },
      { name: 'Copper', quantity: 500 },
      { name: 'Glass', quantity: 3000 },
      { name: 'Plastic', quantity: 2000 },
    ],
  },
  {
    productType: 'Tractor',
    components: [
      { name: 'Steel', quantity: 15000 },
      { name: 'Rubber', quantity: 2000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
      { name: 'Copper', quantity: 300 },
    ],
  },
  {
    productType: 'Forklift',
    components: [
      { name: 'Steel', quantity: 10000 },
      { name: 'Rubber', quantity: 1000 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Glass', quantity: 300 },
      { name: 'Copper', quantity: 200 },
    ],
  },
  {
    productType: 'Bulldozer',
    components: [
      { name: 'Steel', quantity: 20000 },
      { name: 'Rubber', quantity: 3000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
      { name: 'Copper', quantity: 400 },
    ],
  },
  {
    productType: 'Excavator',
    components: [
      { name: 'Steel', quantity: 25000 },
      { name: 'Rubber', quantity: 3000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
      { name: 'Copper', quantity: 500 },
    ],
  },
  {
    productType: 'Ambulance',
    components: [
      { name: 'Steel', quantity: 15000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 1000 },
      { name: 'Rubber', quantity: 500 },
      { name: 'Aluminum', quantity: 500 },
    ],
  },
  {
    productType: 'Fire Truck',
    components: [
      { name: 'Steel', quantity: 25000 },
      { name: 'Plastic', quantity: 2000 },
      { name: 'Glass', quantity: 1500 },
      { name: 'Rubber', quantity: 1000 },
      { name: 'Aluminum', quantity: 1000 },
    ],
  },
  {
    productType: 'Police Car',
    components: [
      { name: 'Steel', quantity: 1500 },
      { name: 'Plastic', quantity: 300 },
      { name: 'Glass', quantity: 100 },
      { name: 'Rubber', quantity: 200 },
      { name: 'Aluminum', quantity: 500 },
    ],
  },
  {
    productType: 'Snowmobile',
    components: [
      { name: 'Steel', quantity: 500 },
      { name: 'Plastic', quantity: 200 },
      { name: 'Rubber', quantity: 150 },
      { name: 'Aluminum', quantity: 200 },
      { name: 'Glass', quantity: 50 },
    ],
  },
  {
    productType: 'Golf Cart',
    components: [
      { name: 'Steel', quantity: 1000 },
      { name: 'Plastic', quantity: 400 },
      { name: 'Rubber', quantity: 200 },
      { name: 'Aluminum', quantity: 500 },
      { name: 'Glass', quantity: 100 },
    ],
  },
  {
    productType: 'Jet Ski',
    components: [
      { name: 'Fiberglass', quantity: 200 },
      { name: 'Plastic', quantity: 150 },
      { name: 'Rubber', quantity: 100 },
      { name: 'Aluminum', quantity: 200 },
      { name: 'Glass', quantity: 50 },
    ],
  },
  {
    productType: 'Hovercraft',
    components: [
      { name: 'Aluminum', quantity: 3000 },
      { name: 'Fiberglass', quantity: 1500 },
      { name: 'Plastic', quantity: 800 },
      { name: 'Rubber', quantity: 500 },
      { name: 'Glass', quantity: 300 },
    ],
  },
  {
    productType: 'Glider',
    components: [
      { name: 'Aluminum', quantity: 1500 },
      { name: 'Fiberglass', quantity: 1000 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Glass', quantity: 300 },
      { name: 'Steel', quantity: 800 },
    ],
  },
  {
    productType: 'Space Shuttle',
    components: [
      { name: 'Aluminum', quantity: 500000 },
      { name: 'Titanium', quantity: 200000 },
      { name: 'Carbon Fiber', quantity: 300000 },
      { name: 'Plastic', quantity: 100000 },
      { name: 'Glass', quantity: 50000 },
    ],
  },
  {
    productType: 'Dirt Bike',
    components: [
      { name: 'Steel', quantity: 500 },
      { name: 'Plastic', quantity: 300 },
      { name: 'Rubber', quantity: 200 },
      { name: 'Aluminum', quantity: 400 },
      { name: 'Glass', quantity: 100 },
    ],
  },
  {
    productType: 'ATV',
    components: [
      { name: 'Steel', quantity: 1000 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Rubber', quantity: 300 },
      { name: 'Aluminum', quantity: 700 },
      { name: 'Glass', quantity: 150 },
    ],
  },
  {
    productType: 'Electric Train',
    components: [
      { name: 'Steel', quantity: 80000 },
      { name: 'Copper', quantity: 4000 },
      { name: 'Glass', quantity: 10000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Aluminum', quantity: 30000 },
    ],
  },
  {
    productType: 'Hoverboard',
    components: [
      { name: 'Plastic', quantity: 200 },
      { name: 'Rubber', quantity: 100 },
      { name: 'Aluminum', quantity: 150 },
      { name: 'Lithium', quantity: 100 },
      { name: 'Copper', quantity: 50 },
    ],
  },
  {
    productType: 'Light Rail Car',
    components: [
      { name: 'Steel', quantity: 40000 },
      { name: 'Aluminum', quantity: 20000 },
      { name: 'Copper', quantity: 2000 },
      { name: 'Glass', quantity: 5000 },
      { name: 'Plastic', quantity: 2000 },
    ],
  },
  {
    productType: 'Luxury Yacht',
    components: [
      { name: 'Aluminum', quantity: 40000 },
      { name: 'Fiberglass', quantity: 20000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Glass', quantity: 5000 },
      { name: 'Leather', quantity: 2000 },
    ],
  },
  {
    productType: 'Fighter Jet',
    components: [
      { name: 'Titanium', quantity: 50000 },
      { name: 'Carbon Fiber', quantity: 30000 },
      { name: 'Aluminum', quantity: 20000 },
      { name: 'Glass', quantity: 10000 },
      { name: 'Plastic', quantity: 10000 },
    ],
  },
  {
    productType: 'Airbus A380',
    components: [
      { name: 'Aluminum', quantity: 300000 },
      { name: 'Titanium', quantity: 100000 },
      { name: 'Carbon Fiber', quantity: 150000 },
      { name: 'Plastic', quantity: 100000 },
      { name: 'Glass', quantity: 50000 },
    ],
  },
  {
    productType: 'Nuclear Submarine',
    components: [
      { name: 'Steel', quantity: 400000 },
      { name: 'Titanium', quantity: 200000 },
      { name: 'Copper', quantity: 5000 },
      { name: 'Plastic', quantity: 10000 },
      { name: 'Glass', quantity: 5000 },
    ],
  },
  {
    productType: 'Hover Bike',
    components: [
      { name: 'Carbon Fiber', quantity: 1000 },
      { name: 'Aluminum', quantity: 500 },
      { name: 'Plastic', quantity: 300 },
      { name: 'Glass', quantity: 100 },
      { name: 'Rubber', quantity: 100 },
    ],
  },
  {
    productType: 'Hydrofoil Boat',
    components: [
      { name: 'Aluminum', quantity: 10000 },
      { name: 'Fiberglass', quantity: 5000 },
      { name: 'Plastic', quantity: 2000 },
      { name: 'Glass', quantity: 1000 },
      { name: 'Copper', quantity: 500 },
    ],
  },
  {
    productType: 'Electric Bus',
    components: [
      { name: 'Steel', quantity: 20000 },
      { name: 'Lithium', quantity: 1000 },
      { name: 'Copper', quantity: 2000 },
      { name: 'Plastic', quantity: 3000 },
      { name: 'Glass', quantity: 3000 },
    ],
  },
  {
    productType: 'Amphibious Vehicle',
    components: [
      { name: 'Steel', quantity: 3000 },
      { name: 'Aluminum', quantity: 2000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Rubber', quantity: 500 },
      { name: 'Glass', quantity: 500 },
    ],
  },
  {
    productType: 'Luxury Sedan',
    components: [
      { name: 'Steel', quantity: 1500 },
      { name: 'Plastic', quantity: 400 },
      { name: 'Glass', quantity: 200 },
      { name: 'Rubber', quantity: 300 },
      { name: 'Leather', quantity: 500 },
    ],
  },
  {
    productType: 'Racing Car',
    components: [
      { name: 'Carbon Fiber', quantity: 3000 },
      { name: 'Aluminum', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Rubber', quantity: 1000 },
    ],
  },
  {
    productType: 'Freight Train',
    components: [
      { name: 'Steel', quantity: 100000 },
      { name: 'Aluminum', quantity: 30000 },
      { name: 'Copper', quantity: 5000 },
      { name: 'Glass', quantity: 10000 },
      { name: 'Plastic', quantity: 5000 },
    ],
  },
  {
    productType: 'Autonomous Car',
    components: [
      { name: 'Aluminum', quantity: 2000 },
      { name: 'Silicon', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Rubber', quantity: 500 },
    ],
  },
  {
    productType: 'Space Probe',
    components: [
      { name: 'Aluminum', quantity: 2000 },
      { name: 'Titanium', quantity: 1000 },
      { name: 'Carbon Fiber', quantity: 1500 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
    ],
  },
  {
    productType: 'Mars Rover',
    components: [
      { name: 'Aluminum', quantity: 3000 },
      { name: 'Titanium', quantity: 2000 },
      { name: 'Carbon Fiber', quantity: 2000 },
      { name: 'Silicon', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
    ],
  },
  {
    productType: 'Tank',
    components: [
      { name: 'Steel', quantity: 80000 },
      { name: 'Titanium', quantity: 10000 },
      { name: 'Aluminum', quantity: 5000 },
      { name: 'Plastic', quantity: 3000 },
      { name: 'Rubber', quantity: 2000 },
    ],
  },
  {
    productType: 'Luxury RV',
    components: [
      { name: 'Steel', quantity: 10000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Glass', quantity: 2000 },
      { name: 'Rubber', quantity: 3000 },
      { name: 'Aluminum', quantity: 2000 },
    ],
  },
  {
    productType: 'Cargo Plane',
    components: [
      { name: 'Aluminum', quantity: 150000 },
      { name: 'Titanium', quantity: 50000 },
      { name: 'Carbon Fiber', quantity: 80000 },
      { name: 'Plastic', quantity: 40000 },
      { name: 'Glass', quantity: 20000 },
    ],
  },
  {
    productType: 'Electric Truck',
    components: [
      { name: 'Steel', quantity: 30000 },
      { name: 'Lithium', quantity: 5000 },
      { name: 'Copper', quantity: 2000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Glass', quantity: 3000 },
    ],
  },
  {
    productType: 'Hydrogen Car',
    components: [
      { name: 'Aluminum', quantity: 2000 },
      { name: 'Plastic', quantity: 1000 },
      { name: 'Glass', quantity: 500 },
      { name: 'Rubber', quantity: 500 },
      { name: 'Copper', quantity: 300 },
    ],
  },
  {
    productType: 'Hyperloop Pod',
    components: [
      { name: 'Aluminum', quantity: 20000 },
      { name: 'Carbon Fiber', quantity: 10000 },
      { name: 'Glass', quantity: 5000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Copper', quantity: 2000 },
    ],
  },
  {
    productType: 'Electric Van',
    components: [
      { name: 'Steel', quantity: 10000 },
      { name: 'Lithium', quantity: 2000 },
      { name: 'Copper', quantity: 1000 },
      { name: 'Plastic', quantity: 2000 },
      { name: 'Glass', quantity: 1000 },
    ],
  },
  {
    productType: 'Autonomous Drone',
    components: [
      { name: 'Carbon Fiber', quantity: 500 },
      { name: 'Plastic', quantity: 200 },
      { name: 'Silicon', quantity: 100 },
      { name: 'Copper', quantity: 50 },
      { name: 'Glass', quantity: 30 },
    ],
  },
  {
    productType: 'Military Jeep',
    components: [
      { name: 'Steel', quantity: 8000 },
      { name: 'Plastic', quantity: 2000 },
      { name: 'Rubber', quantity: 1500 },
      { name: 'Glass', quantity: 500 },
      { name: 'Copper', quantity: 300 },
    ],
  },
  {
    productType: 'Electric Tricycle',
    components: [
      { name: 'Steel', quantity: 1500 },
      { name: 'Plastic', quantity: 500 },
      { name: 'Lithium', quantity: 300 },
      { name: 'Rubber', quantity: 400 },
      { name: 'Copper', quantity: 200 },
    ],
  },
  {
    productType: 'Monorail',
    components: [
      { name: 'Steel', quantity: 70000 },
      { name: 'Aluminum', quantity: 30000 },
      { name: 'Copper', quantity: 5000 },
      { name: 'Glass', quantity: 10000 },
      { name: 'Plastic', quantity: 8000 },
    ],
  },
  {
    productType: 'Jetpack',
    components: [
      { name: 'Carbon Fiber', quantity: 300 },
      { name: 'Aluminum', quantity: 200 },
      { name: 'Plastic', quantity: 100 },
      { name: 'Glass', quantity: 50 },
      { name: 'Copper', quantity: 30 },
    ],
  },
  {
    productType: 'Luxury Helicopter',
    components: [
      { name: 'Aluminum', quantity: 20000 },
      { name: 'Titanium', quantity: 10000 },
      { name: 'Carbon Fiber', quantity: 15000 },
      { name: 'Plastic', quantity: 5000 },
      { name: 'Glass', quantity: 3000 },
    ],
  },
  {
    productType: 'Bullet Train',
    components: [
      { name: 'Steel', quantity: 100000 },
      { name: 'Aluminum', quantity: 50000 },
      { name: 'Copper', quantity: 10000 },
      { name: 'Glass', quantity: 20000 },
      { name: 'Plastic', quantity: 15000 },
    ],
  },
];

// Export the transportation array
export default transportation;