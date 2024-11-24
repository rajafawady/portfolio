export const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      shortDescription: "Full-featured online store with admin dashboard",
      longDescription: `A comprehensive e-commerce solution built with Next.js, Laravel, and MySQL. 
                       Features include real-time inventory management, multi-vendor support, 
                       analytics dashboard, and integration with multiple payment gateways.`,
      thumbnail: "/api/placeholder/400/250",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      category: "web",
      featured: true,
      tech: ["Next.js", "Laravel", "MySQL", "Redis", "AWS"],
      links: {
        live: "https://example.com",
        github: "https://github.com/example/ecommerce",
        demo: "https://demo.example.com"
      },
      highlights: [
        "Implemented real-time inventory sync across multiple warehouses",
        "Reduced page load time by 60% through optimization",
        "Integrated multiple payment gateways with 99.9% success rate",
        "Built comprehensive analytics dashboard for vendors"
      ],
      testimonial: {
        text: "Exceptional e-commerce solution that transformed our business",
        author: "Jane Smith",
        position: "CEO, Fashion Corp"
      }
    },
    {
      id: 2,
      title: "Social Media App",
      shortDescription: "Cross-platform mobile app for content sharing",
      longDescription: `A feature-rich social media application built with Flutter and Firebase. 
                       Supports photo/video sharing, real-time messaging, story features, 
                       and advanced content discovery algorithms.`,
      thumbnail: "/api/placeholder/400/250",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      category: "mobile",
      featured: true,
      tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
      links: {
        android: "https://play.google.com/store/apps/details?id=com.example",
        ios: "https://apps.apple.com/app/id123456789",
        github: "https://github.com/example/social"
      },
      highlights: [
        "Implemented real-time messaging with Firebase",
        "Built custom camera filters using OpenGL",
        "Developed content recommendation engine",
        "Achieved 99.9% crash-free sessions"
      ],
      testimonial: {
        text: "One of the most engaging social apps I've used",
        author: "John Brown",
        position: "Tech Reviewer"
      }
    }
    // Add more projects...
  ];