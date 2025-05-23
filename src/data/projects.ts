export const projects = [
  {
    id: 0,
    title: "CowSense",
    shortDescription: "Real-time cattle health monitoring and management system with IoT integration",
    longDescription: `An integrated platform for real-time health monitoring and management of cattle, leveraging IoT sensors, cloud services, and AI-driven insights. 
                     The system is designed for both farmers and veterinarians, providing tailored mobile applications and a robust backend for data collection, analysis, and alerting. 
                     It features continuous health monitoring using various IoT sensors including temperature, heart rate, SpO2, and GPS tracking.`,    thumbnail: "/projects/cowsense/splash.jpg",
    images: [
      "/projects/cowsense/splash.jpg",
      "/projects/cowsense/auth.jpg",
      "/projects/cowsense/home.jpg",
      "/projects/cowsense/animal_dashboard.jpg",
      "/projects/cowsense/user_profile.jpg",
      "/projects/cowsense/animals_list.jpg", 
      "/projects/cowsense/add_animal.jpg",
      "/projects/cowsense/animal_alerts.jpg",
      "/projects/cowsense/push_notification.jpg",
      "/projects/cowsense/animal_graphs.jpg",
      "/projects/cowsense/animal_map.jpg",
      "/projects/cowsense/appointments.jpg",
      "/projects/cowsense/appointment_details.jpg",
      "/projects/cowsense/ai_disease_detection.jpg",
    ],
    category: "mobile",
    featured: true,
    tech: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB", "Socket.IO", "IoT"],
    links: {
      // live: "https://cowsense-platform.com",
      github: "https://github.com/rajafawady/cowsense",
      // demo: "https://demo.cowsense-platform.com"
    },
    highlights: [
      "Real-Time Health Dashboard - Added information about the live vital metrics display for each cow",
      "Push Notifications System - Highlighted the alerts for abnormal health readings",
      "Interactive Charts - Added the historical health data visualization feature",
      "Secure Authentication - Included the Firebase and Google Sign-In implementation",
      "Gemini AI Chat Assistant - Added the AI-powered chat support feature",
      "AI Disease Detection - Maintained the AI-powered disease detection functionality",
      "Real-time Chat - Implemented direct messaging between farmers and veterinarians"
    ],
    testimonial: {
      text: "CowSense has transformed our cattle management with its real-time monitoring and alerts. It's a game-changer for modern farming.",
      author: "Dr. Ahmed Khan",
      position: "Veterinarian and Livestock Specialist"
    }
  },
  {
    id: 1,
    title: "Kaamsaz Platform",
    shortDescription: "A Multilingual platform which connects customers to local service providers",
    longDescription: `Kaamsaz is a comprehensive platform designed to empower local service providers, giving them a platform to offer a wide range of work opportunities including home repairs, cleaning, plumbing and more. The platform features a user-friendly interface, allowing customers to easily find and book services, while service providers can manage their profiles and service offerings.`,
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
    tech: ["Next.js", "Firebase", "React-Context", "Tailwind", "OpenStreetMaps API"],
    links: {
      live: "https://pointrush.vercel.app",
      github: "https://github.com/rajafawady/pointrush",
      // demo: "https://demo.pointrush.com"
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
      // live: "https://restaurantreviews.com",
      github: "https://github.com/rajafawady/restaurant-review-system",
      // demo: "https://demo.restaurantreviews.com"
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
    id: 10,
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
      // android: "https://play.google.com/store/apps/details?id=com.tiktok.downloader",
      // ios: "https://apps.apple.com/app/id987654321",
      github: "https://github.com/rajafawady/tiktokvideodownloader"
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
    featured: false,
    tech: ["PHP", "Laravel"],
    links: {
      // live: "https://aquexpress.com",
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
    id: 7,
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
      live: "https://codeknitters.co",
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
    id: 8,
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
      // live: "https://expense-tracker-app.com",
      github: "https://github.com/rajafawady/flutter_expense_tracker"
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
  },  {
    id: 9,
    title: "Flutter Meals App",
    shortDescription: "A cross-platform app to explore, filter, and save meals",
    longDescription: `A feature-rich mobile application built with Flutter and Dart, designed to help users discover a variety of meals. 
                     The app includes sorting by meal type, saving favorites, and filtering meals based on user preferences. 
                     Demonstrates expertise in smart state management with Flutter Riverpod for seamless functionality.`,
    thumbnail: "/projects/meals-app/1.jpg",
    images: [
      "/projects/meals-app/1.jpg",
      "/projects/meals-app/2.jpg",
      "/projects/meals-app/3.jpg",
      "/projects/meals-app/4.jpg",
      "/projects/meals-app/5.jpg",
      "/projects/meals-app/6.jpg"
    ],
    category: "mobile",
    featured: false,
    tech: ["Flutter", "Dart", "Riverpod"],
    links: {
      // live: "https://flutter-meals-app.com",
      github: "https://github.com/rajafawady/meals_app"
    },
    highlights: [
      "Developed cross-platform compatibility for iOS and Android",
      "Implemented meal sorting by type for intuitive navigation",
      "Added functionality to save favorites and filter meals",
      "Leveraged Riverpod for efficient state management"
    ],
    testimonial: {
      text: "A perfect app for food enthusiasts to explore and save their favorite meals!",
      author: "Fatima Tariq",
      position: "Food Blogger"
    }
  },
  {
    id: 4,
    title: "Pak Financials",
    shortDescription: "Multilingual Web app for providing financial education in English and Urdu",
    longDescription: `A multilingual web application built with Next.js and next-intl aimed at bridging the financial literacy gap in Pakistan.
                     The app delivers accessible and culturally relevant educational content in both English and Urdu languages,
                     designed for users with varying literacy levels to help them understand key financial concepts through localized tutorials.`,
    thumbnail: "/projects/pak-financials/home.png",
    images: [
      "/projects/pak-financials/home.png",
      "/projects/pak-financials/aboutUs-urdu.png",
      "/projects/pak-financials/3.png",
      "/projects/pak-financials/4.png",
      "/projects/pak-financials/5.png",
      "/projects/pak-financials/6.png",
      "/projects/pak-financials/7.png",
      "/projects/pak-financials/8.png"
    ],
    category: "web",
    featured: true,
    tech: ["Next.js", "React.js", "next-intl", "Tailwind CSS", "JavaScript"],
    links: {
      live: "https://pak-financials.vercel.app",
      github: "https://github.com/rajafawady/pak-financials"
    },
    highlights: [
      "Implemented multilingual support with next-intl for English and Urdu",
      "Built dynamic Right-to-Left (RTL) layout support for Urdu content",
      "Created scalable localization strategy using structured JSON files",
      "Developed financial literacy tutorials covering essential topics",
      "Optimized accessibility with responsive design and typography"
    ],
    testimonial: {
      text: "This app makes financial education accessible to everyone in Pakistan, regardless of language preference.",
      author: "Zainab Khan",
      position: "Financial Inclusion Advocate"
    }
  },
  {
  id: 11,
  title: "Flutter Movies App",
  shortDescription: "Mobile app to browse, search and watch movie trailers",
  longDescription: `A comprehensive mobile application built with Flutter that allows users to explore movies, browse by genres, 
                   search for specific titles, view detailed descriptions, and watch trailers. The app implements the BLoC pattern 
                   for state management and uses Go routing for smooth navigation.`,
  thumbnail: "/projects/movies-app/thumbnail.jpg",
  images: [
    "/projects/movies-app/1.jpg",
    "/projects/movies-app/2.jpg",
    "/projects/movies-app/3.jpg"
  ],
  category: "mobile",
  featured: false,
  tech: ["Flutter", "Dart", "BLoC Pattern", "Go Routing"],
  links: {
    github: "https://github.com/rajafawady/flutter_movies_app"
  },
  highlights: [
    "Implemented movie browsing with popular titles and genre filtering",
    "Built robust search functionality for finding specific movies",
    "Developed detailed movie information pages with descriptions and trailers",
    "Applied BLoC pattern for efficient state management across the app",
    "Integrated with The Movie Database (TMDb) API for comprehensive movie data"
  ],
  testimonial: {
    text: "This app provides an excellent interface for discovering new movies and finding all the information you need.",
    author: "Zain Hassan",
    position: "Film Enthusiast"
  }
},
  
];