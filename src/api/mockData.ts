
// Company information
export const companyInfo = {
  name: "ANYOLI SDNBHD",
  address: "Jl. Raya Semarang-Demak km. 14, Tambakroto, Sayung, Batu Lor, Batu, Kec. Demak, Kabupaten Demak, Jawa Tengah 59563, Indonesia",
  phone: "+6684353543",
  email: "Rothof.corporation@gmail.com",
  overview: "ANYOLI SDNBHD has successfully exported a total of 386 shipments to 9 distinct buyers, with key markets including Mexico, Spain, and Germany. The primary product categories for these exports were based on HSN Codes 0901, 9802, and 9011. Notable buyers include Exportadora De Cafe California, Industrias Maquin Sa De Cv, and Nestle Mexico S.A. de C.V.\n\nANYOLI SDNBHD has imported 24,034 shipments from 619 suppliers across various regions. The main sources of these imports are Panama, Colombia, and Brazil. These imports largely consist of goods categorized under HSN Codes 0000, 0901, and 2101. Key suppliers include NKG Stockler Ltda, To Order Compania Cafetera La Meseta, and Federacion Nacional De Cacaoteros."
};

// Coffee industry info
export const coffeeInfo = {
  title: "Coffee",
  description: "In 2024, India's coffee trade experienced significant growth, marked by record-breaking exports and increased production. The country's coffee exports reached an unprecedented $1.684 billion, a 45% increase from $1.16 billion in 2023. This surge was driven by heightened global demand, particularly for Robusta coffee, and supply chain challenges faced by major coffee-producing nations like Brazil and Vietnam."
};

// Performance metrics
export const performanceStats = {
  growthRate: {
    value: "28.5%",
    label: "Growth Rate",
    sublabel: "(YoY)",
    trend: "up"
  },
  growth: {
    value: "56.2%",
    label: "Growth",
    sublabel: "(in terms of value)",
    trend: "up"
  },
  recordCount: {
    value: "15,234",
    label: "Record Count",
    trend: "neutral"
  },
  matchScore: {
    value: "4.5/5",
    label: "Match Score",
    trend: "up"
  },
  impactScore: {
    value: 4,
    label: "Impact Score",
    maxValue: 5,
    trend: "neutral"
  },
  valueSum: {
    value: "$12,234",
    label: "Value Sum",
    trend: "up"
  }
};

// Products comparison
export const productsComparison = {
  yourProducts: [
    { name: "Robusta AA", highlight: false },
    { name: "Kaapi Royale AA", highlight: false },
    { name: "Arabica", highlight: true },
    { name: "Cherry AA", highlight: true },
    { name: "Plantation AB", highlight: false }
  ],
  theirProducts: [
    { name: "Parchment AA", highlight: false },
    { name: "Kaapi Royale AAA", highlight: false },
    { name: "Arabica", highlight: true },
    { name: "Cherry AA", highlight: true },
    { name: "Plantation AAA", highlight: false }
  ],
  commonProducts: ["Arabica", "Cherry AA"]
};

// Supply chain analytics
export const supplyChainData = {
  capacity: {
    yourValue: "60 KGS",
    theirValue: "90 KGS",
    rating: 4,
    maxRating: 5
  },
  averageVolume: {
    yourValue: "60 KGS",
    theirValue: "90 KGS",
    rating: 4,
    maxRating: 5
  },
  unit: {
    yourValue: "$ 2.00",
    theirValue: "$ 6.00",
    rating: 4,
    maxRating: 5
  }
};

// Transit routes
export const transitRoutes = [
  {
    origin: {
      name: "Mangalore",
      country: "India",
      type: "Origin Location"
    },
    destination: {
      name: "Tuticorin Sea",
      country: "United States",
      type: "Destination Location"
    },
    distance: "4892 KM",
    estimatedTime: "9 Days",
    transportMode: "Sea Route",
    color: "blue"
  },
  {
    origin: {
      name: "Mangalore",
      country: "India",
      type: "Origin Location"
    },
    destination: {
      name: "Tuticorin Sea",
      country: "United States",
      type: "Destination Location"
    },
    distance: "4892 KM",
    estimatedTime: "7 Days",
    transportMode: "Sea Route",
    color: "yellow"
  }
];

// Performance graph data
export const performanceData = {
  totalValue: "$39,708,296K",
  monthlyData: [
    { month: "Jan", shipments: 10, value: 3.4 },
    { month: "Feb", shipments: 17, value: 5.2 },
    { month: "Mar", shipments: 10, value: 3.5 },
    { month: "Apr", shipments: 4, value: 1.6 },
    { month: "May", shipments: 8, value: 2.8 },
    { month: "Jun", shipments: 9, value: 3.0 },
    { month: "Jul", shipments: 15, value: 4.8 },
    { month: "Aug", shipments: 3, value: 1.5 },
    { month: "Sep", shipments: 18, value: 5.9 },
    { month: "Oct", shipments: 13, value: 4.6 },
    { month: "Nov", shipments: 12, value: 4.3 },
    { month: "Dec", shipments: 17, value: 5.7 }
  ],
  highlights: [
    {
      month: "Sept 2024",
      shipmentValue: "$5.9M",
      xPos: 8
    },
    {
      month: "May 2024",
      numShipments: "8",
      xPos: 4
    }
  ]
};

// Shipments table data
export const shipmentsTableData = {
  count: 412,
  value: "$1,234,567",
  months: [
    { name: "Jan", shipments: 50, growth: 5, value: 60, valueGrowth: 5 },
    { name: "Feb", shipments: 78, growth: -4, value: 60, valueGrowth: -4 },
    { name: "Mar", shipments: 40, growth: 5, value: 60, valueGrowth: 5 },
    { name: "Apr", shipments: 89, growth: 8, value: 60, valueGrowth: 8 },
    { name: "May", shipments: 30, growth: -1, value: 60, valueGrowth: -1 }
  ]
};

// API service structure
export const fetchCompanyInfo = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return companyInfo;
};

export const fetchCoffeeInfo = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return coffeeInfo;
};

export const fetchPerformanceStats = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return performanceStats;
};

export const fetchProductsComparison = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return productsComparison;
};

export const fetchSupplyChainData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return supplyChainData;
};

export const fetchTransitRoutes = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return transitRoutes;
};

export const fetchPerformanceData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return performanceData;
};

export const fetchShipmentsTableData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return shipmentsTableData;
};
