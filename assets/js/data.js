/**
 * data.js — All portfolio content lives here.
 * Edit ONLY this file to update portfolio content.
 */

const DATA = {

  /* ── PERSONAL ─────────────────────────────────────── */
  personal: {
    name: "Dayanand M K",
    initials: "DK",
    tagline: "AI & ML Engineer",
    email: "dayanandmk.dev@gmail.com",
    phone: "+91-8056727034",
    location: "Avadi, Chennai, Tamil Nadu",
    linkedin: "https://www.linkedin.com/in/dayanand-mk/",
    github: "https://github.com/Dayanand-MK",
    leetcode: "https://leetcode.com/u/IeSgoZEeWM/",
    hackerrank: "https://www.hackerrank.com/profile/dayanandmk_dev",
    portfolio: "https://dayanand-mk.github.io/Portfolio",
    blog: "https://tech-terminus.blogspot.com/",
    resume: "assets/Resume.pdf",
    bio: [
      "I'm Dayanand M K, a Computer Science undergraduate specialising in AI & ML at Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai. I build production-grade AI systems, full-stack web applications, and data intelligence platforms.",
      "I led the development of SentimentX — a real-time multimodal AI system processing video, audio and text inputs with under 100 ms inference latency. I've deployed CNN models achieving 92% accuracy in agricultural disease detection and built full-stack apps live on Google Cloud Run.",
      "When I'm not shipping code, I write tech blogs, contribute to open-source, and explore the frontiers of Generative AI, LangChain, and MLOps."
    ],
    strengths: ["Problem Solver", "Production Mindset", "Quick Learner", "Team Leader", "Technical Writer", "Detail-Oriented"],
    currentFocus: "Building end-to-end ML pipelines, exploring LangChain & RAG architectures, containerising apps with Docker & deploying on cloud platforms while preparing for AI/ML and software engineering roles.",
    stats: [
      { num: "10", label: "Repositories" },
      { num: "4", label: "Internships" },
      { num: "4+", label: "Certifications" }
    ]
  },

  /* ── TYPED ROLES ──────────────────────────────────── */
  roles: [
    "AI & ML Engineer",
    "Software Developer",
    "Data Analyst",
    "Problem Solver"
  ],

  /* ── SKILLS ───────────────────────────────────────── */
  skills: [
    {
      cat: "Programming & Dev",
      icon: "fa-solid fa-code",
      tags: ["Python", "Java", "C", "SQL", "MySQL", "SQLite", "OOP", "REST APIs", "Git", "GitHub", "System Design"]
    },
    {
      cat: "AI / ML & Deep Learning",
      icon: "fa-solid fa-brain",
      tags: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "CNN", "Transfer Learning", "OpenCV", "NLP", "RAG", "ChromaDB", "SpaCy", "HuggingFace"]
    },
    {
      cat: "Data Analysis & BI",
      icon: "fa-solid fa-chart-bar",
      tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Streamlit", "ETL Pipelines"]
    },
    {
      cat: "Web & Full-Stack",
      icon: "fa-solid fa-globe",
      tags: ["React", "Vite", "FastAPI", "Tailwind CSS", "HTML", "CSS", "JavaScript"]
    },
    {
      cat: "Database & Modelling",
      icon: "fa-solid fa-database",
      tags: ["MySQL", "SQLite", "ChromaDB", "ERD Design", "Relational Schema", "Data Modelling"]
    },
    {
      cat: "DevOps & Tools",
      icon: "fa-solid fa-screwdriver-wrench",
      tags: ["Docker", "Docker Compose", "Google Cloud Run", "Jupyter Notebook", "VS Code", "Linux"]
    }
  ],

  /* ── TECH MARQUEE ─────────────────────────────────── */
  tech: [
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "TensorFlow", icon: "fa-solid fa-brain" },
    { name: "PyTorch", icon: "fa-solid fa-fire" },
    { name: "Google Cloud", icon: "fa-brands fa-google" },
    { name: "OpenCV", icon: "fa-solid fa-eye" },
    { name: "Power BI", icon: "fa-solid fa-chart-pie" },
    { name: "HuggingFace", icon: "fa-solid fa-robot" },
    { name: "ChromaDB", icon: "fa-solid fa-database" },
    { name: "Streamlit", icon: "fa-solid fa-gauge" }
  ],

  /* ── PROJECTS ─────────────────────────────────────── */
  /*
   * thumbnail : filename inside assets/images/ — null = icon fallback
   * demo      : full URL if live, null = no demo button rendered
   */
  projects: [
    {
      name: "MSentinel AI — Enterprise Document Audit Platform",
      desc: "AI-powered enterprise document auditing platform that scans files for PII, financial records & credentials, generates compliance risk scores, produces security audit reports, and provides a RAG-based chat assistant.",
      tags: ["ai-ml"],
      tech: ["Python", "SpaCy", "ChromaDB", "HuggingFace", "Qwen2.5-7B", "RAG", "Streamlit", "Docker"],
      thumbnail: "MSentinel.png",
      github: "https://github.com/Dayanand-MK/MSentinel_AI",
      demo: "https://msentinel-ai.streamlit.app/",
      features: [
        "Hybrid NER: Regex patterns (Aadhaar, PAN, credit cards) + SpaCy CNN NER",
        "Dynamic risk scoring: Low / Medium / High per document",
        "RAG-based chat assistant grounded in uploaded documents",
        "HuggingFace Qwen2.5-7B via OpenAI-compatible router with local fallback",
        "Containerised with Docker & docker-compose"
      ],
      challenges: "Deprecated HuggingFace endpoints and 403 token permission limits — solved by rerouting to the modern OpenAI-compatible gateway and building a local fallback extractor that parses context directly from prompts.",
      learnings: "RAG pipeline design, ChromaDB vector storage, hybrid NER, LLM API integration, resilient fallback architecture, Docker deployment.",
      duration: "Ongoing"
    },
    {
      name: "SentimentX — Multimodal AI Emotion Recognition",
      desc: "Production-grade multimodal AI system processing video, audio, and text inputs for real-time emotion detection (6+ classes), age estimation, and gender prediction with <100 ms inference latency.",
      tags: ["ai-ml"],
      tech: ["Python", "PyTorch", "TensorFlow", "OpenCV", "NLP", "CK+ Dataset"],
      thumbnail: "assets/images/SentimentX.png",
      github: "https://github.com/Dayanand-MK/SentimentX-A-Multimodal-AI-System-for-Emotion-Recognition",
      demo: null,
      features: [
        "Real-time multimodal inference (<100 ms latency)",
        "6+ emotion classes + age & gender prediction",
        "Feature fusion: CNN visual + audio signal + NLP embeddings",
        "85%+ accuracy on CK+ benchmark dataset"
      ],
      challenges: "Architecting a feature fusion pipeline combining three distinct modalities while maintaining sub-100 ms inference latency.",
      learnings: "Multimodal AI architecture, feature fusion strategies, production ML deployment, real-time inference optimisation.",
      duration: "3 months"
    },
    {
      name: "AgroSage AI — Crop Advisory & Market Intelligence",
      desc: "Full-stack ML web app (FastAPI + React) recommending optimal crops using soil and climate inputs, with Explainable AI, live Mandi prices, and financial yield analysis. Deployed on Google Cloud Run.",
      tags: ["ai-ml", "web"],
      tech: ["Python", "FastAPI", "React", "Tailwind CSS", "Random Forest", "Scikit-learn", "Docker", "Google Cloud Run"],
      thumbnail: "assets/images/AgroSage.png",
      github: "https://github.com/Dayanand-MK/AgroSage-AI",
      demo: "https://agrosage-ai-1045649332725.us-central1.run.app",
      features: [
        "22-class crop recommendation with Explainable AI",
        "Live Mandi commodity prices (data.gov.in)",
        "Open-Meteo weather API integration",
        "Financial analysis: yield, revenue & profit per acre",
        "Containerised with Docker, deployed on Google Cloud Run"
      ],
      challenges: "Integrating three live APIs while keeping FastAPI backend responsive and React frontend reactive.",
      learnings: "Full-stack ML deployment, Docker, Google Cloud Run, Explainable AI, API integration.",
      duration: "2 months"
    },
    {
      name: "Plant Disease Detection AI System",
      desc: "End-to-end CNN pipeline classifying 38 plant disease classes from leaf images at 92% accuracy, deployed as a Streamlit web app for real-time agricultural inference.",
      tags: ["ai-ml"],
      tech: ["Python", "TensorFlow", "CNN", "VGG16", "ResNet50", "Transfer Learning", "Streamlit"],
      thumbnail: "assets/images/Plant.png",
      github: "https://github.com/Dayanand-MK/Plant-Disease-Detection-System-For-Sustainable-Agriculture-",
      demo: null,
      features: [
        "92% classification accuracy across 38 disease classes",
        "20,000+ image dataset curation & preprocessing",
        "Transfer learning with VGG16 & ResNet50",
        "Production Streamlit web app for real-time inference"
      ],
      challenges: "Curating and preprocessing a 20,000+ image dataset, preventing overfitting using transfer learning.",
      learnings: "Transfer learning, large-scale dataset management, model evaluation, Streamlit deployment.",
      duration: "3 months (AICTE Internship)"
    }
  ],

  /* ── INTERNSHIPS ──────────────────────────────────── */
  /*
   * certificate: exact LinkedIn post/cert URL — null hides button
   */
  internships: [
    {
      role: "Machine Learning Intern",
      company: "EISystems Technologies",
      period: "Oct 2025 – Nov 2025",
      location: "Remote",
      responsibilities: "Trained a Random Forest regression model for area-based house price prediction using Python and Scikit-learn. Handled data preprocessing, feature selection, and model evaluation for a real estate pricing use case. Delivered a complete technical project report documenting methodology, model performance, and findings.",
      tech: ["Python", "Scikit-learn", "Random Forest", "Regression Analysis", "Pandas"],
      certificate: "https://www.linkedin.com/posts/dayanand-mk_machinelearning-python-internship-share-7479490196300881920-2f3i/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    },
    {
      role: "Software & Systems Engineering Intern",
      company: "TVM Signalling and Transportation Systems Pvt. Ltd.",
      period: "Jun 2025 – Jul 2025",
      location: "Chennai, Tamil Nadu (On-site)",
      responsibilities: "Contributed to development and testing of railway signalling software in a safety-critical environment. Applied computer vision to real-time system interfaces, supported UI enhancements and workflow optimisation for mission-critical transport infrastructure.",
      tech: ["Python", "Computer Vision", "UI Testing", "Software Engineering", "Safety-Critical Systems"],
      certificate: "https://www.linkedin.com/posts/dayanand-mk_tsts-ugcPost-7479490591421026304-FlEt/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    },
    {
      role: "AI/ML Engineer Intern",
      company: "Edunet Foundation (AICTE Internship)",
      period: "Feb 2025 – Apr 2025",
      location: "Bengaluru, Karnataka (Remote)",
      responsibilities: "Independently designed and deployed a full-stack CNN application from requirements to production within a 3-month AICTE program, achieving 92% accuracy on plant disease detection across 38 classes. Executed complete ML pipeline: data preprocessing, architecture design, training, evaluation, and Streamlit deployment.",
      tech: ["Python", "TensorFlow", "CNN", "Transfer Learning", "VGG16", "ResNet50", "Streamlit"],
      certificate: "https://www.linkedin.com/posts/dayanand-mk_edunet-internship-activity-7318628642010345472-exFA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    },
    {
      role: "Python & AI/ML Development Intern",
      company: "Main Flow Services and Technologies",
      period: "Jul 2024 – Sep 2024",
      location: "Noida, UP (Remote)",
      responsibilities: "Completed 10+ weekly assignments in data analysis, ML, and software development using Python, Pandas, NumPy, TensorFlow, and PyTorch. Developed automation scripts and ML experiments solving real-world challenges, published to GitHub with comprehensive documentation.",
      tech: ["Python", "Pandas", "NumPy", "TensorFlow", "PyTorch", "Scikit-learn", "GitHub"],
      certificate: "https://www.linkedin.com/posts/dayanand-mk_pythonabrprogramming-pythonabrdeveloper-internship-activity-7237501160482299905-Sese?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    }
  ],

  /* ── EDUCATION ────────────────────────────────────── */
  education: [
    {
      degree: "B.E. Computer Science & Engineering",
      dept: "Specialisation: Artificial Intelligence & Machine Learning",
      school: "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Avadi, Chennai",
      year: "2023 – 2027 (Expected)",
      cgpa: "6.75",
      coursework: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Structures", "DBMS", "Software Engineering", "OOP"]
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Class XII",
      dept: "Science Stream",
      school: "Kamlavati Senior Secondary School, Sahupuram",
      year: "2022 – 2023",
      cgpa: "65.4%",
      coursework: []
    },
    {
      degree: "Secondary School Certificate (SSLC) — Class X",
      dept: "General Studies",
      school: "Kamlavati Senior Secondary School, Sahupuram",
      year: "2020 – 2021",
      cgpa: "65.8%",
      coursework: []
    }
  ],

  /* ── CERTIFICATIONS ───────────────────────────────── */
  /*
   * link: exact LinkedIn cert/post URL — null hides the Verify button
   */
  certifications: [
    {
      title: "AICTE Internship — AI for Sustainable Agriculture",
      issuer: "Edunet Foundation / AICTE",
      date: "Apr 2025",
      id: null,
      icon: "fa-solid fa-seedling",
      link: "https://www.linkedin.com/posts/dayanand-mk_edunet-internship-activity-7318628642010345472-exFA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    },
    {
      title: "Python & AI/ML Development",
      issuer: "Main Flow Services and Technologies",
      date: "Sep 2024",
      id: "13140",
      icon: "fa-brands fa-python",
      link: "https://www.linkedin.com/posts/dayanand-mk_pythonabrprogramming-pythonabrdeveloper-internship-activity-7237501160482299905-Sese?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    },
    {
      title: "The Joy Of Computing Using Python",
      issuer: "NPTEL",
      date: "Jan - Apr 2024",
      id: "NPTEL24CS57S553505584",
      icon: "fa-brands fa-python",
      link: "https://www.linkedin.com/posts/dayanand-mk_im-happy-to-share-that-ive-obtained-a-new-activity-7197527792723369984-IRmv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    },
    {
      title: "Data Analytics with QlikView",
      issuer: "Infosys Springboard",
      date: "Feb 2026",
      id: "null",
      icon: "fa-brands fa-python",
      link: "https://www.linkedin.com/posts/dayanand-mk_da-activity-7442238126925918208-mpsJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    },
    {
      title: "Natural Language Processing using Python",
      issuer: "Infosys Springboard",
      date: "Feb 2024",
      id: "null",
      icon: "fa-brands fa-python",
      link: "https://www.linkedin.com/posts/dayanand-mk_nlp-naturallanguageprocessing-python-activity-7442238549535432704-OZ23?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "Apr 17, 2026",
      id: "null",
      icon: "fa-brands fa-python",
      link: "https://www.linkedin.com/posts/dayanand-mk_intro-to-ds-activity-7450964706653118465-YZvs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE0dZ2oB0bfJNd6VnoZrQvejHvlWyZprnVY"
    }
  ],

  /* ── ACHIEVEMENTS ─────────────────────────────────── */
  achievements: [
    {
      icon: "🛡️",
      type: "AI Platform",
      title: "MSentinel AI — Enterprise Document Audit",
      detail: "Built an AI-powered compliance auditing platform with hybrid NER, dynamic risk scoring, RAG chat assistant, and Docker deployment."
    },
    {
      icon: "🤖",
      type: "AI Project",
      title: "SentimentX — Production Multimodal AI",
      detail: "Architected a real-time multimodal emotion AI system with <100 ms inference latency and 85%+ accuracy on the CK+ benchmark."
    },
    {
      icon: "🌾",
      type: "Live Deployment",
      title: "AgroSage AI — Live on Google Cloud Run",
      detail: "Built and deployed a full-stack ML app on Google Cloud Run with live Mandi prices, weather API, and Explainable AI recommendations."
    },
    {
      icon: "🏆",
      type: "AICTE Internship",
      title: "92% Accuracy — Plant Disease CNN",
      detail: "Achieved 92% classification accuracy across 38 disease classes with 20,000+ images during AICTE internship at Edunet Foundation."
    },
    {
      icon: "🚂",
      type: "Industry Experience",
      title: "Railway Signalling Software",
      detail: "Contributed to safety-critical railway signalling software at TVM Signalling — hands-on experience in mission-critical transport infrastructure."
    },
    {
      icon: "👨‍💼",
      type: "Leadership",
      title: "Led 6-Member Cross-Functional Team",
      detail: "Led a 6-member team for the Real-Time Disaster Management System with on-time delivery of all milestones."
    }
  ],

  /* ── CODING PROFILES ──────────────────────────────── */
  profiles: [
    {
      name: "GitHub",
      handle: "@Dayanand-MK",
      icon: "fa-brands fa-github",
      link: "https://github.com/Dayanand-MK"
    },
    {
      name: "LinkedIn",
      handle: "dayanand-mk",
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/dayanand-mk/"
    },
    {
      name: "LeetCode",
      handle: "@IeSgoZEeWM",
      icon: "fa-solid fa-code",
      link: "https://leetcode.com/u/IeSgoZEeWM/"
    },
    {
      name: "HackerRank",
      handle: "@dayanandmk_dev",
      icon: "fa-brands fa-hackerrank",
      link: "https://www.hackerrank.com/profile/dayanandmk_dev"
    }
  ],

  /* ── GITHUB STATS ─────────────────────────────────── */
  github: {
    profileUrl: "https://github.com/Dayanand-MK",
    stats: [
      { num: "10", label: "Total Repos" },
      { num: "7", label: "Public Repos" },
      { num: "4", label: "Followers" },
      { num: "11", label: "Following" }
    ]
  },

  /* ── CURRENTLY LEARNING ───────────────────────────── */
  learning: [
    { name: "LangChain", sub: "LLM Orchestration" },
    { name: "Generative AI", sub: "LLMs & Prompting" },
    { name: "RAG", sub: "Retrieval-Augmented Generation" },
    { name: "MLOps", sub: "Model Deployment" },
    { name: "Kubernetes", sub: "Container Orchestration" },
    { name: "Spring Boot", sub: "Java Backend" },
    { name: "React Advanced", sub: "State Management" },
    { name: "Cloud AI APIs", sub: "GCP / AWS" }
  ],

  /* ── FAQ ──────────────────────────────────────────── */
  faq: [
    {
      q: "Who are you?",
      a: "I'm Dayanand M K, a B.E. CSE (AI & ML) student at Vel Tech High Tech, Chennai. I build production-grade AI systems, full-stack web apps, and data intelligence platforms — with 4 internships and live deployments already under my belt."
    },
    {
      q: "What technologies do you specialise in?",
      a: "Python for AI/ML (TensorFlow, PyTorch, Scikit-learn, SpaCy, HuggingFace), FastAPI + React for full-stack, Power BI for data analytics, and Docker + Google Cloud Run for deployment. I also work with Java for backend systems."
    },
    {
      q: "Are you open to opportunities?",
      a: "Absolutely! I'm actively seeking roles or internships in AI/ML Engineering, Software Development, Data Analysis, or Business Analysis. Feel free to reach out at dayanandmk.dev@gmail.com."
    },
    {
      q: "Do you have live projects I can see?",
      a: "Yes! AgroSage AI is live at agrosage-ai-1045649332725.us-central1.run.app — a full-stack ML app deployed on Google Cloud Run. Check my GitHub at github.com/Dayanand-MK for all projects including MSentinel AI."
    },
    {
      q: "What makes you stand out from other freshers?",
      a: "I don't just build models — I deploy them to production. I've containerised apps with Docker, deployed on Google Cloud Run, built a RAG + LLM document audit platform, led a 6-member project team, and completed 4 internships including on-site safety-critical railway software."
    }
  ]

};
