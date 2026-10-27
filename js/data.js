// Demo-only data: fictional sample prices, stock, locations and distances. Not live pharmacy data.
const medicineRecords = [
  {
    "id": "med-001",
    "name": "Paracetamol 500mg",
    "generic": "Paracetamol",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 16,
        "stock": 12
      },
      {
        "providerId": "vendor-b",
        "price": 20,
        "stock": 14
      },
      {
        "providerId": "vendor-c",
        "price": 17,
        "stock": 10
      },
      {
        "providerId": "vendor-d",
        "price": 24,
        "stock": 10
      }
    ]
  },
  {
    "id": "med-002",
    "name": "Azithromycin 500mg",
    "generic": "Azithromycin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 86,
        "stock": 19
      },
      {
        "providerId": "vendor-b",
        "price": 103,
        "stock": 17
      },
      {
        "providerId": "vendor-c",
        "price": 80,
        "stock": 15
      },
      {
        "providerId": "vendor-d",
        "price": 115,
        "stock": 21
      }
    ]
  },
  {
    "id": "med-003",
    "name": "Cetirizine 10mg",
    "generic": "Cetirizine",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 28,
        "stock": 26
      },
      {
        "providerId": "vendor-b",
        "price": 26,
        "stock": 20
      },
      {
        "providerId": "vendor-c",
        "price": 21,
        "stock": 0
      },
      {
        "providerId": "vendor-d",
        "price": 30,
        "stock": 32
      }
    ]
  },
  {
    "id": "med-004",
    "name": "Metformin 500mg",
    "generic": "Metformin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 30,
        "stock": 33
      },
      {
        "providerId": "vendor-b",
        "price": 36,
        "stock": 23
      },
      {
        "providerId": "vendor-c",
        "price": 29,
        "stock": 25
      },
      {
        "providerId": "vendor-d",
        "price": 42,
        "stock": 8
      }
    ]
  },
  {
    "id": "med-005",
    "name": "Amoxicillin 500mg",
    "generic": "Amoxicillin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 66,
        "stock": 40
      },
      {
        "providerId": "vendor-b",
        "price": 79,
        "stock": 26
      },
      {
        "providerId": "vendor-c",
        "price": 56,
        "stock": 30
      },
      {
        "providerId": "vendor-d",
        "price": 81,
        "stock": 19
      }
    ]
  },
  {
    "id": "med-006",
    "name": "Ibuprofen 400mg",
    "generic": "Ibuprofen",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 32,
        "stock": 47
      },
      {
        "providerId": "vendor-b",
        "price": 40,
        "stock": 29
      },
      {
        "providerId": "vendor-c",
        "price": 32,
        "stock": 8
      },
      {
        "providerId": "vendor-d",
        "price": 45,
        "stock": 30
      }
    ]
  },
  {
    "id": "med-007",
    "name": "Pantoprazole 40mg",
    "generic": "Pantoprazole",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 47,
        "stock": 15
      },
      {
        "providerId": "vendor-b",
        "price": 57,
        "stock": 32
      },
      {
        "providerId": "vendor-c",
        "price": 45,
        "stock": 13
      },
      {
        "providerId": "vendor-d",
        "price": 57,
        "stock": 6
      }
    ]
  },
  {
    "id": "med-008",
    "name": "Omeprazole 20mg",
    "generic": "Omeprazole",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 38,
        "stock": 22
      },
      {
        "providerId": "vendor-b",
        "price": 46,
        "stock": 35
      },
      {
        "providerId": "vendor-c",
        "price": 36,
        "stock": 18
      },
      {
        "providerId": "vendor-d",
        "price": 53,
        "stock": 17
      }
    ]
  },
  {
    "id": "med-009",
    "name": "Aspirin 75mg",
    "generic": "Aspirin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 23,
        "stock": 29
      },
      {
        "providerId": "vendor-b",
        "price": 28,
        "stock": 7
      },
      {
        "providerId": "vendor-c",
        "price": 23,
        "stock": 23
      },
      {
        "providerId": "vendor-d",
        "price": 32,
        "stock": 28
      }
    ]
  },
  {
    "id": "med-010",
    "name": "Atorvastatin 10mg",
    "generic": "Atorvastatin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 56,
        "stock": 36
      },
      {
        "providerId": "vendor-b",
        "price": 60,
        "stock": 10
      },
      {
        "providerId": "vendor-c",
        "price": 47,
        "stock": 28
      },
      {
        "providerId": "vendor-d",
        "price": 68,
        "stock": 4
      }
    ]
  },
  {
    "id": "med-011",
    "name": "Amlodipine 5mg",
    "generic": "Amlodipine",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 31,
        "stock": 43
      },
      {
        "providerId": "vendor-b",
        "price": 38,
        "stock": 13
      },
      {
        "providerId": "vendor-c",
        "price": 30,
        "stock": 33
      },
      {
        "providerId": "vendor-d",
        "price": 43,
        "stock": 15
      }
    ]
  },
  {
    "id": "med-012",
    "name": "Losartan 50mg",
    "generic": "Losartan",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 46,
        "stock": 50
      },
      {
        "providerId": "vendor-b",
        "price": 55,
        "stock": 16
      },
      {
        "providerId": "vendor-c",
        "price": 37,
        "stock": 11
      },
      {
        "providerId": "vendor-d",
        "price": 54,
        "stock": 26
      }
    ]
  },
  {
    "id": "med-013",
    "name": "Telmisartan 40mg",
    "generic": "Telmisartan",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 48,
        "stock": 18
      },
      {
        "providerId": "vendor-b",
        "price": 58,
        "stock": 19
      },
      {
        "providerId": "vendor-c",
        "price": 46,
        "stock": 16
      },
      {
        "providerId": "vendor-d",
        "price": 65,
        "stock": 37
      }
    ]
  },
  {
    "id": "med-014",
    "name": "Vitamin C 500mg",
    "generic": "Ascorbic Acid",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 29,
        "stock": 25
      },
      {
        "providerId": "vendor-b",
        "price": 35,
        "stock": 22
      },
      {
        "providerId": "vendor-c",
        "price": 29,
        "stock": 21
      },
      {
        "providerId": "vendor-d",
        "price": 33,
        "stock": 13
      }
    ]
  },
  {
    "id": "med-015",
    "name": "Vitamin D3 1000 IU",
    "generic": "Cholecalciferol",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 68,
        "stock": 32
      },
      {
        "providerId": "vendor-b",
        "price": 82,
        "stock": 25
      },
      {
        "providerId": "vendor-c",
        "price": 63,
        "stock": 26
      },
      {
        "providerId": "vendor-d",
        "price": 92,
        "stock": 24
      }
    ]
  },
  {
    "id": "med-016",
    "name": "Calcium 500mg",
    "generic": "Calcium",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 43,
        "stock": 39
      },
      {
        "providerId": "vendor-b",
        "price": 52,
        "stock": 28
      },
      {
        "providerId": "vendor-c",
        "price": 41,
        "stock": 0
      },
      {
        "providerId": "vendor-d",
        "price": 58,
        "stock": 35
      }
    ]
  },
  {
    "id": "med-017",
    "name": "ORS Sachet",
    "generic": "Oral Rehydration Salts",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 26,
        "stock": 46
      },
      {
        "providerId": "vendor-b",
        "price": 24,
        "stock": 31
      },
      {
        "providerId": "vendor-c",
        "price": 19,
        "stock": 9
      },
      {
        "providerId": "vendor-d",
        "price": 28,
        "stock": 11
      }
    ]
  },
  {
    "id": "med-018",
    "name": "Loratadine 10mg",
    "generic": "Loratadine",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 29,
        "stock": 14
      },
      {
        "providerId": "vendor-b",
        "price": 35,
        "stock": 34
      },
      {
        "providerId": "vendor-c",
        "price": 29,
        "stock": 14
      },
      {
        "providerId": "vendor-d",
        "price": 40,
        "stock": 22
      }
    ]
  },
  {
    "id": "med-019",
    "name": "Montelukast 10mg",
    "generic": "Montelukast",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 64,
        "stock": 21
      },
      {
        "providerId": "vendor-b",
        "price": 76,
        "stock": 6
      },
      {
        "providerId": "vendor-c",
        "price": 53,
        "stock": 19
      },
      {
        "providerId": "vendor-d",
        "price": 78,
        "stock": 33
      }
    ]
  },
  {
    "id": "med-020",
    "name": "Dolo 650mg",
    "generic": "Paracetamol",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 24,
        "stock": 28
      },
      {
        "providerId": "vendor-b",
        "price": 29,
        "stock": 9
      },
      {
        "providerId": "vendor-c",
        "price": 24,
        "stock": 24
      },
      {
        "providerId": "vendor-d",
        "price": 34,
        "stock": 9
      }
    ]
  },
  {
    "id": "med-021",
    "name": "Cough Syrup 100ml",
    "generic": "Cough formulation",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 80,
        "stock": 35
      },
      {
        "providerId": "vendor-b",
        "price": 97,
        "stock": 12
      },
      {
        "providerId": "vendor-c",
        "price": 76,
        "stock": 29
      },
      {
        "providerId": "vendor-d",
        "price": 100,
        "stock": 20
      }
    ]
  },
  {
    "id": "med-022",
    "name": "Antacid Tablets",
    "generic": "Antacid",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 32,
        "stock": 42
      },
      {
        "providerId": "vendor-b",
        "price": 39,
        "stock": 15
      },
      {
        "providerId": "vendor-c",
        "price": 31,
        "stock": 34
      },
      {
        "providerId": "vendor-d",
        "price": 44,
        "stock": 31
      }
    ]
  },
  {
    "id": "med-023",
    "name": "Folic Acid 5mg",
    "generic": "Folic Acid",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 19,
        "stock": 49
      },
      {
        "providerId": "vendor-b",
        "price": 23,
        "stock": 18
      },
      {
        "providerId": "vendor-c",
        "price": 20,
        "stock": 12
      },
      {
        "providerId": "vendor-d",
        "price": 27,
        "stock": 7
      }
    ]
  },
  {
    "id": "med-024",
    "name": "Iron Tablets",
    "generic": "Ferrous Sulphate",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 42,
        "stock": 17
      },
      {
        "providerId": "vendor-b",
        "price": 43,
        "stock": 21
      },
      {
        "providerId": "vendor-c",
        "price": 34,
        "stock": 17
      },
      {
        "providerId": "vendor-d",
        "price": 49,
        "stock": 18
      }
    ]
  },
  {
    "id": "med-025",
    "name": "B-Complex Tablets",
    "generic": "Vitamin B Complex",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 52,
        "stock": 24
      },
      {
        "providerId": "vendor-b",
        "price": 62,
        "stock": 24
      },
      {
        "providerId": "vendor-c",
        "price": 49,
        "stock": 22
      },
      {
        "providerId": "vendor-d",
        "price": 70,
        "stock": 29
      }
    ]
  },
  {
    "id": "med-026",
    "name": "Zinc 20mg",
    "generic": "Zinc",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 30,
        "stock": 31
      },
      {
        "providerId": "vendor-b",
        "price": 36,
        "stock": 27
      },
      {
        "providerId": "vendor-c",
        "price": 23,
        "stock": 27
      },
      {
        "providerId": "vendor-d",
        "price": 34,
        "stock": 5
      }
    ]
  },
  {
    "id": "med-027",
    "name": "Clotrimazole 1% Cream",
    "generic": "Clotrimazole",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 44,
        "stock": 38
      },
      {
        "providerId": "vendor-b",
        "price": 54,
        "stock": 30
      },
      {
        "providerId": "vendor-c",
        "price": 42,
        "stock": 32
      },
      {
        "providerId": "vendor-d",
        "price": 61,
        "stock": 16
      }
    ]
  },
  {
    "id": "med-028",
    "name": "Mupirocin 2% Ointment",
    "generic": "Mupirocin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 90,
        "stock": 45
      },
      {
        "providerId": "vendor-b",
        "price": 108,
        "stock": 33
      },
      {
        "providerId": "vendor-c",
        "price": 84,
        "stock": 10
      },
      {
        "providerId": "vendor-d",
        "price": 112,
        "stock": 27
      }
    ]
  },
  {
    "id": "med-029",
    "name": "Diclofenac Gel 1%",
    "generic": "Diclofenac",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 68,
        "stock": 13
      },
      {
        "providerId": "vendor-b",
        "price": 82,
        "stock": 5
      },
      {
        "providerId": "vendor-c",
        "price": 63,
        "stock": 0
      },
      {
        "providerId": "vendor-d",
        "price": 92,
        "stock": 38
      }
    ]
  },
  {
    "id": "med-030",
    "name": "Loperamide 2mg",
    "generic": "Loperamide",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 23,
        "stock": 20
      },
      {
        "providerId": "vendor-b",
        "price": 28,
        "stock": 8
      },
      {
        "providerId": "vendor-c",
        "price": 23,
        "stock": 20
      },
      {
        "providerId": "vendor-d",
        "price": 32,
        "stock": 14
      }
    ]
  },
  {
    "id": "med-031",
    "name": "Domperidone 10mg",
    "generic": "Domperidone",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 35,
        "stock": 27
      },
      {
        "providerId": "vendor-b",
        "price": 35,
        "stock": 11
      },
      {
        "providerId": "vendor-c",
        "price": 27,
        "stock": 25
      },
      {
        "providerId": "vendor-d",
        "price": 40,
        "stock": 25
      }
    ]
  },
  {
    "id": "med-032",
    "name": "Ondansetron 4mg",
    "generic": "Ondansetron",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 34,
        "stock": 34
      },
      {
        "providerId": "vendor-b",
        "price": 41,
        "stock": 14
      },
      {
        "providerId": "vendor-c",
        "price": 33,
        "stock": 30
      },
      {
        "providerId": "vendor-d",
        "price": 46,
        "stock": 36
      }
    ]
  },
  {
    "id": "med-033",
    "name": "Dicyclomine 10mg",
    "generic": "Dicyclomine",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 39,
        "stock": 41
      },
      {
        "providerId": "vendor-b",
        "price": 47,
        "stock": 17
      },
      {
        "providerId": "vendor-c",
        "price": 31,
        "stock": 8
      },
      {
        "providerId": "vendor-d",
        "price": 46,
        "stock": 12
      }
    ]
  },
  {
    "id": "med-034",
    "name": "Levocetirizine 5mg",
    "generic": "Levocetirizine",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 26,
        "stock": 48
      },
      {
        "providerId": "vendor-b",
        "price": 32,
        "stock": 20
      },
      {
        "providerId": "vendor-c",
        "price": 26,
        "stock": 13
      },
      {
        "providerId": "vendor-d",
        "price": 37,
        "stock": 23
      }
    ]
  },
  {
    "id": "med-035",
    "name": "Ranitidine 150mg",
    "generic": "Ranitidine",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 26,
        "stock": 16
      },
      {
        "providerId": "vendor-b",
        "price": 31,
        "stock": 23
      },
      {
        "providerId": "vendor-c",
        "price": 26,
        "stock": 18
      },
      {
        "providerId": "vendor-d",
        "price": 28,
        "stock": 34
      }
    ]
  },
  {
    "id": "med-036",
    "name": "Glimepiride 1mg",
    "generic": "Glimepiride",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 36,
        "stock": 23
      },
      {
        "providerId": "vendor-b",
        "price": 44,
        "stock": 26
      },
      {
        "providerId": "vendor-c",
        "price": 35,
        "stock": 23
      },
      {
        "providerId": "vendor-d",
        "price": 50,
        "stock": 10
      }
    ]
  },
  {
    "id": "med-037",
    "name": "Gliclazide 80mg",
    "generic": "Gliclazide",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 52,
        "stock": 30
      },
      {
        "providerId": "vendor-b",
        "price": 63,
        "stock": 29
      },
      {
        "providerId": "vendor-c",
        "price": 50,
        "stock": 28
      },
      {
        "providerId": "vendor-d",
        "price": 71,
        "stock": 21
      }
    ]
  },
  {
    "id": "med-038",
    "name": "Rosuvastatin 10mg",
    "generic": "Rosuvastatin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 64,
        "stock": 37
      },
      {
        "providerId": "vendor-b",
        "price": 70,
        "stock": 32
      },
      {
        "providerId": "vendor-c",
        "price": 54,
        "stock": 33
      },
      {
        "providerId": "vendor-d",
        "price": 79,
        "stock": 32
      }
    ]
  },
  {
    "id": "med-039",
    "name": "Propranolol 10mg",
    "generic": "Propranolol",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 24,
        "stock": 44
      },
      {
        "providerId": "vendor-b",
        "price": 29,
        "stock": 35
      },
      {
        "providerId": "vendor-c",
        "price": 24,
        "stock": 11
      },
      {
        "providerId": "vendor-d",
        "price": 33,
        "stock": 8
      }
    ]
  },
  {
    "id": "med-040",
    "name": "Naproxen 250mg",
    "generic": "Naproxen",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 46,
        "stock": 12
      },
      {
        "providerId": "vendor-b",
        "price": 55,
        "stock": 7
      },
      {
        "providerId": "vendor-c",
        "price": 37,
        "stock": 16
      },
      {
        "providerId": "vendor-d",
        "price": 54,
        "stock": 19
      }
    ]
  },
  {
    "id": "med-041",
    "name": "Calamine Lotion 100ml",
    "generic": "Calamine",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 55,
        "stock": 19
      },
      {
        "providerId": "vendor-b",
        "price": 67,
        "stock": 10
      },
      {
        "providerId": "vendor-c",
        "price": 52,
        "stock": 21
      },
      {
        "providerId": "vendor-d",
        "price": 75,
        "stock": 30
      }
    ]
  },
  {
    "id": "med-042",
    "name": "Saline Nasal Spray",
    "generic": "Sodium Chloride",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 90,
        "stock": 26
      },
      {
        "providerId": "vendor-b",
        "price": 108,
        "stock": 13
      },
      {
        "providerId": "vendor-c",
        "price": 84,
        "stock": 0
      },
      {
        "providerId": "vendor-d",
        "price": 112,
        "stock": 6
      }
    ]
  },
  {
    "id": "med-043",
    "name": "Eye Lubricant Drops 10ml",
    "generic": "Lubricating eye drops",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 99,
        "stock": 33
      },
      {
        "providerId": "vendor-b",
        "price": 120,
        "stock": 16
      },
      {
        "providerId": "vendor-c",
        "price": 92,
        "stock": 31
      },
      {
        "providerId": "vendor-d",
        "price": 133,
        "stock": 17
      }
    ]
  },
  {
    "id": "med-044",
    "name": "Multivitamin Tablets",
    "generic": "Multivitamin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 80,
        "stock": 40
      },
      {
        "providerId": "vendor-b",
        "price": 96,
        "stock": 19
      },
      {
        "providerId": "vendor-c",
        "price": 75,
        "stock": 9
      },
      {
        "providerId": "vendor-d",
        "price": 106,
        "stock": 28
      }
    ]
  },
  {
    "id": "med-045",
    "name": "Biotin 5mg",
    "generic": "Biotin",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 64,
        "stock": 47
      },
      {
        "providerId": "vendor-b",
        "price": 70,
        "stock": 22
      },
      {
        "providerId": "vendor-c",
        "price": 54,
        "stock": 14
      },
      {
        "providerId": "vendor-d",
        "price": 79,
        "stock": 4
      }
    ]
  },
  {
    "id": "med-046",
    "name": "Benzoyl Peroxide 2.5% Gel",
    "generic": "Benzoyl Peroxide",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 83,
        "stock": 15
      },
      {
        "providerId": "vendor-b",
        "price": 100,
        "stock": 25
      },
      {
        "providerId": "vendor-c",
        "price": 78,
        "stock": 19
      },
      {
        "providerId": "vendor-d",
        "price": 111,
        "stock": 15
      }
    ]
  },
  {
    "id": "med-047",
    "name": "Hydrocortisone 1% Cream",
    "generic": "Hydrocortisone",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 54,
        "stock": 22
      },
      {
        "providerId": "vendor-b",
        "price": 65,
        "stock": 28
      },
      {
        "providerId": "vendor-c",
        "price": 45,
        "stock": 24
      },
      {
        "providerId": "vendor-d",
        "price": 66,
        "stock": 26
      }
    ]
  },
  {
    "id": "med-048",
    "name": "Chlorhexidine Solution 100ml",
    "generic": "Chlorhexidine",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 64,
        "stock": 29
      },
      {
        "providerId": "vendor-b",
        "price": 78,
        "stock": 31
      },
      {
        "providerId": "vendor-c",
        "price": 60,
        "stock": 29
      },
      {
        "providerId": "vendor-d",
        "price": 87,
        "stock": 37
      }
    ]
  },
  {
    "id": "med-049",
    "name": "Thermometer",
    "generic": "Digital thermometer",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 139,
        "stock": 36
      },
      {
        "providerId": "vendor-b",
        "price": 167,
        "stock": 34
      },
      {
        "providerId": "vendor-c",
        "price": 129,
        "stock": 34
      },
      {
        "providerId": "vendor-d",
        "price": 177,
        "stock": 13
      }
    ]
  },
  {
    "id": "med-050",
    "name": "Bandage Roll",
    "generic": "Medical bandage",
    "offers": [
      {
        "providerId": "vendor-a",
        "price": 32,
        "stock": 43
      },
      {
        "providerId": "vendor-b",
        "price": 39,
        "stock": 6
      },
      {
        "providerId": "vendor-c",
        "price": 31,
        "stock": 12
      },
      {
        "providerId": "vendor-d",
        "price": 44,
        "stock": 24
      }
    ]
  }
];

const providerRecords = [
  {
    "id": "vendor-a",
    "name": "Apollo Pharmacy",
    "location": "Viman Nagar, Pune",
    "address": "Shop 4, Viman Nagar, Pune, Maharashtra",
    "distance": 1.2,
    "verified": true,
    "lat": 18.5679,
    "lng": 73.9143
  },
  {
    "id": "vendor-b",
    "name": "MedPlus Pharmacy",
    "location": "Kharadi, Pune",
    "address": "Main Road, Kharadi, Pune, Maharashtra",
    "distance": 2.4,
    "verified": true,
    "lat": 18.5515,
    "lng": 73.947
  },
  {
    "id": "vendor-c",
    "name": "CityCare Pharmacy",
    "location": "Wadgaon Sheri, Pune",
    "address": "Near Wadgaon Sheri, Pune, Maharashtra",
    "distance": 2.8,
    "verified": true,
    "lat": 18.548,
    "lng": 73.927
  },
  {
    "id": "vendor-d",
    "name": "Wellness Pharmacy",
    "location": "Lohegaon, Pune",
    "address": "Lohegaon Road, Pune, Maharashtra",
    "distance": 3.1,
    "verified": true,
    "lat": 18.599,
    "lng": 73.919
  }
];

// Hash Map: normalized medicine name -> medicine record(s)
const medicineMap = new Map();
medicineRecords.forEach(m => [m.name, m.generic].forEach(term => {
  const key = term.trim().toLowerCase();
  if (!medicineMap.has(key)) medicineMap.set(key, []);
  medicineMap.get(key).push(m);
}));
