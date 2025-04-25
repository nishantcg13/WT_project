export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  featured: boolean;
  description: string;
  specifications: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Pro X Basketball",
    category: "Basketball",
    price: 89.99,
    rating: 4.8,
    image: "/src/assets/images/basketball.jpeg",
    featured: true,
    description: "Professional-grade basketball with superior grip and durability. Used by top college and professional athletes.",
    specifications: [
      "Size 7 (29.5\" circumference)",
      "Composite leather cover",
      "Deep channel design for better grip",
      "Butyl bladder for maximum air retention",
      "Indoor/outdoor use"
    ]
  },
  {
    id: 2,
    name: "Carbon Fiber Tennis Racket",
    category: "Tennis",
    price: 199.99,
    rating: 4.9,
    image: "/src/assets/images/tennis-racket.jpeg",
    featured: true,
    description: "Lightweight carbon fiber tennis racket designed for power and control. Perfect for intermediate to advanced players.",
    specifications: [
      "Head Size: 100 sq. inches",
      "Weight: 300g",
      "String Pattern: 16x19",
      "Beam Width: 23mm",
      "Balance: 4 pts HL"
    ]
  },
  {
    id: 3,
    name: "Elite Runner Shoes",
    category: "Running",
    price: 129.99,
    rating: 4.7,
    image: "/src/assets/images/runner-shoes.jpeg",
    featured: true,
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for long-distance comfort.",
    specifications: [
      "Weight: 8.5 oz",
      "Drop: 10mm",
      "Breathable mesh upper",
      "Responsive foam midsole",
      "Durable rubber outsole"
    ]
  },
  {
    id: 4,
    name: "Professional Soccer Ball",
    category: "Soccer",
    price: 49.99,
    rating: 4.6,
    image: "/src/assets/images/soccer-ball.jpeg",
    featured: false,
    description: "FIFA-approved soccer ball with excellent flight control and durability. Ideal for matches and training.",
    specifications: [
      "Size 5 (standard match size)",
      "Thermally bonded panels",
      "Textured surface for better grip",
      "Butyl bladder for air retention",
      "Water-resistant design"
    ]
  },
  {
    id: 5,
    name: "Performance Golf Clubs Set",
    category: "Golf",
    price: 799.99,
    rating: 4.8,
    image: "/src/assets/images/golf-clubs.jpeg",
    featured: false,
    description: "Complete set of high-performance golf clubs for players of all skill levels. Includes driver, irons, and putter.",
    specifications: [
      "Driver with adjustable loft",
      "Stainless steel irons",
      "Mallet-style putter",
      "Lightweight carry bag",
      "Graphite shafts for added flexibility"
    ]
  },
  {
    id: 6,
    name: "Olympic Weight Set",
    category: "Weightlifting",
    price: 499.99,
    rating: 4.9,
    image: "/src/assets/images/weight-set.jpeg",
    featured: true,
    description: "High-quality Olympic weight set with durable plates and barbell. Perfect for strength training.",
    specifications: [
      "Includes 45lb barbell",
      "Rubber-coated plates",
      "Weight range: 2.5lb to 45lb",
      "Knurled grip for better handling",
      "Compatible with standard racks"
    ]
  },
  {
    id: 7,
    name: "Mountain Bike",
    category: "Cycling",
    price: 999.99,
    rating: 4.7,
    image: "/src/assets/images/mountain-bike.jpeg",
    featured: false,
    description: "Durable mountain bike with full suspension and disc brakes. Designed for off-road adventures.",
    specifications: [
      "Frame: Aluminum alloy",
      "Suspension: Front and rear",
      "Brakes: Hydraulic disc",
      "Tires: 27.5\" all-terrain",
      "Gears: 21-speed Shimano"
    ]
  },
  {
    id: 8,
    name: "Swimming Goggles",
    category: "Swimming",
    price: 29.99,
    rating: 4.5,
    image: "/src/assets/images/swimming-goggles.jpeg",
    featured: false,
    description: "Anti-fog swimming goggles with UV protection and adjustable straps. Suitable for all ages.",
    specifications: [
      "Anti-fog coating",
      "UV protection",
      "Adjustable silicone straps",
      "Wide-angle lenses",
      "Leak-proof design"
    ]
  },
  {
    id: 9,
    name: "Boxing Gloves",
    category: "Boxing",
    price: 59.99,
    rating: 4.6,
    image: "/src/assets/images/boxing-gloves.jpeg",
    featured: false,
    description: "Premium boxing gloves with multi-layer foam padding for maximum protection. Ideal for training and sparring.",
    specifications: [
      "Material: Synthetic leather",
      "Closure: Hook-and-loop",
      "Padding: Multi-layer foam",
      "Weight: 12oz, 14oz, 16oz",
      "Breathable mesh panels"
    ]
  },
  {
    id: 10,
    name: "Yoga Mat",
    category: "Yoga",
    price: 39.99,
    rating: 4.8,
    image: "/src/assets/images/yoga-mat.jpeg",
    featured: true,
    description: "Eco-friendly yoga mat with non-slip surface and extra cushioning. Perfect for all types of yoga.",
    specifications: [
      "Material: TPE",
      "Thickness: 6mm",
      "Non-slip surface",
      "Lightweight and portable",
      "Free carrying strap included"
    ]
  },
  {
    id: 11,
    name: "Badminton Racket Set",
    category: "Badminton",
    price: 79.99,
    rating: 4.7,
    image: "/src/assets/images/badminton-racket.jpg",
    featured: false,
    description: "High-performance badminton racket set with shuttlecocks. Designed for recreational and competitive play.",
    specifications: [
      "Frame: Carbon fiber",
      "Weight: 85g",
      "String Tension: 22-24 lbs",
      "Grip Size: G4",
      "Includes 3 shuttlecocks"
    ]
  },
  {
    id: 12,
    name: "Hockey Stick",
    category: "Hockey",
    price: 149.99,
    rating: 4.6,
    image: "/src/assets/images/hockey-stick.jpg",
    featured: false,
    description: "Lightweight hockey stick with reinforced blade for better control and durability. Suitable for all skill levels.",
    specifications: [
      "Material: Composite",
      "Length: 60 inches",
      "Flex: 85",
      "Blade Curve: Mid",
      "Grip: Textured"
    ]
  }
];

export const categories = [...new Set(products.map(product => product.category))];

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};