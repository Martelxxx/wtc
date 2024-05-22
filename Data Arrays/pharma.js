const pharmaceuticalProducts = [
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

//Export pharmaceuticalProducts
export default pharmaceuticalProducts;
