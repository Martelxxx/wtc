const allConsumerGoods = [
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
      productType: 'Refrigerator',
      components: [
        { name: 'Steel', quantity: 8 },
        { name: 'Plastic', quantity: 5 },
        { name: 'Copper', quantity: 2 },
        { name: 'Glass', quantity: 1 },
        { name: 'Aluminum', quantity: 1 },
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
      productType: 'Washing Machine',
      components: [
        { name: 'Steel', quantity: 7 },
        { name: 'Plastic', quantity: 4 },
        { name: 'Copper', quantity: 2 },
        { name: 'Rubber', quantity: 1 },
        { name: 'Glass', quantity: 1 },
      ],
    },
    {
      productType: 'Microwave Oven',
      components: [
        { name: 'Steel', quantity: 3 },
        { name: 'Plastic', quantity: 2 },
        { name: 'Glass', quantity: 1 },
        { name: 'Copper', quantity: 1 },
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
      productType: 'Air Conditioner',
      components: [
        { name: 'Steel', quantity: 5 },
        { name: 'Copper', quantity: 3 },
        { name: 'Aluminum', quantity: 2 },
        { name: 'Plastic', quantity: 3 },
        { name: 'Glass', quantity: 1 },
      ],
    },
    {
      productType: 'Electric Drill',
      components: [
        { name: 'Steel', quantity: 2 },
        { name: 'Plastic', quantity: 2 },
        { name: 'Copper', quantity: 1 },
        { name: 'Rubber', quantity: 1 },
        { name: 'Aluminum', quantity: 1 },
      ],
    },
    {
      productType: 'Hair Dryer',
      components: [
        { name: 'Plastic', quantity: 2 },
        { name: 'Copper', quantity: 1 },
        { name: 'Aluminum', quantity: 1 },
        { name: 'Glass', quantity: 1 },
        { name: 'Rubber', quantity: 0.5 },
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
      productType: 'Coffee Maker',
      components: [
        { name: 'Steel', quantity: 2 },
        { name: 'Plastic', quantity: 2 },
        { name: 'Glass', quantity: 1 },
        { name: 'Copper', quantity: 1 },
        { name: 'Aluminum', quantity: 1 },
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
      productType: 'Smart Refrigerator',
      components: [
        { name: 'Steel', quantity: 5 },
        { name: 'Plastic', quantity: 3 },
        { name: 'Copper', quantity: 2 },
        { name: 'Glass', quantity: 1 },
        { name: 'Aluminum', quantity: 1 },
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
        productType: 'Designer Dress',
        components: [
          { name: 'Silk', quantity: 10 },
          { name: 'Cotton', quantity: 5 },
          { name: 'Wool', quantity: 3 },
          { name: 'Nylon', quantity: 2 },
          { name: 'Gold', quantity: 1 },
        ],
      },
      {
        productType: 'Ceramic Vase',
        components: [
          { name: 'Ceramic', quantity: 10 },
          { name: 'Gold', quantity: 1 },
          { name: 'Platinum', quantity: 1 },
          { name: 'Graphene', quantity: 1 },
          { name: 'Fiberglass', quantity: 1 },
        ],
      },
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
        productType: 'Luxury Handbag',
        components: [
          { name: 'Leather', quantity: 10 },
          { name: 'Gold', quantity: 2 },
          { name: 'Silver', quantity: 3 },
          { name: 'Nylon', quantity: 2 },
          { name: 'Silk', quantity: 1 },
        ],
      },
      {
        productType: 'Designer Sunglasses',
        components: [
          { name: 'Polycarbonate', quantity: 5 },
          { name: 'Gold', quantity: 1 },
          { name: 'Platinum', quantity: 1 },
          { name: 'Graphene', quantity: 1 },
          { name: 'Silk', quantity: 1 },
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
        productType: 'Gaming Console',
        components: [
          { name: 'Graphene', quantity: 4 },
          { name: 'Silver', quantity: 2 },
          { name: 'Aluminum', quantity: 3 },
          { name: 'Lithium', quantity: 1 },
          { name: 'Polycarbonate', quantity: 3 },
        ],
      },
      {
        productType: 'Luxury Necklace',
        components: [
          { name: 'Gold', quantity: 10 },
          { name: 'Diamond', quantity: 5 },
          { name: 'Platinum', quantity: 3 },
          { name: 'Graphene', quantity: 2 },
          { name: 'Silk', quantity: 1 },
        ],
      },
      {
        productType: 'Solar Panel',
        components: [
          { name: 'Graphene', quantity: 5 },
          { name: 'Silicon', quantity: 10 },
          { name: 'Fiberglass', quantity: 5 },
          { name: 'Aluminum', quantity: 3 },
          { name: 'PVC', quantity: 2 },
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
        productType: 'High-performance Drone',
        components: [
          { name: 'Graphene', quantity: 3 },
          { name: 'Fiberglass', quantity: 3 },
          { name: 'Aluminum', quantity: 4 },
          { name: 'Lithium', quantity: 2 },
          { name: 'PVC', quantity: 1 },
        ],
      },
      {
        productType: 'Luxury Earrings',
        components: [
          { name: 'Gold', quantity: 2 },
          { name: 'Diamond', quantity: 1 },
          { name: 'Platinum', quantity: 1 },
          { name: 'Graphene', quantity: 1 },
          { name: 'Silk', quantity: 1 },
        ],
      },
      {
        productType: 'Luxury Pen',
        components: [
          { name: 'Gold', quantity: 1 },
          { name: 'Silver', quantity: 1 },
          { name: 'Graphene', quantity: 1 },
          { name: 'Plastic', quantity: 1 },
          { name: 'Silk', quantity: 1 },
        ],
      },
      {
        productType: 'Smart Thermostat',
        components: [
          { name: 'Graphene', quantity: 2 },
          { name: 'Fiberglass', quantity: 2 },
          { name: 'Aluminum', quantity: 2 },
          { name: 'PVC', quantity: 1 },
          { name: 'Silicon', quantity: 1 },
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
        productType: 'Electric Scooter',
        components: [
          { name: 'Aluminum', quantity: 10 },
          { name: 'Graphene', quantity: 5 },
          { name: 'Lithium', quantity: 3 },
          { name: 'Rubber Wood', quantity: 7 },
          { name: 'Polycarbonate', quantity: 4 },
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
        productType: 'Luxury Yacht',
        components: [
          { name: 'Aluminum', quantity: 100 },
          { name: 'Fiberglass', quantity: 50 },
          { name: 'Gold', quantity: 20 },
          { name: 'Silk', quantity: 10 },
          { name: 'Platinum', quantity: 10 },
        ],
      },
      {
          productType: 'Laser Engraved Marble Trophy',
          components: [
            { name: 'Marble', quantity: 5 },
            { name: 'Fiber Optics', quantity: 2 },
            { name: 'Carbon Steel', quantity: 3 },
            { name: 'Brass', quantity: 2 },
            { name: 'Acrylic', quantity: 2 },
          ],
        },
        {
          productType: 'High-Precision Medical Device',
          components: [
            { name: 'Titanium', quantity: 4 },
            { name: 'Fiber Optics', quantity: 3 },
            { name: 'Boron', quantity: 2 },
            { name: 'Tungsten', quantity: 3 },
            { name: 'Acrylic', quantity: 1 },
          ],
        },
        {
          productType: 'Heat Resistant Industrial Pump',
          components: [
            { name: 'Carbon Steel', quantity: 5 },
            { name: 'Boron', quantity: 2 },
            { name: 'Sulfuric Acid', quantity: 1 },
            { name: 'Concrete', quantity: 3 },
            { name: 'Osmium', quantity: 1 },
          ],
        },
        {
          productType: 'Luxury Kitchen Countertop',
          components: [
            { name: 'Granite', quantity: 7 },
            { name: 'Marble', quantity: 3 },
            { name: 'Brass', quantity: 2 },
            { name: 'Neon', quantity: 1 },
            { name: 'Sulfuric Acid', quantity: 1 },
          ],
        },
        {
          productType: 'Electric Jet Engine',
          components: [
            { name: 'Carbon Steel', quantity: 60 },
            { name: 'Molybdenum', quantity: 40 },
            { name: 'Tungsten', quantity: 30 },
            { name: 'Cerium', quantity: 20 },
            { name: 'Uranium', quantity: 10 },
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
          productType: 'High-Performance Electric Car',
          components: [
            { name: 'Carbon Steel', quantity: 50 },
            { name: 'Lithium', quantity: 30 },
            { name: 'Cerium', quantity: 20 },
            { name: 'Brass', quantity: 20 },
            { name: 'Uranium', quantity: 10 },
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
          productType: 'Precision Industrial Drill',
          components: [
            { name: 'Carbon Steel', quantity: 60 },
            { name: 'Molybdenum', quantity: 40 },
            { name: 'Tungsten', quantity: 30 },
            { name: 'Lanthanum', quantity: 20 },
            { name: 'Sulfuric Acid', quantity: 10 },
          ],
        },
        {
          productType: 'Advanced Robotics System',
          components: [
            { name: 'Carbon Steel', quantity: 50 },
            { name: 'Neodymium', quantity: 30 },
            { name: 'Fiber Optics', quantity: 20 },
            { name: 'Rhodium', quantity: 10 },
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
          productType: 'High-Power Laser Cutter',
          components: [
            { name: 'Carbon Steel', quantity: 60 },
            { name: 'Tungsten', quantity: 40 },
            { name: 'Boron', quantity: 30 },
            { name: 'Sulfuric Acid', quantity: 10 },
            { name: 'Ruthenium', quantity: 10 },
          ],
        },
        {
          productType: 'Advanced Space Telescope',
          components: [
            { name: 'Carbon Steel', quantity: 50 },
            { name: 'Fiber Optics', quantity: 30 },
            { name: 'Boron', quantity: 20 },
            { name: 'Ruthenium', quantity: 10 },
            { name: 'Sulfuric Acid', quantity: 10 },
          ],
        },
        {
          productType: 'High-Strength Industrial Cable',
          components: [
            { name: 'Carbon Steel', quantity: 50 },
            { name: 'Fiber Optics', quantity: 30 },
            { name: 'Neodymium', quantity: 20 },
            { name: 'Ruthenium', quantity: 10 },
            { name: 'Sulfuric Acid', quantity: 10 },
          ],
        },
        {
          productType: 'Superconductor',
          components: [
            { name: 'Yttrium', quantity: 40 },
            { name: 'Boron', quantity: 30 },
            { name: 'Copper', quantity: 20 },
            { name: 'Sulfuric Acid', quantity: 10 },
            { name: 'Ruthenium', quantity: 10 },
          ],
        },
        {
          productType: 'Advanced Nuclear Reactor',
          components: [
            { name: 'Carbon Steel', quantity: 600 },
            { name: 'Uranium', quantity: 400 },
            { name: 'Boron', quantity: 300 },
            { name: 'Sulfuric Acid', quantity: 100 },
            { name: 'Ruthenium', quantity: 100 },
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
        {
          productType: 'Advanced Industrial Robot',
          components: [
            { name: 'Carbon Steel', quantity: 50 },
            { name: 'Neodymium', quantity: 30 },
            { name: 'Fiber Optics', quantity: 20 },
            { name: 'Ruthenium', quantity: 10 },
            { name: 'Sulfuric Acid', quantity: 10 },
          ],
        },
        {
          productType: 'High-Precision Laser Cutter',
          components: [
            { name: 'Carbon Steel', quantity: 60 },
            { name: 'Tungsten', quantity: 40 },
            { name: 'Boron', quantity: 30 },
            { name: 'Sulfuric Acid', quantity: 10 },
            { name: 'Ruthenium', quantity: 10 },
          ],
        },
        {
          productType: 'Advanced Industrial Printer',
          components: [
            { name: 'Carbon Steel', quantity: 50 },
            { name: 'Fiber Optics', quantity: 30 },
            { name: 'Neodymium', quantity: 20 },
              { name: 'Ruthenium', quantity: 10 },
              { name: 'Sulfuric Acid', quantity: 10 },
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
                productType: 'Electric Bike',
                components: [
                  { name: 'Aluminum', quantity: 200 },
                  { name: 'Plastic', quantity: 100 },
                  { name: 'Lithium', quantity: 50 },
                  { name: 'Rubber', quantity: 100 },
                  { name: 'Copper', quantity: 30 },
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
                name: 'Shotgun',
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
                name: 'Bazooka',
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
                    {
                      productType: 'Pain Reliever',
                      components: [
                        { name: 'Acetylsalicylic Acid (Aspirin)', quantity: 10 },
                        { name: 'Paracetamol (Acetaminophen)', quantity: 5 },
                      ],
                    },
                    {
                      productType: 'Anti-Inflammatory',
                      components: [
                        { name: 'Ibuprofen', quantity: 8 },
                        { name: 'Ciprofloxacin', quantity: 2 },
                      ],
                    },
                    {
                      productType: 'Antibiotic',
                      components: [
                        { name: 'Amoxicillin', quantity: 15 },
                        { name: 'Ciprofloxacin', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Cholesterol Reducer',
                      components: [
                        { name: 'Atorvastatin', quantity: 25 },
                        { name: 'Simvastatin', quantity: 20 },
                      ],
                    },
                    {
                      productType: 'Diabetes Management',
                      components: [
                        { name: 'Metformin', quantity: 20 },
                        { name: 'Glimepiride', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Blood Pressure Control',
                      components: [
                        { name: 'Lisinopril', quantity: 15 },
                        { name: 'Losartan', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Antiplatelet',
                      components: [
                        { name: 'Clopidogrel', quantity: 18 },
                        { name: 'Aspirin', quantity: 8 },
                      ],
                    },
                    {
                      productType: 'Heartburn Relief',
                      components: [
                        { name: 'Omeprazole', quantity: 20 },
                        { name: 'Ranitidine', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Allergy Relief',
                      components: [
                        { name: 'Cetirizine', quantity: 12 },
                        { name: 'Loratadine', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Asthma Control',
                      components: [
                        { name: 'Salbutamol', quantity: 15 },
                        { name: 'Budesonide', quantity: 20 },
                      ],
                    },
                    {
                      productType: 'Steroid',
                      components: [
                        { name: 'Prednisone', quantity: 25 },
                        { name: 'Mometasone', quantity: 20 },
                      ],
                    },
                    {
                      productType: 'Thyroid Hormone Replacement',
                      components: [
                        { name: 'Levothyroxine', quantity: 30 },
                      ],
                    },
                    {
                      productType: 'Anti-Diarrheal',
                      components: [
                        { name: 'Loperamide', quantity: 10 },
                        { name: 'Bismuth Subsalicylate', quantity: 5 },
                      ],
                    },
                    {
                      productType: 'Antidepressant',
                      components: [
                        { name: 'Sertraline', quantity: 20 },
                        { name: 'Fluoxetine', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Antipsychotic',
                      components: [
                        { name: 'Olanzapine', quantity: 25 },
                        { name: 'Quetiapine', quantity: 20 },
                      ],
                    },
                    {
                      productType: 'Antiviral',
                      components: [
                        { name: 'Oseltamivir', quantity: 20 },
                        { name: 'Zanamivir', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Muscle Relaxant',
                      components: [
                        { name: 'Cyclobenzaprine', quantity: 10 },
                        { name: 'Methocarbamol', quantity: 8 },
                      ],
                    },
                    {
                      productType: 'Opioid Pain Reliever',
                      components: [
                        { name: 'Oxycodone', quantity: 30 },
                        { name: 'Hydrocodone', quantity: 20 },
                      ],
                    },
                    {
                      productType: 'Cough Suppressant',
                      components: [
                        { name: 'Dextromethorphan', quantity: 12 },
                        { name: 'Codeine', quantity: 8 },
                      ],
                    },
                    {
                      productType: 'Antihistamine',
                      components: [
                        { name: 'Diphenhydramine', quantity: 15 },
                        { name: 'Chlorpheniramine', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Anxiolytic',
                      components: [
                        { name: 'Diazepam', quantity: 20 },
                        { name: 'Alprazolam', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Sedative',
                      components: [
                        { name: 'Lorazepam', quantity: 10 },
                        { name: 'Midazolam', quantity: 8 },
                      ],
                    },
                    {
                      productType: 'Bronchodilator',
                      components: [
                        { name: 'Ipratropium', quantity: 12 },
                        { name: 'Tiotropium', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Anticonvulsant',
                      components: [
                        { name: 'Valproic Acid', quantity: 20 },
                        { name: 'Carbamazepine', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Antifungal',
                      components: [
                        { name: 'Fluconazole', quantity: 20 },
                        { name: 'Ketoconazole', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Chemotherapy',
                      components: [
                        { name: 'Cisplatin', quantity: 25 },
                        { name: 'Doxorubicin', quantity: 20 },
                      ],
                    },
                    {
                      productType: 'Immunosuppressant',
                      components: [
                        { name: 'Tacrolimus', quantity: 30 },
                        { name: 'Cyclosporine', quantity: 25 },
                      ],
                    },
                    {
                      productType: 'Hormonal Contraceptive',
                      components: [
                        { name: 'Ethinylestradiol', quantity: 10 },
                        { name: 'Levonorgestrel', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Erectile Dysfunction',
                      components: [
                        { name: 'Sildenafil', quantity: 20 },
                        { name: 'Tadalafil', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Anti-Malaria',
                      components: [
                        { name: 'Chloroquine', quantity: 25 },
                        { name: 'Mefloquine', quantity: 20 },
                      ],
                    },
                    {
                      productType: 'Weight Loss',
                      components: [
                        { name: 'Orlistat', quantity: 15 },
                        { name: 'Phentermine', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Methamphetamine',
                      components: [
                        { name: 'Pseudoephedrine', quantity: 20 },
                        { name: 'Lithium', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'MDMA (Ecstasy)',
                      components: [
                        { name: 'Safrole', quantity: 20 },
                        { name: 'Isosafrole', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Cocaine',
                      components: [
                        { name: 'Coca Leaves', quantity: 25 },
                        { name: 'Sulfuric Acid', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Heroin',
                      components: [
                        { name: 'Morphine', quantity: 20 },
                        { name: 'Acetic Anhydride', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'LSD',
                      components: [
                        { name: 'Ergotamine', quantity: 10 },
                        { name: 'Diethylamide', quantity: 5 },
                      ],
                    },
                    {
                      productType: 'Amphetamine',
                      components: [
                        { name: 'Phenylacetone', quantity: 20 },
                        { name: 'Hydriodic Acid', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Ketamine',
                      components: [
                        { name: 'Cyclohexanone', quantity: 15 },
                        { name: 'Bromine', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'GHB',
                      components: [
                        { name: 'Gamma-Butyrolactone', quantity: 15 },
                        { name: 'Sodium Hydroxide', quantity: 10 },
                      ],
                    },
                    {
                      productType: 'Fentanyl',
                      components: [
                        { name: 'N-Phenethyl-4-piperidone', quantity: 20 },
                        { name: 'Aniline', quantity: 15 },
                      ],
                    },
                    {
                      productType: 'Methadone',
                      components: [
                        { name: 'Diphenylacetonitrile', quantity: 15 },
                        { name: 'Phenylacetic Acid', quantity: 10 },
                        ],
                    },
];

// export the consumerGoods array
export default allConsumerGoods;