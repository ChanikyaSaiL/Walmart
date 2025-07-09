// Mission types with associated product categories and recommendations
export const missionTypes = [
  {
    id: 'birthday-party',
    name: 'Birthday Party',
    icon: '🎉',
    description: 'Everything you need for an amazing birthday celebration',
    color: 'pink',
    budgetRanges: [
      { min: 500, max: 1500, label: 'Basic Party (₹500-₹1,500)' },
      { min: 1500, max: 3000, label: 'Standard Party (₹1,500-₹3,000)' },
      { min: 3000, max: 6000, label: 'Premium Party (₹3,000-₹6,000)' },
      { min: 6000, max: 15000, label: 'Luxury Party (₹6,000+)' }
    ],
    categories: [
      {
        name: 'Decorations',
        priority: 1,
        budgetPercentage: 30,
        productCategories: ['Home & Living'],
        keywords: ['lamp', 'lighting', 'decor']
      },
      {
        name: 'Entertainment',
        priority: 2,
        budgetPercentage: 25,
        productCategories: ['Electronics', 'Gaming'],
        keywords: ['headset', 'speaker', 'gaming', 'music']
      },
      {
        name: 'Food & Kitchen',
        priority: 3,
        budgetPercentage: 25,
        productCategories: ['Home & Living'],
        keywords: ['coffee', 'kitchen', 'microwave']
      },
      {
        name: 'Party Essentials',
        priority: 4,
        budgetPercentage: 20,
        productCategories: ['Fashion', 'Beauty & Care'],
        keywords: ['dress', 'makeup', 'skincare']
      }
    ]
  },
  {
    id: 'wedding',
    name: 'Wedding Preparation',
    icon: '💒',
    description: 'Complete wedding planning essentials',
    color: 'rose',
    budgetRanges: [
      { min: 2000, max: 5000, label: 'Intimate Wedding (₹2,000-₹5,000)' },
      { min: 5000, max: 10000, label: 'Standard Wedding (₹5,000-₹10,000)' },
      { min: 10000, max: 25000, label: 'Grand Wedding (₹10,000-₹25,000)' },
      { min: 25000, max: 50000, label: 'Luxury Wedding (₹25,000+)' }
    ],
    categories: [
      {
        name: 'Bridal Beauty',
        priority: 1,
        budgetPercentage: 35,
        productCategories: ['Beauty & Care', 'Fashion'],
        keywords: ['makeup', 'skincare', 'hair', 'dress', 'jewelry']
      },
      {
        name: 'Home Setup',
        priority: 2,
        budgetPercentage: 30,
        productCategories: ['Home & Living'],
        keywords: ['furniture', 'dining', 'bed', 'kitchen', 'lighting']
      },
      {
        name: 'Electronics',
        priority: 3,
        budgetPercentage: 20,
        productCategories: ['Electronics'],
        keywords: ['camera', 'phone', 'laptop', 'audio']
      },
      {
        name: 'Documentation',
        priority: 4,
        budgetPercentage: 15,
        productCategories: ['Books & Media'],
        keywords: ['book', 'album']
      }
    ]
  },
  {
    id: 'home-office',
    name: 'Home Office Setup',
    icon: '🏠',
    description: 'Create the perfect work-from-home environment',
    color: 'blue',
    budgetRanges: [
      { min: 1000, max: 3000, label: 'Basic Setup (₹1,000-₹3,000)' },
      { min: 3000, max: 6000, label: 'Standard Setup (₹3,000-₹6,000)' },
      { min: 6000, max: 12000, label: 'Professional Setup (₹6,000-₹12,000)' },
      { min: 12000, max: 25000, label: 'Executive Setup (₹12,000+)' }
    ],
    categories: [
      {
        name: 'Computing',
        priority: 1,
        budgetPercentage: 50,
        productCategories: ['Electronics'],
        keywords: ['laptop', 'phone', 'headphones', 'camera']
      },
      {
        name: 'Furniture',
        priority: 2,
        budgetPercentage: 30,
        productCategories: ['Home & Living'],
        keywords: ['table', 'furniture', 'lighting', 'lamp']
      },
      {
        name: 'Gaming & Entertainment',
        priority: 3,
        budgetPercentage: 15,
        productCategories: ['Gaming'],
        keywords: ['keyboard', 'headset', 'gaming', 'console']
      },
      {
        name: 'Reference Materials',
        priority: 4,
        budgetPercentage: 5,
        productCategories: ['Books & Media'],
        keywords: ['book', 'cookbook']
      }
    ]
  },
  {
    id: 'fitness-journey',
    name: 'Fitness Journey',
    icon: '💪',
    description: 'Start your fitness transformation',
    color: 'green',
    budgetRanges: [
      { min: 500, max: 1500, label: 'Beginner (₹500-₹1,500)' },
      { min: 1500, max: 3000, label: 'Intermediate (₹1,500-₹3,000)' },
      { min: 3000, max: 6000, label: 'Advanced (₹3,000-₹6,000)' },
      { min: 6000, max: 12000, label: 'Professional (₹6,000+)' }
    ],
    categories: [
      {
        name: 'Activewear',
        priority: 1,
        budgetPercentage: 40,
        productCategories: ['Fashion'],
        keywords: ['shoes', 'clothing', 'jacket']
      },
      {
        name: 'Tech & Tracking',
        priority: 2,
        budgetPercentage: 30,
        productCategories: ['Electronics'],
        keywords: ['watch', 'phone', 'headphones', 'audio']
      },
      {
        name: 'Nutrition',
        priority: 3,
        budgetPercentage: 20,
        productCategories: ['Home & Living'],
        keywords: ['kitchen', 'coffee']
      },
      {
        name: 'Wellness',
        priority: 4,
        budgetPercentage: 10,
        productCategories: ['Beauty & Care'],
        keywords: ['skincare', 'hair']
      }
    ]
  },
  {
    id: 'gaming-setup',
    name: 'Gaming Setup',
    icon: '🎮',
    description: 'Build the ultimate gaming experience',
    color: 'purple',
    budgetRanges: [
      { min: 1500, max: 4000, label: 'Casual Gamer (₹1,500-₹4,000)' },
      { min: 4000, max: 8000, label: 'Enthusiast (₹4,000-₹8,000)' },
      { min: 8000, max: 15000, label: 'Pro Gamer (₹8,000-₹15,000)' },
      { min: 15000, max: 30000, label: 'Elite Setup (₹15,000+)' }
    ],
    categories: [
      {
        name: 'Gaming Hardware',
        priority: 1,
        budgetPercentage: 60,
        productCategories: ['Gaming', 'Electronics'],
        keywords: ['console', 'headset', 'keyboard', 'gaming', 'laptop']
      },
      {
        name: 'Setup & Comfort',
        priority: 2,
        budgetPercentage: 25,
        productCategories: ['Home & Living'],
        keywords: ['furniture', 'lighting', 'lamp']
      },
      {
        name: 'Streaming & Content',
        priority: 3,
        budgetPercentage: 10,
        productCategories: ['Electronics'],
        keywords: ['camera', 'audio', 'microphone']
      },
      {
        name: 'Gaming Culture',
        priority: 4,
        budgetPercentage: 5,
        productCategories: ['Books & Media', 'Fashion'],
        keywords: ['book', 'clothing']
      }
    ]
  },
  {
    id: 'new-home',
    name: 'New Home Essentials',
    icon: '🏡',
    description: 'Everything needed for your new home',
    color: 'orange',
    budgetRanges: [
      { min: 3000, max: 8000, label: 'Basic Essentials (₹3,000-₹8,000)' },
      { min: 8000, max: 15000, label: 'Comfortable Living (₹8,000-₹15,000)' },
      { min: 15000, max: 30000, label: 'Well-Furnished (₹15,000-₹30,000)' },
      { min: 30000, max: 60000, label: 'Luxury Home (₹30,000+)' }
    ],
    categories: [
      {
        name: 'Furniture',
        priority: 1,
        budgetPercentage: 50,
        productCategories: ['Home & Living'],
        keywords: ['sofa', 'bed', 'table', 'dining', 'furniture']
      },
      {
        name: 'Kitchen Appliances',
        priority: 2,
        budgetPercentage: 25,
        productCategories: ['Home & Living'],
        keywords: ['coffee', 'microwave', 'kitchen']
      },
      {
        name: 'Electronics',
        priority: 3,
        budgetPercentage: 15,
        productCategories: ['Electronics'],
        keywords: ['laptop', 'phone', 'audio', 'camera']
      },
      {
        name: 'Lighting & Decor',
        priority: 4,
        budgetPercentage: 10,
        productCategories: ['Home & Living'],
        keywords: ['lamp', 'lighting']
      }
    ]
  }
];

// Helper function to get mission by ID
export const getMissionById = (id) => {
  return missionTypes.find(mission => mission.id === id);
};

// Helper function to get budget range label
export const getBudgetRangeLabel = (missionId, budget) => {
  const mission = getMissionById(missionId);
  if (!mission) return '';
  
  const range = mission.budgetRanges.find(range => budget >= range.min && budget <= range.max);
  return range ? range.label : `Custom Budget (₹${budget.toLocaleString()})`;
};
