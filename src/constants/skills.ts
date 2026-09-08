export interface SkillTile {
  id: string;
  name: string;
  category: "programming" | "frontend" | "backend" | "database" | "tools";
  categoryName: string;
  imageSrc: string;
  color: string;
  description: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  badge: string;
  description: string;
  color: string;
  skills: SkillTile[];
}

export const SKILL_CATEGORIES_DATA: SkillCategoryGroup[] = [
  {
    id: "programming",
    title: "Programming Languages",
    badge: "Core Logic",
    description: "Core languages used for building software logic, data structures, and cross-platform mobile apps.",
    color: "from-violet-500 via-purple-500 to-indigo-500",
    skills: [
      { id: "dart", name: "Dart", category: "programming", categoryName: "Programming", imageSrc: "/tech/dart.png", color: "from-blue-500 to-cyan-500", description: "Primary OOP language for Flutter apps" },
      { id: "javascript", name: "JavaScript", category: "programming", categoryName: "Programming", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-400 to-amber-500", description: "ES6+ web scripting & async logic" },
      { id: "java", name: "Java", category: "programming", categoryName: "Programming", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "from-red-500 to-orange-500", description: "Object-oriented Android backend logic" },
      { id: "python", name: "Python", category: "programming", categoryName: "Programming", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-blue-400 to-amber-400", description: "Automation scripts & data processing" },
      { id: "c", name: "C", category: "programming", categoryName: "Programming", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "from-slate-400 to-zinc-500", description: "Fundamental memory & system programming" },
      { id: "cpp", name: "C++", category: "programming", categoryName: "Programming", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "from-blue-600 to-indigo-600", description: "High-performance object-oriented programming" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Mobile",
    badge: "UI / UX",
    description: "Frameworks and technologies for creating beautiful, responsive user interfaces across mobile and web.",
    color: "from-sky-500 via-blue-500 to-cyan-400",
    skills: [
      { id: "flutter", name: "Flutter", category: "frontend", categoryName: "Frontend", imageSrc: "/tech/flutter.png", color: "from-sky-400 to-blue-600", description: "Google's cross-platform UI framework" },
      { id: "html", name: "HTML5", category: "frontend", categoryName: "Frontend", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "from-orange-500 to-red-500", description: "Semantic web markup structure" },
      { id: "css", name: "CSS3", category: "frontend", categoryName: "Frontend", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "from-blue-500 to-indigo-500", description: "Modern flexbox, grid & responsive layouts" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    badge: "Server & API",
    description: "Serverless backends, server runtime environments, and RESTful API integrations.",
    color: "from-amber-500 via-orange-500 to-yellow-400",
    skills: [
      { id: "firebase", name: "Firebase", category: "backend", categoryName: "Backend", imageSrc: "/tech/firebase.png", color: "from-amber-400 to-orange-500", description: "Auth, Cloud Functions & Storage" },
      { id: "restapi", name: "REST API", category: "backend", categoryName: "Backend", imageSrc: "/tech/code.png", color: "from-purple-500 to-indigo-500", description: "JSON HTTP endpoints integration" },
    ],
  },
  {
    id: "database",
    title: "Databases & Storage",
    badge: "Persistence",
    description: "Cloud NoSQL, embedded mobile SQL databases, and relational data management systems.",
    color: "from-emerald-500 via-teal-500 to-green-400",
    skills: [
      { id: "firestore", name: "Firebase Firestore", category: "database", categoryName: "Database", imageSrc: "/tech/firebase.png", color: "from-amber-500 to-yellow-500", description: "Realtime NoSQL document database" },
      { id: "sqlite", name: "SQLite", category: "database", categoryName: "Database", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", color: "from-sky-500 to-cyan-600", description: "Local offline mobile database" },
      { id: "mysql", name: "MySQL", category: "database", categoryName: "Database", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-blue-600 to-indigo-600", description: "Relational database management" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    badge: "DevOps & IDE",
    description: "Tools, version control systems, code editors, and AI suites for streamlined development.",
    color: "from-pink-500 via-rose-500 to-purple-500",
    skills: [
      { id: "git", name: "Git", category: "tools", categoryName: "Tools", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-600 to-red-600", description: "Distributed version control system" },
      { id: "github", name: "GitHub", category: "tools", categoryName: "Tools", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "from-purple-400 to-pink-500", description: "Cloud repository hosting & collaboration" },
      { id: "vscode", name: "VS Code", category: "tools", categoryName: "Tools", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "from-blue-500 to-cyan-500", description: "Extensible code editor" },
      { id: "androidstudio", name: "Android Studio", category: "tools", categoryName: "Tools", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", color: "from-emerald-400 to-green-600", description: "IDE for Android & Flutter debugging" },
      { id: "postman", name: "Postman", category: "tools", categoryName: "Tools", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "from-orange-500 to-amber-500", description: "API testing & documentation suite" },
      { id: "antigravity", name: "Antigravity", category: "tools", categoryName: "Tools", imageSrc: "/logo.png", color: "from-violet-500 to-purple-600", description: "AI coding & agentic development suite" },
    ],
  },
];

export interface SkillRadarItem {
  subject: string;
  A: number;
  fullMark: number;
}

export const SKILL_RADAR_DATA: SkillRadarItem[] = [
  { subject: "Programming", A: 90, fullMark: 100 },
  { subject: "Frontend", A: 95, fullMark: 100 },
  { subject: "Backend", A: 85, fullMark: 100 },
  { subject: "Databases", A: 80, fullMark: 100 },
  { subject: "Tools & DevOps", A: 88, fullMark: 100 },
];

