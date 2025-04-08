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
      month: "Sep 2024",
      shipmentValue: "$5.9M"
    },
    {
      month: "May 2024",
      numShipments: "8"
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
    { name: "May", shipments: 30, growth: -1, value: 60, valueGrowth: -1 },
    { name: "Jun", shipments: 45, growth: 3, value: 55, valueGrowth: 2 },
    { name: "Jul", shipments: 65, growth: 7, value: 70, valueGrowth: 4 },
    { name: "Aug", shipments: 35, growth: -2, value: 50, valueGrowth: -3 },
    { name: "Sep", shipments: 85, growth: 9, value: 75, valueGrowth: 6 },
    { name: "Oct", shipments: 60, growth: 4, value: 65, valueGrowth: 2 },
    { name: "Nov", shipments: 42, growth: -3, value: 58, valueGrowth: -2 },
    { name: "Dec", shipments: 75, growth: 6, value: 72, valueGrowth: 5 }
  ]
};

// Product variation data
export const productVariationData = {
  categories: [
    { id: "budget", label: "Budget" },
    { id: "mid-range", label: "Mid-Range" },
    { id: "premium", label: "Premium" },
    { id: "custom", label: "Custom" }
  ],
  data: {
    budget: [
      { month: "Jan", instant: 23, robusta: 16, flavoured: 12 },
      { month: "Feb", instant: 22, robusta: 14, flavoured: 10 },
      { month: "Mar", instant: 18, robusta: 11, flavoured: 6 },
      { month: "Apr", instant: 15, robusta: 8, flavoured: 3 },
      { month: "May", instant: 17, robusta: 11, flavoured: 7 },
      { month: "Jun", instant: 15, robusta: 8, flavoured: 5 },
      { month: "Jul", instant: 20, robusta: 14, flavoured: 10 },
      { month: "Aug", instant: 24, robusta: 15, flavoured: 7 },
      { month: "Sep", instant: 18, robusta: 15, flavoured: 9 },
      { month: "Oct", instant: 19, robusta: 18, flavoured: 8 },
      { month: "Nov", instant: 20, robusta: 13, flavoured: 10 },
      { month: "Dec", instant: 18, robusta: 14, flavoured: 12 }
    ],
    "mid-range": [
      { month: "Jan", instant: 28, robusta: 20, flavoured: 15 },
      { month: "Feb", instant: 26, robusta: 18, flavoured: 14 },
      { month: "Mar", instant: 22, robusta: 15, flavoured: 10 },
      { month: "Apr", instant: 19, robusta: 12, flavoured: 8 },
      { month: "May", instant: 21, robusta: 15, flavoured: 11 },
      { month: "Jun", instant: 20, robusta: 13, flavoured: 9 },
      { month: "Jul", instant: 25, robusta: 18, flavoured: 14 },
      { month: "Aug", instant: 28, robusta: 19, flavoured: 12 },
      { month: "Sep", instant: 23, robusta: 20, flavoured: 14 },
      { month: "Oct", instant: 24, robusta: 22, flavoured: 12 },
      { month: "Nov", instant: 25, robusta: 18, flavoured: 15 },
      { month: "Dec", instant: 22, robusta: 19, flavoured: 17 }
    ],
    premium: [
      { month: "Jan", instant: 35, robusta: 28, flavoured: 22 },
      { month: "Feb", instant: 33, robusta: 26, flavoured: 20 },
      { month: "Mar", instant: 30, robusta: 23, flavoured: 18 },
      { month: "Apr", instant: 28, robusta: 21, flavoured: 15 },
      { month: "May", instant: 29, robusta: 24, flavoured: 19 },
      { month: "Jun", instant: 27, robusta: 22, flavoured: 16 },
      { month: "Jul", instant: 32, robusta: 26, flavoured: 21 },
      { month: "Aug", instant: 36, robusta: 28, flavoured: 19 },
      { month: "Sep", instant: 31, robusta: 27, flavoured: 22 },
      { month: "Oct", instant: 32, robusta: 30, flavoured: 20 },
      { month: "Nov", instant: 33, robusta: 25, flavoured: 22 },
      { month: "Dec", instant: 30, robusta: 26, flavoured: 23 }
    ],
    custom: [
      { month: "Jan", instant: 30, robusta: 22, flavoured: 17 },
      { month: "Feb", instant: 29, robusta: 20, flavoured: 15 },
      { month: "Mar", instant: 25, robusta: 17, flavoured: 12 },
      { month: "Apr", instant: 22, robusta: 14, flavoured: 10 },
      { month: "May", instant: 24, robusta: 18, flavoured: 13 },
      { month: "Jun", instant: 23, robusta: 15, flavoured: 11 },
      { month: "Jul", instant: 27, robusta: 20, flavoured: 16 },
      { month: "Aug", instant: 32, robusta: 21, flavoured: 14 },
      { month: "Sep", instant: 26, robusta: 22, flavoured: 17 },
      { month: "Oct", instant: 28, robusta: 25, flavoured: 15 },
      { month: "Nov", instant: 29, robusta: 20, flavoured: 18 },
      { month: "Dec", instant: 26, robusta: 21, flavoured: 19 }
    ]
  },
  tooltipInfo: {
    visible: true,
    product: "Instant",
    month: "Oct",
    value: "$22.3"
  }
};

// Volume trend data
export const volumeTrendData = {
  units: [
    { value: "KGS", label: "KGS" },
    { value: "Tons", label: "Tons" },
    { value: "Pounds", label: "Pounds" }
  ],
  data: {
    KGS: [
      { month: "Jan", volume: 5500 },
      { month: "Feb", volume: 6000 },
      { month: "Mar", volume: 3000 },
      { month: "Apr", volume: 2000 },
      { month: "May", volume: 3500 },
      { month: "Jun", volume: 2300 },
      { month: "Jul", volume: 4600 },
      { month: "Aug", volume: 1500 },
      { month: "Sep", volume: 3500 },
      { month: "Oct", volume: 4100 },
      { month: "Nov", volume: 3800 },
      { month: "Dec", volume: 6200 }
    ],
    Tons: [
      { month: "Jan", volume: 5.5 },
      { month: "Feb", volume: 6.0 },
      { month: "Mar", volume: 3.0 },
      { month: "Apr", volume: 2.0 },
      { month: "May", volume: 3.5 },
      { month: "Jun", volume: 2.3 },
      { month: "Jul", volume: 4.6 },
      { month: "Aug", volume: 1.5 },
      { month: "Sep", volume: 3.5 },
      { month: "Oct", volume: 4.1 },
      { month: "Nov", volume: 3.8 },
      { month: "Dec", volume: 6.2 }
    ],
    Pounds: [
      { month: "Jan", volume: 12125 },
      { month: "Feb", volume: 13228 },
      { month: "Mar", volume: 6614 },
      { month: "Apr", volume: 4409 },
      { month: "May", volume: 7716 },
      { month: "Jun", volume: 5070 },
      { month: "Jul", volume: 10141 },
      { month: "Aug", volume: 3307 },
      { month: "Sep", volume: 7716 },
      { month: "Oct", volume: 9039 },
      { month: "Nov", volume: 8378 },
      { month: "Dec", volume: 13669 }
    ]
  },
  tooltipInfo: {
    visible: true,
    month: "July",
    value: "4.6K"
  }
};

// Suppliers data
export const suppliersData = {
  suppliers: [
    {
      id: 1,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 2,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 3,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 4,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 5,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 6,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 7,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 8,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 9,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 10,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 11,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    },
    {
      id: 12,
      name: "IKEA SUPPLY AG",
      country: "United States",
      rating: "8.0",
      comparisons: {
        unitRate: { you: "$2", supplier: "$2.5", status: "Slightly Lower", percentage: 30 },
        shipments: { you: "212", supplier: "314", status: "Slightly Higher", percentage: 70 },
        value: { you: "$1234", supplier: "$1234", status: "Equal", percentage: 50 }
      }
    }
  ],
  totalCount: 31
};

// Product flow data
export const productFlowData = {
  products: [
    {
      id: "72042190",
      suppliers: [
        {
          name: "Mukund Ltd.",
          shipments: "92",
          value: "$17,32,867"
        },
        {
          name: "Synergy Steels Ltd.",
          shipments: "78",
          value: "$12,76,543"
        },
        {
          name: "Jindal Stainless Pvt.",
          shipments: "63",
          value: "$9,82,321"
        }
      ]
    },
    {
      id: "76012010",
      suppliers: [
        {
          name: "Trijith International Pvt. Ltd.",
          shipments: "72",
          value: "$11,43,982"
        },
        {
          name: "CTZ Industries Pvt. Ltd.",
          shipments: "85",
          value: "$14,14,867"
        }
      ]
    },
    {
      id: "74031900",
      suppliers: [
        {
          name: "Jain recycling Pvt. Ltd.",
          shipments: "59",
          value: "$8,27,654"
        },
        {
          name: "Bolon Industries Ltd.",
          shipments: "64",
          value: "$10,23,456"
        },
        {
          name: "Jian Metal Rolling Mills",
          shipments: "71",
          value: "$11,87,543"
        }
      ]
    },
    {
      id: "82049010",
      suppliers: [
        {
          name: "Apex Metalworks Ltd.",
          shipments: "68",
          value: "$12,45,876"
        },
        {
          name: "Krishna Industries",
          shipments: "76",
          value: "$15,32,456"
        }
      ]
    },
    {
      id: "73044190",
      suppliers: [
        {
          name: "Sterling Pipes Pvt. Ltd.",
          shipments: "83",
          value: "$18,76,543"
        },
        {
          name: "Vishnu Steel Tubes",
          shipments: "65",
          value: "$11,23,457"
        },
        {
          name: "Phoenix Metal Products",
          shipments: "57",
          value: "$8,93,210"
        }
      ]
    }
  ],
  visibleProducts: 3
};

// Import markets data
export const importMarketsData = {
  countries: [
    { 
      name: "India", 
      shipments: "4,963", 
      suppliers: "13", 
      value: "$4,81,12,963",
      coordinates: [78.9629, 20.5937],
      code: "IND"
    },
    { 
      name: "China", 
      shipments: "4,660", 
      suppliers: "19", 
      value: "$4,21,14,963",
      coordinates: [104.1954, 35.8617],
      code: "CHN"
    },
    { 
      name: "USA", 
      shipments: "2,963", 
      suppliers: "13", 
      value: "$1,21,14,693",
      coordinates: [-95.7129, 37.0902],
      code: "USA"
    },
    { 
      name: "Algeria", 
      shipments: "2,633", 
      suppliers: "31", 
      value: "$2,01,14,963",
      coordinates: [1.6596, 28.0339],
      code: "DZA"
    },
    { 
      name: "Mexico", 
      shipments: "1,963", 
      suppliers: "22", 
      value: "$3,21,14,962",
      coordinates: [-102.5528, 23.6345],
      code: "MEX"
    },
    { 
      name: "Australia", 
      shipments: "1,763", 
      suppliers: "15", 
      value: "$1,42,13,942",
      coordinates: [133.7751, -25.2744],
      code: "AUS"
    },
    { 
      name: "Brazil", 
      shipments: "1,532", 
      suppliers: "11", 
      value: "$1,21,14,692",
      coordinates: [-51.9253, -14.2350],
      code: "BRA"
    }
  ]
};

// API service structure
export const fetchCompanyInfo = async () => {
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

export const fetchProductVariationData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return productVariationData;
};

export const fetchVolumeTrendData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return volumeTrendData;
};

export const fetchSuppliersData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return suppliersData;
};

export const fetchProductFlowData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return productFlowData;
};

export const fetchImportMarketsData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return importMarketsData;
};
