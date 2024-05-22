const electronics = [
  {
    productType: 'Smartphone',
    components: [
      { name: 'Silicon', quantity: 2 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Glass', quantity: 1 },
      { name: 'Gold', quantity: 0.02 },
      { name: 'Plastic', quantity: 1 },
    ],
  },
  {
    productType: 'Laptop',
    components: [
      { name: 'Silicon', quantity: 3 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Glass', quantity: 1 },
      { name: 'Copper', quantity: 1 },
      { name: 'Plastic', quantity: 2 },
    ],
  },
  {
    productType: 'Television',
    components: [
      { name: 'Glass', quantity: 3 },
      { name: 'Plastic', quantity: 4 },
      { name: 'Copper', quantity: 1 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
    ],
  },
  {
    productType: 'Smartwatch',
    components: [
      { name: 'Silicon', quantity: 1 },
      { name: 'Aluminum', quantity: 0.5 },
      { name: 'Glass', quantity: 0.5 },
      { name: 'Gold', quantity: 0.01 },
      { name: 'Plastic', quantity: 1 },
    ],
  },
  {
    productType: 'Tablet',
    components: [
      { name: 'Silicon', quantity: 2 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Glass', quantity: 1 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Digital Camera',
    components: [
      { name: 'Silicon', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Glass', quantity: 2 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Drone',
    components: [
      { name: 'Carbon Fiber', quantity: 2 },
      { name: 'Plastic', quantity: 2 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Gaming Console',
    components: [
      { name: 'Silicon', quantity: 2 },
      { name: 'Plastic', quantity: 3 },
      { name: 'Copper', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Glass', quantity: 1 },
    ],
  },
  {
    productType: 'Smart Speaker',
    components: [
      { name: 'Plastic', quantity: 2 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Glass', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
    ],
  },
  {
    productType: 'Fitness Tracker',
    components: [
      { name: 'Silicon', quantity: 1 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Glass', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
    ],
  },
  {
    productType: 'Robot Vacuum',
    components: [
      { name: 'Plastic', quantity: 3 },
      { name: 'Steel', quantity: 2 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Copper', quantity: 1 },
      { name: 'Rubber', quantity: 1 },
    ],
  },
  {
    productType: '3D Printer',
    components: [
      { name: 'Plastic', quantity: 3 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Glass', quantity: 1 },
      { name: 'Copper', quantity: 1 },
    ],
  },
  {
    productType: 'Smart Thermostat',
    components: [
      { name: 'Plastic', quantity: 2 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Glass', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
    ],
  },
  {
    productType: 'Virtual Reality Headset',
    components: [
      { name: 'Plastic', quantity: 2 },
      { name: 'Silicon', quantity: 2 },
      { name: 'Glass', quantity: 2 },
      { name: 'Copper', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
    ],
  },
  {
    productType: 'Smart Door Lock',
    components: [
      { name: 'Steel', quantity: 1 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
    ],
  },
  {
    productType: 'Security Camera',
    components: [
      { name: 'Plastic', quantity: 2 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Glass', quantity: 1 },
      { name: 'Copper', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
    ],
  },
  {
    productType: 'Smart Light Bulb',
    components: [
      { name: 'Glass', quantity: 1 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Silicon', quantity: 0.5 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
    ],
  },
  {
    productType: 'Smart Scale',
    components: [
      { name: 'Plastic', quantity: 2 },
      { name: 'Glass', quantity: 1 },
      { name: 'Copper', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
      { name: 'Silicon', quantity: 0.5 },
    ],
  },
  {
    productType: 'Smart Plug',
    components: [
      { name: 'Plastic', quantity: 1 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Glass', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
    ],
  },
  {
    productType: 'Smart Mirror',
    components: [
      { name: 'Glass', quantity: 2 },
      { name: 'Plastic', quantity: 1 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Copper', quantity: 0.5 },
      { name: 'Aluminum', quantity: 0.5 },
    ],
  },
  {
    productType: 'Smart Doorbell',
    components: [
      { name: 'Plastic', quantity: 2 },
      { name: 'Silicon', quantity: 1 },
      { name: 'Glass', quantity: 1 },
      { name: 'Copper', quantity: 1 },
      { name: 'Aluminum', quantity: 1 },
    ],
  },
  {
    productType: 'Advanced Laptop',
    components: [
      { name: 'Graphene', quantity: 5 },
      { name: 'Silver', quantity: 3 },
      { name: 'Aluminum', quantity: 4 },
      { name: 'Lithium', quantity: 2 },
      { name: 'Fiberglass', quantity: 3 },
    ],
  },
  {
    productType: 'Smart TV',
    components: [
      { name: 'Gold', quantity: 2 },
      { name: 'Silver', quantity: 2 },
      { name: 'Graphene', quantity: 3 },
      { name: 'Fiberglass', quantity: 5 },
      { name: 'PVC', quantity: 3 },
    ],
  },
  {
    productType: 'Luxury Watch',
    components: [
      { name: 'Gold', quantity: 5 },
      { name: 'Diamond', quantity: 2 },
      { name: 'Platinum', quantity: 3 },
      { name: 'Ceramic', quantity: 2 },
      { name: 'Silk', quantity: 1 },
    ],
  },
  {
    productType: 'High-end Smartphone',
    components: [
      { name: 'Gold', quantity: 1 },
      { name: 'Silver', quantity: 2 },
      { name: 'Graphene', quantity: 2 },
      { name: 'Fiberglass', quantity: 3 },
      { name: 'Lithium', quantity: 1 },
    ],
  },
  {
    productType: 'Smartwatch',
    components: [
      { name: 'Gold', quantity: 1 },
      { name: 'Silver', quantity: 1 },
      { name: 'Graphene', quantity: 2 },
      { name: 'Fiberglass', quantity: 2 },
      { name: 'Lithium', quantity: 1 },
    ],
  },
  {
    productType: 'Smart Refrigerator',
    components: [
      { name: 'Graphene', quantity: 5 },
      { name: 'Fiberglass', quantity: 4 },
      { name: 'Aluminum', quantity: 3 },
      { name: 'PVC', quantity: 2 },
      { name: 'Silicon', quantity: 3 },
    ],
  },
  {
    productType: 'Luxury Bed',
    components: [
      { name: 'Silk', quantity: 20 },
      { name: 'Cotton', quantity: 15 },
      { name: 'Wool', quantity: 10 },
      { name: 'Bamboo', quantity: 10 },
      { name: 'Gold', quantity: 5 },
    ],
  },
  {
    productType: 'Luxury Sofa',
    components: [
      { name: 'Leather', quantity: 20 },
      { name: 'Gold', quantity: 10 },
      { name: 'Silver', quantity: 10 },
      { name: 'Bamboo', quantity: 15 },
      { name: 'Cotton', quantity: 10 },
    ],
  },
  {
    productType: 'Wireless Earbuds',
    components: [
      { name: 'Graphene', quantity: 2 },
      { name: 'Fiberglass', quantity: 2 },
      { name: 'Aluminum', quantity: 2 },
      { name: 'PVC', quantity: 1 },
      { name: 'Silicon', quantity: 1 },
    ],
  },
  {
    productType: 'Solar Power Generator',
    components: [
      { name: 'Fiber Optics', quantity: 40 },
      { name: 'Boron', quantity: 30 },
      { name: 'Neodymium', quantity: 20 },
      { name: 'Aluminum', quantity: 50 },
      { name: 'Sulfuric Acid', quantity: 10 },
    ],
  },
  {
    productType: 'Advanced Computer Processor',
    components: [
      { name: 'Silicon', quantity: 50 },
      { name: 'Gallium', quantity: 30 },
      { name: 'Indium', quantity: 20 },
      { name: 'Ruthenium', quantity: 10 },
      { name: 'Sulfuric Acid', quantity: 10 },
    ],
  },
  {
    productType: 'Quantum Computer',
    components: [
      { name: 'Silicon', quantity: 50 },
      { name: 'Gallium', quantity: 30 },
      { name: 'Indium', quantity: 20 },
      { name: 'Europium', quantity: 10 },
      { name: 'Sulfuric Acid', quantity: 10 },
    ],
  },
  {
    productType: 'Advanced Medical Scanner',
    components: [
      { name: 'Fiber Optics', quantity: 40 },
      { name: 'Neodymium', quantity: 30 },
      { name: 'Molybdenum', quantity: 20 },
      { name: 'Samarium', quantity: 10 },
      { name: 'Sulfuric Acid', quantity: 10 },
    ],
  },
  {
    productType: 'High-Efficiency Solar Panel',
    components: [
      { name: 'Silicon', quantity: 50 },
      { name: 'Gallium', quantity: 30 },
      { name: 'Indium', quantity: 20 },
      { name: 'Ruthenium', quantity: 10 },
      { name: 'Sulfuric Acid', quantity: 10 },
    ],
  },
  {
    productType: 'Advanced Supercomputer',
    components: [
      { name: 'Silicon', quantity: 50 },
      { name: 'Gallium', quantity: 30 },
      { name: 'Indium', quantity: 20 },
      { name: 'Ruthenium', quantity: 10 },
      { name: 'Sulfuric Acid', quantity: 10 },
    ],
  },
  {
    productType: 'Next-Gen Artificial Intelligence',
    components: [
      { name: 'Silicon', quantity: 50 },
      { name: 'Gallium', quantity: 30 },
      { name: 'Indium', quantity: 20 },
      { name: 'Ruthenium', quantity: 10 },
      { name: 'Sulfuric Acid', quantity: 10 },
    ],
  },
];
// Export the electronics array
export default electronics;