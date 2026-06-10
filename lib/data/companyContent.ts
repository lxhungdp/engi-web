import type {
  ArgosCarePlan,
  CompanyProduct,
  CompanySolution,
  HeroSlide,
  NewsItem,
  PartnerLogo,
  SupportItem,
  WorkflowStep,
} from "@/lib/types/company";

export const productCategories = ["Drone", "Station", "Software"] as const;

export const heroSlides: HeroSlide[] = [
  {
    headline: "INNOVATING DRONE TECHNOLOGY",
    subline: "ARGOSDYNE, an autonomous flying drone control solution company",
    image: "/images/home/drone1.png",
  },
  {
    headline: "INNOVATING DRONE TECHNOLOGY",
    subline: "Self-developed drone self-flight&Unmanned Operating System",
    image: "/images/home/drone2.png",
  },
  {
    headline: "INNOVATING DRONE TECHNOLOGY",
    subline: "Drone Technology Innovates for a Better Future",
    image: "/images/home/drone_mob.png",
  },
];

export const products: CompanyProduct[] = [
  {
    slug: "aquila-2",
    name: "AQUILA-2",
    category: "Drone",
    tagline: "Small drone with outstanding performance in various environments",
    description:
      "AQUILA-2 is efficiently used in industrial sites due to its excellent flight time and stability. Small but effective data acquisition is possible depending on the payload configured by the user.",
    image: "/images/products/sub_top_prd01.png",
    gallery: [
      "/images/products/prd01_01_01.png",
      "/images/products/prd01_01_02.png",
      "/images/products/prd01_01_03.png",
      "/images/products/prd01_01_04.png",
      "/images/products/prd01_01_05.png",
      "/images/products/prd01_01_06.png",
    ],
    features: [
      "Waterproof and wind-resistant features for stability and long flight times",
      "Dual GPS modules for precise location even without RTK",
      "Quick-release payload system supporting FHD to 4K EO/IR cameras",
      "Simple external I/O ports for easy payload connection",
      "RTK and DUAL GPS for high precision mapping data",
      "Compatible with Drone Stations for autonomous continuous missions",
    ],
    applications: [
      "Industrial field operations",
      "Multipurpose missions with configurable payloads",
      "High precision mapping",
      "Station-integrated autonomous flights",
    ],
    specs: [
      { label: "Maximum takeoff weight", value: "4kg" },
      { label: "Wind resistance", value: "15m/s" },
      { label: "Waterproof Rating", value: "IP53" },
      { label: "Maximum flight time", value: "67 minutes" },
      { label: "Mission equipment attachment", value: "Maximum 1.5kg" },
    ],
    detailSections: [
      {
        title: "Stability",
        description:
          "Designed to provide robust thrust despite low power, allowing for extended flight durations. Equipped with dual GPS modules, it delivers precise location information even without an RTK system. This implies enhanced stability during flights in electromagnetic environments such as power transmission towers.",
        image: "/images/products/prd01_01_08.png",
      },
      {
        title: "Long flights and dual GPS",
        description:
          "With powerful thrust and efficient power consumption, AQUILA-2 guarantees long-duration flight. It integrates a dual GPS module that receives signals from multiple satellite systems for accurate positioning even in electromagnetic environments.",
        specs: [
          { label: "Maximum flight time", value: "67 minutes" },
          { label: "Enhanced Flight Stability", value: "Dual GPS Support" },
        ],
        image: "/images/products/prd01_01_09.png",
      },
      {
        title: "The Most Convenient Way for Users, Customization",
        description:
          "Because all components, including software, are designed and developed in-house, customized development is possible to meet specific customer requirements. The basic equipment includes various cameras, searchlights, and speaker systems.",
        specs: [{ label: "Mission equipment attachment", value: "Maximum 1.5kg" }],
        image: "/images/products/prd01_01_10.png",
      },
      {
        title: "Integration with the Station (Optional)",
        description:
          "Compatible with Drone Stations, allowing for autonomous continuous mission flights. The Drone Station automatically charges the drone's battery, enabling automated and uninterrupted mission execution.",
        image: "/images/products/prd01_01_12.png",
      },
    ],
    highlighted: true,
  },
  {
    slug: "aquila-2-plus",
    name: "AQUILA-2+",
    category: "Drone",
    tagline: "Drone and AI integration",
    description:
      "Aquila-2+ is a high-performance multi-purpose drone based on the performance of Aquila-2, with support for 5G/AI and other features.",
    image: "/images/products/sub_top_prd02.png",
    features: [
      "Latest Qualcomm RB5 high-performance CPU",
      "Onboard AI edge processing for real-time sensor analysis",
      "Built-in 5G/LTE wireless communication",
      "Autonomous path planning and obstacle avoidance",
      "Autonomous flight-based 3D-SLAM functionality",
      "Millisecond device data processing for complex AI workloads",
    ],
    applications: [
      "AI-assisted autonomous operations",
      "Real-time environmental analysis",
      "Long-range 5G connected missions",
      "Edge AI processing without server dependency",
    ],
    specs: [
      { label: "Compute", value: "Qualcomm RB5 high-performance CPU" },
      { label: "Connectivity", value: "5G / LTE / WiFi" },
      { label: "AI", value: "Onboard edge AI processing" },
      { label: "Navigation", value: "3D-SLAM autonomous flight" },
    ],
    detailSections: [
      {
        title: "Onboard AI",
        description:
          "It processes and analyzes sensor data in real-time to optimize the operation of applications or devices, or to perform specific tasks. This is primarily done to increase response speed and avoid network delays. Through this, it autonomously analyzes real-time environmental data and performs tasks such as path planning and obstacle avoidance, enabling smarter behavior.",
      },
      {
        title: "5G Connection",
        description:
          "Built-in 5G/LTE supports 5G/LTE Internet wireless communication.",
        specs: [{ label: "Communication", value: "5G / Long-range WiFi" }],
      },
      {
        title: "AI Features of the Edge Device",
        description:
          "By providing a high-performance CPU based on RB5, various data processing, and ML/AI capabilities are offered. This enables autonomous AI processing within the drone without dependency on servers, and supports autonomous flight-based 3D-SLAM functionality.",
      },
    ],
  },
  {
    slug: "aquila-3f",
    name: "AQUILA-3F",
    category: "Drone",
    tagline: "Small drone with outstanding performance in various environments",
    description:
      "Based on the AQUILA-3F, a more powerful motor and folding arm have been applied to enhance flight and storage/transportation efficiency.",
    image: "/images/products/sub_top_prd03.png",
    features: [
      "Waterproof and wind-resistant for stability and long flight times",
      "Folding arm design for efficient storage and transport",
      "Dual GPS modules for high-precision positioning",
      "Quick-release payload system up to 4.2kg",
      "RTK and DUAL GPS for high precision mapping",
      "Compatible with drone stations (excluding station CUNA2)",
    ],
    applications: [
      "Industrial multipurpose missions",
      "Aerial surveying and mapping",
      "High payload operations",
      "Station-integrated autonomous flights",
    ],
    specs: [
      { label: "Maximum takeoff weight", value: "7.0kg" },
      { label: "Wind resistance", value: "15m/s" },
      { label: "Waterproof Rating", value: "IP53" },
      { label: "Maximum flight time", value: "76 minutes" },
      { label: "Mission equipment attachment", value: "Maximum 4.2kg" },
    ],
    detailSections: [
      {
        title: "Storage Efficiency",
        description:
          "By applying a folding arm, the four motor arms can be folded for efficient storage. Additionally, the sponge storage case + hard case carrier configuration allows for convenient and efficient movement.",
      },
      {
        title: "Long flights and dual GPS",
        description:
          "With powerful thrust and efficient power consumption, Aquila-3F ensures extended flight times. It integrates dual GPS modules to receive signals from multiple satellite systems for accurate position determination, even in electromagnetic environments.",
        specs: [
          { label: "Maximum flight time", value: "76 minutes" },
          { label: "Enhanced Flight Stability", value: "Dual GPS Support" },
        ],
      },
      {
        title: "Integration with the Station (Optional)",
        description:
          "This drone is compatible with drone stations, enabling autonomous continuous mission flights. The drone station automatically charges the drone's battery, allowing it to perform automated, continuous missions. (Excluding station CUNA2)",
      },
    ],
  },
  {
    slug: "cuna2",
    name: "CUNA2",
    category: "Station",
    tagline: "24/7 System",
    description:
      "It is a fixed station that is continuously placed in one place and used. Since the aircraft is left on in the station, unnecessary time such as flight setting can be reduced.",
    image: "/images/products/sub_top_prd04.png",
    features: [
      "365 days a year, 24 hours a day storage regardless of temperature or season",
      "Waterproof Rating IP53 with heating and cooling",
      "Automatic takeoff, landing, and recharging",
      "Automatic unmanned operation",
      "Operated via argosALES over internet connectivity",
      "Multiple operation scenarios: Basic, Alternating, Sequential Hopping, Push-Pull",
    ],
    applications: [
      "Continuous site monitoring",
      "Repetitive flights at specific intervals",
      "Unattended autonomous operations",
      "Wide area coverage with multiple stations",
    ],
    specs: [
      { label: "Operation", value: "24/7 year-round" },
      { label: "Waterproof Rating", value: "IP53" },
      { label: "Features", value: "Heating and cooling" },
      { label: "Control", value: "argosALES operating software" },
    ],
    detailSections: [
      {
        title: "Automatic Landing and Charging System",
        description:
          "It automatically takes off and lands, and upon completing a mission and landing, it undergoes automatic recharging.",
      },
      {
        title: "Basic Mission-Return-Charging Scenario",
        description:
          "If there is only one station, its operation is simple. When the drone's battery is fully charged, the drone flies up and performs its mission. After completing the mission, it returns to the station and gets ready to be charged again. Pros: Simple Structure, Easy to Operate. Cons: Not continuous operation.",
      },
      {
        title: "Alternating Mission-Return-Charging Scenario",
        description:
          "Assume there are more than one station with the same number of drones. With this topology, one drone can do a mission while other drones being charged and ready for flight. This scheme will reduce the time for preparing another flight. Pros: the continuity of service improves. The rest time between flights is shortened. Cons: when the charging time increases in one of drones, the overall efficiency becomes bad.",
      },
      {
        title: "Sequential Hopping System",
        description:
          "Assume there are more than one station with only one drone. A drone can land at any station when its battery is almost done. When each station is properly located around the target area, only one drone can cover wide area. Pros: the coverage becomes wider. Cons: cost for additional stations.",
      },
      {
        title: "Push-Pull Scenario",
        description:
          "Assume there are more than one station with the same number of drones. When all drones are charged, they can be rotated among stations. For example, there are three stations (A, B, C) and three drones (1, 2, 3). Initially, Drone 1 is at Station A, Drone 2 is at Station B, and Drone 3 is at Station C. When the mission starts, Drone 1 moves to Station B, Drone 2 moves to Station C, and Drone 3 moves to Station A simultaneously. Pros: the coverage is wider, and the system can monitor wider area simultaneously. Cons: cost for additional stations and drones.",
      },
      {
        title: "Anywhere on Earth",
        description:
          "As long as there is internet connectivity for operation via the argosALES operating software, it can be operated by administrators.",
      },
    ],
    highlighted: true,
  },
  {
    slug: "argosales",
    name: "argosALES",
    category: "Software",
    tagline: "Ground control system for remote drone and station operations",
    description:
      "As a ground control system, it allows remote control of multiple drones and stations over the internet.",
    image: "/images/products/sub_top_prd10.png",
    gallery: [
      "/images/products/prd03_01.png",
      "/images/products/prd03_02.png",
      "/images/products/prd03_03.png",
    ],
    features: [
      "Flight path planning with pause and return commands",
      "PC installation software with patrol specialized mission planner",
      "Real-time video and camera control",
      "Simultaneous remote control of multiple drones and stations",
      "Remote control of mission devices",
      "Supports LTE/5G, WiFi, and Data Link networks",
    ],
    applications: [
      "Operations center control",
      "Multi-drone fleet management",
      "Continuous mission configuration",
      "Remote station operations",
    ],
    specs: [
      { label: "Platform", value: "PC Installation Software" },
      { label: "Network", value: "LTE/5G, WiFi, Data Link" },
      { label: "Control", value: "Multi-drone and multi-station" },
    ],
    detailSections: [
      {
        title: "Flight Path Planning",
        description:
          "You can freely designate the flight path, and various commands such as pause and return are possible during flight.",
        image: "/images/products/prd03_01.png",
      },
      {
        title: "Real-time Video and Camera Control",
        description:
          "You can view the live feed of the drone in real-time, and control features such as taking photos/videos and adjusting the camera angle and zoom.",
        image: "/images/products/prd03_02.png",
      },
      {
        title: "Network",
        description:
          "It supports various network environments such as LTE/5G, WiFi, Data Link, and applies communication methods suitable for the user's operating environment, allowing remote control of multiple drones and stations.",
        image: "/images/products/prd03_03.png",
      },
      {
        title: "BirdCom",
        description:
          "A Companion Board that plays a crucial role in remotely controlling drones, stations, etc. It is installed as a component of the drone and allows integrated control through argosALES. Additionally, when attached to drones of other models, it enables the operation of the respective drone with the Rondo system.",
      },
    ],
    highlighted: true,
  },
];

export const solutions: CompanySolution[] = [
  {
    slug: "public-safety",
    name: "Public Safety",
    description:
      "We help ensure maximum safety based on aerial data collected through drone technology",
    problem:
      "A rapid situational awareness based on aviation data allows for effective response to emergency missions such as wildfire detection and nighttime surveillance.",
    benefits: [
      "Rapid Emergency Response — Quickly detecting emergency situations allows for prompt initial response, aiding in safety.",
      "Information Collection and Analysis — Equipped with high-resolution and thermal cameras, drones can swiftly and accurately assess the location and scale of fires.",
      "Surveillance Tool — Drones serve as crucial tools for surveillance teams, ensuring safety and enabling faster responses.",
    ],
    technology: "AQUILA-2 with thermal imaging camera (ZT30 payload), CUNA2 or PORTUS-P station (optional)",
    outcome: "Real-time monitoring and quicker response in the event of wildfires or emergencies.",
    image: "/images/solutions/sol_bg01.png",
    icon: "Shield",
    featured: true,
    videos: [
      {
        youtubeId: "D2vdLuStLpc",
        title: "Fire Monitoring and Crime Prevention (Featured Video - Rainbow)",
        description:
          "When relying solely on CCTV or security personnel, surveillance coverage may be limited. Especially in large areas, it can be difficult to effectively monitor hard-to-reach areas. During nighttime patrols, it becomes challenging to accurately detect objects or activities within the field of view, resulting in delayed responses to crime or safety issues.",
      },
      {
        youtubeId: "0IavSxgLe9s",
        title: "Utilizing Drones for Fire Monitoring and Crime Prevention (Featured Video - White Hot)",
        description:
          "By using thermal cameras, drones can detect fires or crimes from afar. This helps overcome blind spots of CCTV and accurately identifies crime scenes or fire locations.",
      },
    ],
  },
  {
    slug: "highway-surveillance",
    name: "Highway Surveillance",
    description:
      "Provide accurate and timely highway information for faster safety measures",
    problem:
      "We are implementing a control system that utilizes automatic charging stations and autonomous drones deployed near highways for regular patrols, surveillance activities, and real-time monitoring of road conditions.",
    benefits: [
      "Fast and Efficient Response — Swiftly detect accidents, traffic congestion, road conditions, etc., while moving quickly through long highway sections.",
      "Automated Functions — Capable of performing specific tasks autonomously, enabling control without operator intervention.",
      "Economic Efficiency — Cost-effective operations enable high-quality surveillance and management.",
    ],
    technology: "AQUILA-2 with ZR30 payload and Speaker, CUNA2 or PORTUS-M+ station (optional)",
    outcome: "Real-time monitoring to maintain highway safety and prevent secondary accidents.",
    image: "/images/solutions/sol_bg02.png",
    icon: "Route",
    videos: [
      {
        youtubeId: "ba3XXrwhui4",
        title: "Utilization Video: Highway Traffic Monitoring",
        description:
          "Drones equipped with speakers and searchlights enable on-site control before emergency vehicles arrive. Prior to the arrival of the response team, drones capture data using cameras such as thermal imaging and multispectral cameras to quickly assess situations and support planning in challenging disaster environments.",
      },
    ],
  },
  {
    slug: "facility-monitoring",
    name: "Facility Monitoring",
    description:
      "Utilize automated patrol drones to conduct regular patrols and monitor the site in real-time",
    problem: "Large industrial sites require consistent patrol coverage and real-time monitoring.",
    technology: "Automated patrol drones with CUNA2 fixed station for scheduled missions.",
    outcome: "Regular patrols and real-time site monitoring with reduced manual setup.",
    image: "/images/solutions/sol_bg03.png",
    icon: "Building2",
    featured: true,
  },
  {
    slug: "aerial-surveying-and-mapping",
    name: "Aerial Surveying and Mapping",
    description:
      "Mapping automation and digitization using drone solutions",
    problem:
      "The drone performs mapping tasks and captures photos at each flight location, leaving behind site survey images to track construction progress and completion rates.",
    benefits: [
      "Innovative Approach: Drones — Using drones offers the capability to collect data even in challenging and hazardous environments.",
      "Enhanced Efficiency — It improves the efficiency of geographical information gathering and simplifies data processing.",
      "High-Resolution Mapping and Modeling — Drones can be equipped with high-resolution cameras and sensors to capture detailed information.",
    ],
    technology: "EasyMapper-C with AQUILA-3F platform",
    outcome: "Accurate maps and 3D models for construction progress tracking.",
    image: "/images/solutions/sol_bg04.png",
    icon: "Map",
  },
];

export const partners: PartnerLogo[] = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  image: `/images/partners/partners_logo${i + 1}.png`,
  alt: `Partner ${i + 1}`,
}));

export const newsItems: NewsItem[] = [
  {
    id: "341",
    slug: "excellent-corporate-research-center-ministry-science-ict",
    date: "2024-06-24",
    category: "NEWS",
    title:
      "ARGOSDYNE, designated as an excellent corporate research center by the Ministry of Science and ICT",
    excerpt:
      "ARGOSDYNE has been recognized as an excellent corporate research center by Korea's Ministry of Science and ICT.",
    body: "ARGOSDYNE has been designated as an excellent corporate research center by the Ministry of Science and ICT, recognizing the company's continued investment in autonomous drone technology and unmanned operating systems.",
    image: "/images/news/980872.png",
  },
  {
    id: "340",
    slug: "top-100-startups-material-managers",
    date: "2024-06-24",
    category: "NEWS",
    title:
      "ARGOSDYNE, selected as one of the top 100 startups for material managers (materials, parts, equipment)",
    excerpt:
      "ARGOSDYNE was selected among the top 100 startups for materials, parts, and equipment.",
    body: "ARGOSDYNE was selected as one of the top 100 startups for material managers, covering materials, parts, and equipment — highlighting the company's role in Korea's advanced manufacturing and drone supply ecosystem.",
    image: "/images/news/496010.png",
  },
  {
    id: "339",
    slug: "cactus-distribution-visits-argosdyne",
    date: "2024-06-24",
    category: "NEWS",
    title: "Cactus Distribution visits ARGOSDYNE",
    excerpt: "Cactus Distribution visited ARGOSDYNE to explore partnership opportunities.",
    body: "Cactus Distribution visited ARGOSDYNE headquarters to discuss distribution partnerships and autonomous drone solutions for international markets.",
    image: "/images/news/184282.png",
  },
  {
    id: "338",
    slug: "secures-9-million-drone-export-contract",
    date: "2024-06-24",
    category: "NEWS",
    title:
      "ARGOSDYNE, Secures $9 Million Drone Export Contract to North and South America",
    excerpt:
      "ARGOSDYNE secured a $9 million drone export contract covering North and South America.",
    body: "ARGOSDYNE secured a $9 million drone export contract to North and South America, expanding the global reach of its AQUILA drone platforms and autonomous operating solutions.",
    image: "/images/news/643069.png",
  },
  {
    id: "337",
    slug: "appears-in-silver-lining-documentary",
    date: "2024-06-24",
    category: "NEWS",
    title:
      "ARGOSDYNE, appears in 'Silver Lining', a documentary about startups' overseas expansion",
    excerpt:
      "ARGOSDYNE is featured in the documentary 'Silver Lining' about startup overseas expansion.",
    body: "ARGOSDYNE appears in 'Silver Lining', a documentary showcasing how Korean startups expand overseas, featuring the company's autonomous drone technology and global growth strategy.",
    image: "/images/news/191828.png",
  },
  {
    id: "336",
    slug: "luncheon-meeting-president-korean-american-startups",
    date: "2024-06-24",
    category: "NEWS",
    title:
      "ARGOSDYNE holds a luncheon and meeting with the President along with participating Korean and American startup companies",
    excerpt:
      "ARGOSDYNE joined Korean and American startups for a luncheon and meeting with the President.",
    body: "ARGOSDYNE participated in a luncheon and meeting with the President alongside Korean and American startup companies, discussing innovation in autonomous systems and international collaboration.",
    image: "/images/news/80472.jpg",
  },
  {
    id: "335",
    slug: "participates-in-intergeo-2022-essen-germany",
    date: "2024-06-24",
    category: "NEWS",
    title: "ARGOSDYNE, participates in INTERGEO 2022 held in Essen, Germany",
    excerpt: "ARGOSDYNE showcased mapping and surveying solutions at INTERGEO 2022 in Essen.",
    body: "ARGOSDYNE participated in INTERGEO 2022 in Essen, Germany, presenting aerial surveying and mapping solutions powered by its drone platforms and ground control systems.",
    image: "/images/news/745554.png",
  },
  {
    id: "334",
    slug: "participates-science-festival-daejeon-autonomous-police",
    date: "2024-06-24",
    category: "NEWS",
    title:
      "ARGOSDYNE, Participates in Science Festival with Daejeon Autonomous Police Committee",
    excerpt:
      "ARGOSDYNE demonstrated public safety drone technology at a science festival with Daejeon Autonomous Police.",
    body: "ARGOSDYNE participated in a science festival with the Daejeon Autonomous Police Committee, demonstrating how autonomous drones support public safety and emergency response missions.",
    image: "/images/news/827689.jpg",
  },
  {
    id: "333",
    slug: "digital-pilot-branch-korea-expressway-corporation",
    date: "2024-06-24",
    category: "NEWS",
    title:
      "ARGOSDYNE, Conducts Digital Pilot Branch Project with Korea Expressway Corporation",
    excerpt:
      "ARGOSDYNE launched a digital pilot branch project with Korea Expressway Corporation.",
    body: "ARGOSDYNE conducts a Digital Pilot Branch Project with Korea Expressway Corporation, deploying autonomous drones and stations for highway surveillance and real-time road condition monitoring.",
    image: "/images/news/720150.png",
  },
];

export const argosCarePlans: ArgosCarePlan[] = [
  {
    id: "case-1",
    name: "Case 1",
    serviceCost: "15% of the selling price (Register for ArgosCare - Case1 at the time of purchase)",
    servicePeriod: "1-year plan",
    serviceConditions: [
      "You are eligible for one free drone replacement within 1-year from the date of purchase.",
      "Operated by designated drone pilots",
      "If no free replacement service has been received during the service period, warranty extension service will be provided for 1 year.",
    ],
    serviceDetails: [
      "Product Exchange Service: One free drone exchange service within 1 year from the date of purchase.",
      "Dedicated Service Channel Operation: Operation of a dedicated technical service channel via KakaoTalk or other social media platforms twice a month.",
      "Free Shipping: Free shipping for sending the product for replacement service.",
    ],
  },
  {
    id: "case-2",
    name: "Case 2",
    serviceCost: "10% of the selling price (Register for ArgosCare - Case2 at the time of purchase)",
    servicePeriod: "1-year plan",
    serviceConditions: [
      "Within one year from the purchase date, you are entitled to two free replacements for drone parts.",
      "Operated by designated drone pilots",
      "If no drone parts free replacement service has been received during the service period, warranty extension service will be provided for 1 year.",
    ],
    serviceDetails: [
      "Provision of Replacement Parts: Provision of replacement parts during the repair period. However, shipping will be arranged after receiving the faulty item.",
      "Free Parts Replacement Service: Two free services within 1 year from the date of purchase. Free replacement and repair for damaged parts occurring during operation.",
      "Dedicated Service Channel Operation: Operation of a dedicated technical service channel via KakaoTalk or other social media platforms twice a month.",
      "Free Shipping: Free shipping for sending the product for replacement service.",
    ],
  },
];

export const warrantyTerms = [
  "Small self-pay replacement service",
  "Service conditions apply based on ArgosCare registration at time of purchase",
  "Warranty extension available if no free replacement service received during service period",
];

export const supportItems: SupportItem[] = [
  {
    id: "argoscare",
    title: "ArgosCare",
    description: "Customer service plans with drone replacement and parts support.",
    icon: "Headphones",
    href: "/support#argoscare",
  },
  {
    id: "warranty",
    title: "Assurance",
    description: "Warranty terms and service conditions for ARGOSDYNE products.",
    icon: "ShieldCheck",
    href: "/support#warranty",
  },
  {
    id: "inquiry",
    title: "Inquiry",
    description: "Submit a product inquiry with your contact and company details.",
    icon: "Mail",
    href: "/contact",
  },
];

export const inquiryProducts = [
  "AQUILA-2",
  "AQUILA-2+",
  "AQUILA-3F",
  "CUNA2",
  "argosALES",
] as const;

export const productWorkflow: WorkflowStep[] = [
  { step: 1, title: "Plan", description: "Define mission area, payload requirements, and output goals." },
  { step: 2, title: "Deploy", description: "Install drones, stations, and connect argosALES." },
  { step: 3, title: "Operate", description: "Run manual or autonomous missions with live monitoring." },
  { step: 4, title: "Analyze", description: "Review imagery, telemetry, and mission findings." },
];

export function getProductBySlug(slug: string): CompanyProduct | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSolutionBySlug(slug: string): CompanySolution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

export function getAllNewsSlugs(): string[] {
  return newsItems.map((item) => item.slug);
}
