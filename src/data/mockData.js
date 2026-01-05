// Mock data for MediLab clone - Comprehensive Dummy Data

export const featuredArticles = [
  {
    id: 1,
    title: "Best Foods That Support Brain Health",
    description: "Your brain uses more energy than any other organ. See how certain nutrients, foods, and eating patterns could help keep it working at its best.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    category: "Nutrition",
    readTime: "5 min read",
    author: "Dr. Sarah Mitchell, MD",
    medicalReviewer: "Dr. James Wilson, PhD",
    publishedDate: "2025-01-15",
    views: 15420
  },
  {
    id: 2,
    title: "Signs Your Immune System May Be Changing",
    description: "Learn about the subtle and not-so-subtle signs that your immune system might be weakening or changing as you age.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    category: "Immune Health",
    readTime: "7 min read",
    author: "Emily Rodriguez, PhD",
    medicalReviewer: "Dr. Michael Chen, MD",
    publishedDate: "2025-01-14",
    views: 23150
  },
  // {
  //   id: 3,
  //   title: "Everyday Things That May Trigger Eczema or Itchy Skin",
  //   description: "From laundry detergent to stress, discover common triggers that can make eczema symptoms worse.",
  //   image: "https://images.unsplash.com/photo-1556229174-5e42a09e60f2?w=800",
  //   category: "Skin Health",
  //   readTime: "6 min read",
  //   author: "Dr. Lisa Anderson, Dermatologist",
  //   medicalReviewer: "Dr. Robert Brown, MD",
  //   publishedDate: "2025-01-13",
  //   views: 18900
  // },
  {
    id: 4,
    title: "Winter Allergy Signs You Shouldn't Ignore",
    description: "Think your allergies only act up in spring? Winter allergens could be affecting your health right now.",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800",
    category: "Allergies",
    readTime: "5 min read",
    author: "Dr. Jennifer Lee, Allergist",
    medicalReviewer: "Dr. David Martinez, MD",
    publishedDate: "2025-01-12",
    views: 12340
  },
  {
    id: 5,
    title: "Understanding High Blood Pressure: What You Need to Know",
    description: "High blood pressure affects millions. Learn about symptoms, causes, and effective management strategies.",
    image: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=800",
    category: "Heart Health",
    readTime: "8 min read",
    author: "Dr. Thomas Garcia, Cardiologist",
    medicalReviewer: "Dr. Patricia Johnson, MD",
    publishedDate: "2025-01-11",
    views: 31250
  },
  {
    id: 6,
    title: "10 Natural Ways to Boost Your Energy Levels",
    description: "Feeling tired all the time? Discover natural, science-backed methods to increase your energy throughout the day.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800",
    category: "Wellness",
    readTime: "6 min read",
    author: "Amanda Foster, RD",
    medicalReviewer: "Dr. Kevin Park, MD",
    publishedDate: "2025-01-10",
    views: 27680
  }
];

export const livingHealthyCategories = [
  {
    id: 1,
    title: "Mental Health",
    image: "https://images.unsplash.com/photo-1562751362-404243c2eea3?w=600",
    url: "/mental-health"
  },
  {
    id: 2,
    title: "Diet & Weight Management",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
    url: "/diet-weight"
  },
  {
    id: 3,
    title: "Healthy Aging",
    image: "https://images.unsplash.com/photo-1611764461465-09162da6465a?w=600",
    url: "/healthy-aging"
  },
  {
    id: 4,
    title: "Sex & Relationships",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600",
    url: "/sex-relationships"
  },
  {
    id: 5,
    title: "Fitness & Exercise",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
    url: "/fitness-exercise"
  }
];

export const healthTopics = [
  "Breast Cancer", "Rheumatoid Arthritis", "Depression", "Eczema",
  "Women's Health", "Diabetes", "Eye Health", "Sleep Disorders",
  "Heart Health", "Asthma", "COPD", "Migraine"
];

export const latestNews = [
  {
    id: 1,
    title: "What to Know About Hair Dye and Health",
    excerpt: "Some studies suggest a link between hair coloring and certain health risks. Here's what experts say.",
    fullContent: "Recent research has examined the potential health impacts of hair dye use. While most hair dyes are considered safe when used as directed, some studies have found associations with certain health conditions. Here's what you need to know about making informed choices.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
    author: "John Smith, MD",
    date: "Dec 16, 2025",
    medicalReview: "Sarah Johnson, MD",
    category: "Health News",
    tags: ["beauty", "health risks", "cancer prevention"],
    comments: 156,
    likes: 2340
  },
  {
    id: 2,
    title: "How Your Morning Habits Affect Your Night's Sleep",
    excerpt: "The key to better sleep might start with your morning routine. Learn what experts recommend.",
    fullContent: "Your morning routine plays a crucial role in determining how well you'll sleep that night. From sunlight exposure to caffeine timing, discover evidence-based strategies for better sleep quality.",
    image: "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?w=600",
    author: "Emily Davis, PhD",
    date: "Nov 20, 2025",
    medicalReview: "Michael Brown, MD",
    category: "Sleep Health",
    tags: ["sleep", "wellness", "morning routine"],
    comments: 203,
    likes: 3150
  },
  {
    id: 3,
    title: "Back or Knee Pain? It Could Be 'Dead Butt Syndrome'",
    excerpt: "Learn about this surprisingly common condition and how to prevent it.",
    fullContent: "Gluteal amnesia, colloquially known as 'dead butt syndrome,' occurs when your glute muscles forget how to activate properly. This can lead to compensatory pain in your back, hips, and knees.",
    image: "https://images.pexels.com/photos/347135/pexels-photo-347135.jpeg?w=600",
    author: "Robert Wilson, PT",
    date: "Nov 13, 2025",
    medicalReview: "Lisa Anderson, MD",
    category: "Pain Management",
    tags: ["back pain", "exercise", "physical therapy"],
    comments: 187,
    likes: 2890
  },
  {
    id: 4,
    title: "What Men Should Know About This Prostate Cancer Test",
    excerpt: "New research sheds light on an important screening tool for prostate cancer detection.",
    fullContent: "MRI-guided prostate biopsies are changing how doctors detect and diagnose prostate cancer. Learn about this advanced screening method and when it might be right for you.",
    image: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=600",
    author: "David Martinez, MD",
    date: "Dec 15, 2025",
    medicalReview: "Jennifer Lee, MD",
    category: "Men's Health",
    tags: ["prostate cancer", "screening", "men's health"],
    comments: 142,
    likes: 1980
  },
  {
    id: 5,
    title: "Breakthrough in Alzheimer's Research Shows Promise",
    excerpt: "New drug trial demonstrates significant cognitive improvements in early-stage patients.",
    fullContent: "A groundbreaking Phase 3 clinical trial has shown that a new monoclonal antibody treatment can slow cognitive decline in people with early Alzheimer's disease by up to 27%.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600",
    author: "Dr. Rachel Green, Neurologist",
    date: "Jan 20, 2025",
    medicalReview: "Dr. Steven Blake, MD",
    category: "Medical Research",
    tags: ["alzheimers", "research", "breakthrough"],
    comments: 312,
    likes: 5240
  },
  {
    id: 6,
    title: "Understanding Long COVID: Latest Findings",
    excerpt: "Researchers identify key biomarkers that may explain persistent symptoms.",
    fullContent: "New research has identified several biomarkers that distinguish long COVID patients from those who fully recover, potentially paving the way for targeted treatments.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600",
    author: "Dr. Maria Santos, Infectious Disease",
    date: "Jan 18, 2025",
    medicalReview: "Dr. James Cooper, MD",
    category: "COVID-19",
    tags: ["long covid", "research", "symptoms"],
    comments: 478,
    likes: 6830
  },
  {
    id: 7,
    title: "Heart-Healthy Mediterranean Diet: New Guidelines",
    excerpt: "Updated recommendations show even greater cardiovascular benefits.",
    fullContent: "The latest research on the Mediterranean diet reveals new insights into its heart-protective effects, with specific recommendations for optimal health outcomes.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
    author: "Nicole Turner, RD",
    date: "Jan 15, 2025",
    medicalReview: "Dr. Anthony Richards, Cardiologist",
    category: "Nutrition",
    tags: ["diet", "heart health", "nutrition"],
    comments: 265,
    likes: 4120
  },
  {
    id: 8,
    title: "Mental Health Apps: Do They Really Work?",
    excerpt: "Large-scale study evaluates effectiveness of digital mental health interventions.",
    fullContent: "A comprehensive meta-analysis of 50+ studies examines whether mental health apps provide meaningful benefits for anxiety, depression, and stress management.",
    image: "https://images.unsplash.com/photo-1562751362-404243c2eea3?w=600",
    author: "Dr. Alex Chen, Psychiatrist",
    date: "Jan 12, 2025",
    medicalReview: "Dr. Linda Morrison, PhD",
    category: "Mental Health",
    tags: ["mental health", "technology", "apps"],
    comments: 391,
    likes: 5670
  }
];

export const videoContent = [
  {
    id: 1,
    title: "Tips That May Help You Fall Asleep Faster",
    thumbnail: "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?w=600",
    duration: "3:45"
  },
  {
    id: 2,
    title: "How to Brush Your Teeth for Better Results",
    thumbnail: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600",
    duration: "2:30"
  },
  {
    id: 3,
    title: "Ways to Help Keep Your Skin Hydrated",
    thumbnail: "https://images.unsplash.com/photo-1556229174-5e42a09e60f2?w=600",
    duration: "4:15"
  },
  {
    id: 4,
    title: "Common Cold Myths and the Facts Behind Them",
    thumbnail: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600",
    duration: "5:20"
  }
];

export const healthTools = [
  {
    id: 1,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index",
    icon: "Calculator",
    url: "/tools/bmi-calculator"
  },
  {
    id: 2,
    title: "Symptom Checker",
    description: "Check your symptoms",
    icon: "Stethoscope",
    url: "/tools/symptom-checker"
  },
  {
    id: 3,
    title: "Pill Identifier",
    description: "Identify your medication",
    icon: "Pill",
    url: "/tools/pill-identifier"
  },
  {
    id: 4,
    title: "Drug Interaction Checker",
    description: "Check drug interactions",
    icon: "AlertTriangle",
    url: "/tools/drug-interaction"
  },
  {
    id: 5,
    title: "Ovulation Calculator",
    description: "Track your ovulation",
    icon: "Calendar",
    url: "/tools/ovulation-calculator"
  },
  {
    id: 6,
    title: "Cold and Flu Map",
    description: "Track outbreaks in your area",
    icon: "Map",
    url: "/tools/cold-flu-map"
  }
];

export const conditions = [
  { name: "ADD/ADHD", url: "/conditions/add-adhd", description: "Attention-Deficit/Hyperactivity Disorder" },
  { name: "Allergies", url: "/conditions/allergies", description: "Immune system reactions to substances" },
  { name: "Alzheimer's", url: "/conditions/alzheimers", description: "Progressive brain disorder affecting memory" },
  { name: "Anxiety Disorders", url: "/conditions/anxiety", description: "Mental health conditions causing excessive worry" },
  { name: "Arthritis", url: "/conditions/arthritis", description: "Joint inflammation and pain" },
  { name: "Asthma", url: "/conditions/asthma", description: "Chronic respiratory condition" },
  { name: "Back Pain", url: "/conditions/back-pain", description: "Discomfort in the spine or back muscles" },
  { name: "Cancer", url: "/conditions/cancer", description: "Abnormal cell growth" },
  { name: "Cholesterol", url: "/conditions/cholesterol", description: "Fat-like substance in blood" },
  { name: "COPD", url: "/conditions/copd", description: "Chronic Obstructive Pulmonary Disease" },
  { name: "Coronavirus", url: "/conditions/coronavirus", description: "COVID-19 information and resources" },
  { name: "Depression", url: "/conditions/depression", description: "Persistent feeling of sadness" },
  { name: "Diabetes", url: "/conditions/diabetes", description: "High blood sugar levels" },
  { name: "Eye Health", url: "/conditions/eye-health", description: "Vision and eye condition information" },
  { name: "Heart Health", url: "/conditions/heart-health", description: "Cardiovascular wellness" },
  { name: "Hypertension", url: "/conditions/hypertension", description: "High blood pressure" },
  { name: "Mental Health", url: "/conditions/mental-health", description: "Psychological wellbeing" },
  { name: "Migraines", url: "/conditions/migraines", description: "Severe recurring headaches" },
  { name: "Multiple Sclerosis", url: "/conditions/ms", description: "Autoimmune disease affecting nerves" },
  { name: "Psoriasis", url: "/conditions/psoriasis", description: "Skin condition with scaly patches" },
  { name: "Rheumatoid Arthritis", url: "/conditions/rheumatoid-arthritis", description: "Autoimmune joint disease" },
  { name: "Sleep Apnea", url: "/conditions/sleep-apnea", description: "Breathing interruptions during sleep" },
  { name: "Stroke", url: "/conditions/stroke", description: "Brain blood supply interruption" },
  { name: "Thyroid Disorders", url: "/conditions/thyroid", description: "Thyroid gland problems" }
];

// User profiles for authentication demo
export const userProfiles = [
  {
    id: 1,
    email: "demo@MediLab.com",
    name: "Demo User",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    joinedDate: "2024-01-15",
    savedArticles: [1, 3, 5],
    preferences: {
      newsletterSubscribed: true,
      notificationSettings: {
        email: true,
        doctorConsultation: true,
        healthAlerts: false
      }
    },
    healthProfile: {
      age: 35,
      gender: "Male",
      conditions: ["Hypertension", "Allergies"],
      medications: ["Lisinopril", "Zyrtec"]
    }
  }
];

// Newsletter subscriptions
export const newsletterSubscribers = [
  {
    id: 1,
    email: "subscriber1@example.com",
    name: "John Doe",
    subscriptionDate: "2025-01-10",
    preferences: ["Daily Updates", "Women's Health", "Good Health"],
    active: true
  },
  {
    id: 2,
    email: "subscriber2@example.com",
    name: "Jane Smith",
    subscriptionDate: "2025-01-08",
    preferences: ["Weekly Digest", "Mental Health"],
    active: true
  }
];

// Symptom checker data
export const symptomDatabase = [
  {
    symptom: "Headache",
    category: "Head",
    relatedConditions: ["Migraine", "Tension Headache", "Cluster Headache", "Sinus Infection"]
  },
  {
    symptom: "Fever",
    category: "General",
    relatedConditions: ["Common Cold", "Influenza", "COVID-19", "Bacterial Infection"]
  },
  {
    symptom: "Chest Pain",
    category: "Chest",
    relatedConditions: ["Heart Attack", "Angina", "Panic Attack", "Gastroesophageal Reflux"]
  },
  {
    symptom: "Shortness of Breath",
    category: "Chest",
    relatedConditions: ["Asthma", "COPD", "Pneumonia", "Heart Failure"]
  }
];

// BMI calculation history
export const bmiHistory = [
  {
    id: 1,
    userId: 1,
    date: "2025-01-20",
    weight: 180,
    height: 70,
    unit: "imperial",
    bmi: 25.8,
    category: "Overweight"
  },
  {
    id: 2,
    userId: 1,
    date: "2024-12-20",
    weight: 185,
    height: 70,
    unit: "imperial",
    bmi: 26.5,
    category: "Overweight"
  }
];

// Drug database
export const drugDatabase = [
  {
    id: 1,
    name: "Aspirin",
    genericName: "Acetylsalicylic Acid",
    category: "Pain Reliever",
    description: "Used to reduce pain, fever, or inflammation",
    sideEffects: ["Stomach upset", "Heartburn", "Nausea"],
    dosage: "325-650mg every 4-6 hours",
    warnings: ["May increase bleeding risk", "Avoid in children with viral infections"]
  },
  {
    id: 2,
    name: "Ibuprofen",
    genericName: "Ibuprofen",
    category: "NSAID",
    description: "Nonsteroidal anti-inflammatory drug",
    sideEffects: ["Stomach pain", "Dizziness", "Headache"],
    dosage: "200-400mg every 4-6 hours",
    warnings: ["May cause stomach bleeding", "Use caution with heart conditions"]
  },
  {
    id: 3,
    name: "Lisinopril",
    genericName: "Lisinopril",
    category: "ACE Inhibitor",
    description: "Used to treat high blood pressure",
    sideEffects: ["Dry cough", "Dizziness", "Fatigue"],
    dosage: "10-40mg once daily",
    warnings: ["Do not use during pregnancy", "May affect kidney function"]
  }
];

// Drug interactions database
export const drugInteractions = [
  {
    drug1: "Aspirin",
    drug2: "Ibuprofen",
    severity: "Moderate",
    description: "Taking these medications together may increase the risk of gastrointestinal bleeding and reduce the cardioprotective effects of aspirin.",
    recommendation: "Consult your doctor before taking these medications together. If both are needed, take ibuprofen at least 2 hours after or 8 hours before aspirin."
  },
  {
    drug1: "Lisinopril",
    drug2: "Ibuprofen",
    severity: "Moderate",
    description: "NSAIDs like ibuprofen may reduce the blood pressure-lowering effects of lisinopril and may increase the risk of kidney problems.",
    recommendation: "Monitor blood pressure regularly and consult your doctor. Acetaminophen may be a safer alternative for pain relief."
  },
  {
    drug1: "Aspirin",
    drug2: "Lisinopril",
    severity: "Minor",
    description: "Aspirin may slightly reduce the effectiveness of lisinopril, especially at high doses.",
    recommendation: "Low-dose aspirin (81mg) is generally safe. Monitor blood pressure and consult your healthcare provider."
  },
  {
    drug1: "Warfarin",
    drug2: "Aspirin",
    severity: "Major",
    description: "Combining these medications significantly increases bleeding risk.",
    recommendation: "Use only under close medical supervision. Regular blood monitoring required."
  }
];

// Appointment/consultation requests
export const consultationRequests = [
  {
    id: 1,
    userId: 1,
    doctorId: 1,
    type: "General Consultation",
    preferredDate: "2025-02-01",
    preferredTime: "10:00 AM",
    reason: "Annual checkup",
    status: "pending"
  }
];

// Health articles with full content
export const articleContent = {
  1: {
    title: "Best Foods That Support Brain Health",
    content: `
      <h2>Introduction</h2>
      <p>Your brain is the most energy-demanding organ in your body, using about 20% of your daily caloric intake. Feeding it the right nutrients is crucial for optimal cognitive function, memory, and mood regulation.</p>
      
      <h2>Top Brain-Boosting Foods</h2>
      <h3>1. Fatty Fish</h3>
      <p>Rich in omega-3 fatty acids, fish like salmon, trout, and sardines provide DHA, a crucial component of brain cell membranes. Studies show omega-3s may reduce age-related cognitive decline and lower Alzheimer's risk.</p>
      
      <h3>2. Blueberries</h3>
      <p>Packed with anthocyanins and antioxidants, blueberries have been shown to improve communication between brain cells and may delay short-term memory loss.</p>
      
      <h3>3. Nuts and Seeds</h3>
      <p>Walnuts, almonds, and pumpkin seeds contain vitamin E, which protects brain cells from oxidative stress. Just one ounce daily may improve cognitive function.</p>
      
      <h2>The Mediterranean Diet Connection</h2>
      <p>Research consistently shows that following a Mediterranean-style diet rich in vegetables, fruits, whole grains, and healthy fats is associated with better brain health and reduced dementia risk.</p>
      
      <h2>Foods to Limit</h2>
      <p>Refined sugars, trans fats, and excessive alcohol can impair brain function and increase inflammation. Moderation is key.</p>
    `,
    references: [
      "Harvard Health Publishing - Foods linked to better brainpower",
      "Journal of Neurology - Mediterranean diet and cognitive function",
      "American Journal of Clinical Nutrition - Omega-3 and brain health"
    ]
  }
};

export const blogPosts = [
  {
    id: 1,
    category: "Myasthenia Gravis",
    title: "If I Could Talk to My Pre-Diagnosis Self",
    author: "Misha Grayson Coleman",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    diagnosedSince: "2021",
    date: "Dec 23, 2025"
  },
  {
    id: 2,
    category: "Multiple Sclerosis",
    title: "What My Recurring Dreams Are Trying to Tell Me",
    author: "Reem Khatib",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    diagnosedSince: "2022",
    date: "Dec 24, 2025"
  },
  {
    id: 3,
    category: "Skin Care",
    title: "Topical Estrogen for Perimenopausal Skin: What Women in Midlife Should Know",
    author: "Mary Alice Mina, MD",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
    credentials: "Double board-certified dermatologist",
    date: "Dec 24, 2025"
  },
  {
    id: 4,
    category: "Digestive Health",
    title: "It's Time to Rethink Gluten Sensitivity",
    author: "Elizabeth Ward, RD, MS",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
    credentials: "Registered dietitian nutritionist",
    date: "Dec 22, 2025"
  }
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Family Medicine",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200",
    phone: "(800) 123-4567"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Internal Medicine",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200",
    phone: "(800) 234-5678"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Cardiology",
    rating: 5.0,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200",
    phone: "(800) 345-6789"
  }
];
