// Demo dataset used by the DSA mini-project.
// In the DSA explanation: medicineMap is a Hash Map (JavaScript Map),
// offers are stored as arrays, and results are sorted by price.

const medicineRecords = [
  {
    name: "Paracetamol 500mg",
    generic: "Paracetamol",
    offers: [
      { provider: "Apollo Pharmacy", location: "Viman Nagar", price: 18, stock: 42, distance: 1.2, verified: true },
      { provider: "MedPlus", location: "Kharadi", price: 16, stock: 28, distance: 2.4, verified: true },
      { provider: "Wellness Pharmacy", location: "Lohegaon", price: 20, stock: 15, distance: 3.1, verified: true }
    ]
  },
  {
    name: "Azithromycin 500mg",
    generic: "Azithromycin",
    offers: [
      { provider: "Apollo Pharmacy", location: "Viman Nagar", price: 92, stock: 11, distance: 1.2, verified: true },
      { provider: "MedPlus", location: "Kharadi", price: 85, stock: 7, distance: 2.4, verified: true },
      { provider: "CityCare Pharmacy", location: "Wadgaon Sheri", price: 89, stock: 0, distance: 2.8, verified: true }
    ]
  },
  {
    name: "Cetirizine 10mg",
    generic: "Cetirizine",
    offers: [
      { provider: "MedPlus", location: "Kharadi", price: 24, stock: 33, distance: 2.4, verified: true },
      { provider: "CityCare Pharmacy", location: "Wadgaon Sheri", price: 22, stock: 19, distance: 2.8, verified: true },
      { provider: "Wellness Pharmacy", location: "Lohegaon", price: 25, stock: 12, distance: 3.1, verified: true }
    ]
  },
  {
    name: "Metformin 500mg",
    generic: "Metformin",
    offers: [
      { provider: "Apollo Pharmacy", location: "Viman Nagar", price: 31, stock: 24, distance: 1.2, verified: true },
      { provider: "CityCare Pharmacy", location: "Wadgaon Sheri", price: 28, stock: 18, distance: 2.8, verified: true },
      { provider: "MedPlus", location: "Kharadi", price: 30, stock: 0, distance: 2.4, verified: true }
    ]
  }
];

const providerRecords = [
  { name: "Apollo Pharmacy", location: "Viman Nagar", distance: 1.2, verified: true },
  { name: "MedPlus", location: "Kharadi", distance: 2.4, verified: true },
  { name: "CityCare Pharmacy", location: "Wadgaon Sheri", distance: 2.8, verified: true },
  { name: "Wellness Pharmacy", location: "Lohegaon", distance: 3.1, verified: true }
];

// Hash Map: normalized medicine name -> record
const medicineMap = new Map(
  medicineRecords.map(item => [item.name.toLowerCase(), item])
);
