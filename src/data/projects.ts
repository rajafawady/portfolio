export const projects = [
  {
    id: 1,
    title: "Kaamsaz Platform",
    shortDescription: "Visual literacy-focused platform with multilingual support",
    longDescription: `A comprehensive platform built using the Flutter and Firebase, designed to enhance visual literacy through interactive features. 
                     It supports multiple languages, dynamic content creation, and user-generated media, allowing for personalized learning experiences.`,
    thumbnail: "/projects/kaamsaz/thumbnail.png",
    images: [
    ],
    category: "web",
    featured: true,
    tech: ["Flutter", "Firebase"],
    links: {
      github: "https://github.com/rajafawady/kaamsaz",
    },
    highlights: [
      "Integrated multilingual support (Urdu and English)",
      "Built role-based access control (RBAC) with Firebase",
      "Implemented interactive media features for enhanced learning",
      "Optimized platform performance for a smooth user experience"
    ],
    testimonial: {
      text: "Kaamsaz has revolutionized how we approach visual literacy in education.",
      author: "Hira Toheed Khan",
      position: "Client"
    }
  },
  {
    id: 2,
    title: "Pointrush Recreation App",
    shortDescription: "Recreation and exploration app with dynamic map features",
    longDescription: `A full-featured recreation platform built with the MERN stack and Next.js, designed for users to explore tracks, waypoints, and locations. 
                     The app supports real-time tracking, user-generated content, and a gamified experience for participants.`,
    thumbnail: "/pointrush-thumbnail.jpg",
    images: [
      "/pointrush-1.jpg",
      "/pointrush-2.jpg",
      "/pointrush-3.jpg"
    ],
    category: "web",
    featured: true,
    tech: ["MERN Stack", "Next.js", "Redux", "Firebase", "Map API"],
    links: {
      live: "https://pointrush.com",
      github: "https://github.com/rajafawady/pointrush",
      demo: "https://demo.pointrush.com"
    },
    highlights: [
      "Developed real-time map tracking and waypoint generation",
      "Integrated dynamic user roles with role-based content access",
      "Implemented gamification features for track completion",
      "Optimized app performance for seamless user experience"
    ],
    testimonial: {
      text: "Pointrush offers an engaging and exciting way to explore new places.",
      author: "Arjan Busger",
      position: "Explorer and Travel Blogger"
    }
  },
  {
    id: 3,
    title: "Restaurant Review Management System",
    shortDescription: "A system for restaurant reviews, ratings, and management",
    longDescription: `A web application built with the MERN stack that allows users to submit restaurant reviews, rate their experiences, 
                     and manage restaurant profiles. Features include search and filter options, as well as an admin dashboard for restaurant owners.`,
    thumbnail: "/projects/restaurant-1.png",
    images: [
      "/projects/restaurant-1.png",
      "/projects/restaurant-2.png",
      "/projects/restaurant-3.png"
    ],
    category: "web",
    featured: false,
    tech: ["MERN Stack", "Node.js", "MongoDB", "React"],
    links: {
      live: "https://restaurantreviews.com",
      github: "https://github.com/rajafawady/restaurant-review-system",
      demo: "https://demo.restaurantreviews.com"
    },
    highlights: [
      "Implemented user-friendly review submission and rating system",
      "Built dynamic search and filtering options for restaurant discovery",
      "Created an admin dashboard for restaurant management",
      "Enhanced user experience with responsive design"
    ],
    testimonial: {
      text: "This system has made it easier to discover quality restaurants.",
      author: "Ali Ahmed",
      position: "Restaurant Owner"
    }
  },
  {
    id: 4,
    title: "TEDxNUST'23 Website",
    shortDescription: "Event website for TEDxNUST 2023, showcasing speakers and agenda",
    longDescription: `A responsive event website developed using Next.js, React.js, and Tailwind CSS, providing detailed information about TEDxNUST'23, 
                     including speaker profiles, the event agenda, and ticketing options. The site is designed to offer an intuitive user experience.`,
    thumbnail: "/tedx-nust-thumbnail.jpg",
    images: [
      "/tedx-nust-1.jpg",
      "/tedx-nust-2.jpg",
      "/tedx-nust-3.jpg"
    ],
    category: "web",
    featured: false,
    tech: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    links: {
      live: "https://tedxnust23.com",
      github: "https://github.com/rajafawady/tedx-nust-website",
      demo: "https://demo.tedxnust23.com"
    },
    highlights: [
      "Built a fully responsive event website optimized for mobile devices",
      "Created a dynamic speaker profile and agenda section",
      "Integrated ticket booking and event registration system",
      "Enhanced user experience with smooth navigation and fast load times"
    ],
    testimonial: {
      text: "The TEDxNUST'23 website helped us showcase the event with style.",
      author: "Sana Malik",
      position: "Event Coordinator"
    }
  },
  {
    id: 5,
    title: "TikTok Video Downloader App",
    shortDescription: "Cross-platform app to download TikTok videos and audio",
    longDescription: `A mobile application developed with React Native that allows users to download TikTok videos with or without watermarks, 
                     extract audio, and manage downloaded content. The app supports both Android and iOS platforms.`,
    thumbnail: "/projects/tiktok/1.jpg",
    images: [
      "/projects/tiktok/2.jpg",
      "/projects/tiktok/3.jpg",
      "/projects/tiktok/4.jpg",
      "/projects/tiktok/5.jpg",
      "/projects/tiktok/6.jpg"
    ],
    category: "mobile",
    featured: false,
    tech: ["React Native", "Firebase", "Node.js"],
    links: {
      android: "https://play.google.com/store/apps/details?id=com.tiktok.downloader",
      ios: "https://apps.apple.com/app/id987654321",
      github: "https://github.com/rajafawady/tiktok-video-downloader"
    },
    highlights: [
      "Developed video downloading with and without watermark options",
      "Built audio extraction functionality for TikTok videos",
      "Integrated content management for downloaded videos",
      "Achieved high performance and smooth operation on both platforms"
    ],
    testimonial: {
      text: "A must-have app for TikTok users who love saving content.",
      author: "Ahmed Nawaz",
      position: "App User"
    }
  },
  {
    id: 6,
    title: "AquExpress",
    shortDescription: "Water tanks delivery platform with scheduling and instant delivery",
    longDescription: `A full-stack web application developed using Laravel for the purpose of water tank delivery. The app includes an admin panel and client-side functionality. 
                     Clients can schedule orders for specific dates and times, place instant delivery requests, and manage their orders. The admin panel provides features for managing orders, 
                     viewing monthly stats, and ensuring efficient operations.`,
    thumbnail: "/projects/aquexpress/1.png",
    images: [
      "/projects/aquexpress/2.png",
      "/projects/aquexpress/3.png",
      "/projects/aquexpress/4.png",
      "/projects/aquexpress/5.png",
    ],
    category: "web",
    featured: true,
    tech: ["PHP", "Laravel"],
    links: {
      live: "https://aquexpress.com",
      github: "https://github.com/rajafawady/aquexpress"
    },
    highlights: [
      "Developed scheduling and instant delivery features",
      "Created an admin panel to manage orders and view stats",
      "Built automated order placement for scheduled deliveries",
      "Visualized monthly stats with dynamic graphs"
    ],
    testimonial: {
      text: "AquExpress has streamlined our water delivery operations effectively.",
      author: "Kashif Ali",
      position: "Business Owner"
    }
  },
  {
    id: 6,
    title: "CodeKnitters NSTP Website",
    shortDescription: "Company portfolio website showcasing brand and services",
    longDescription: `A responsive portfolio website developed with Next.js and TypeScript for CodeKnitters NSTP. 
                     The site features sleek design, dynamic content, and interactive elements to engage visitors while highlighting the company's services and commitment to quality.`,
    thumbnail: "/projects/codeknitters/1.png",
    images: [
      "/projects/codeknitters/2.png",
    ],
    category: "web",
    featured: false,
    tech: ["Next.js", "TypeScript"],
    links: {
      live: "https://codeknitters.com",
      github: "https://github.com/rajafawady/codeknitters-website"
    },
    highlights: [
      "Developed with a focus on sleek and functional design",
      "Integrated dynamic content for seamless updates",
      "Optimized for responsiveness across all devices",
      "Implemented interactive features to enhance user engagement"
    ],
    testimonial: {
      text: "Our website perfectly represents our brand and the services we offer. It has impressed both clients and partners.",
      author: "Ahsan Ameen",
      position: "CEO, CodeKnitters NSTP"
    }
  },
  {
    id: 7,
    title: "Flutter Expense Tracker App",
    shortDescription: "A dynamic app for categorizing and managing expenses",
    longDescription: `A comprehensive expense tracker application built with Flutter and Dart, designed for efficient financial management. 
                     The app allows users to input and categorize expenses seamlessly while providing insightful graphical and tabular representations. 
                     Features include expense deletion functionality for greater user control.`,
    thumbnail: "/projects/expense-tracker/1.jpg",
    images: [
      "/projects/expense-tracker/1.jpg",
      "/projects/expense-tracker/2.jpg",
    ],
    category: "mobile",
    featured: false,
    tech: ["Flutter", "Dart"],
    links: {
      live: "https://expense-tracker-app.com",
      github: "https://github.com/rajafawady/flutter-expense-tracker"
    },
    highlights: [
      "Developed with intuitive categorization and input features",
      "Provided graphical and tabular expense insights for users",
      "Implemented expense deletion for efficient management",
      "Optimized for smooth performance across devices"
    ],
    testimonial: {
      text: "This app has revolutionized the way I manage my finances. Simple, efficient, and insightful!",
      author: "Sarah Ali",
      position: "Finance Enthusiast"
    }
  }
];
