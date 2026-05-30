const altorProducts = [
  {
    id: "aerofit-compression-tee",
    name: "AeroFit Compression Tee",
    category: "Compression T Shirts",
    price: 799,
    rating: 4.6,
    image: "assets/compression-tshirts.png",
    short: "A close fit compression tee for gym sessions, warmups, and daily training.",
    specs: [
      "Breathable compression knit",
      "Flatlock seams for low-friction movement",
      "Four-way stretch recovery",
      "Best for lifting, HIIT, and indoor training",
    ],
  },
  {
    id: "coreflex-gym-bottoms",
    name: "CoreFlex Gym Bottoms",
    category: "Gym Bottoms",
    price: 1299,
    rating: 4.8,
    image: "assets/gym-bottoms.png",
    short: "Tapered gym bottoms with secure stretch and clean pocket detailing.",
    specs: [
      "Matte stretch woven fabric",
      "Elastic waist with drawcord",
      "Zipper side pocket",
      "Best for weight training, travel, and recovery days",
    ],
  },
  {
    id: "stridepro-running-compression",
    name: "StridePro Running Compression",
    category: "Running Compressions",
    price: 1899,
    rating: 4.9,
    image: "assets/running-compressions.png",
    short: "Aerodynamic compression layers for distance, tempo runs, and cool starts.",
    specs: [
      "Supportive running compression panels",
      "Vent zones behind knees and under arms",
      "Reflective seam detailing",
      "Best for road running, intervals, and long-distance training",
    ],
  },
];

const formatPrice = (price) => `Rs. ${price.toLocaleString("en-IN")}`;

const ratingText = (rating) => `${rating.toFixed(1)} / 5`;
