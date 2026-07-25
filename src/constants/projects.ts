export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  status: string;
  technologies: string[];
  features: string[];
  images: string[];
  gradient: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "we-chat",
    number: "01",
    title: "We Chat",
    category: "Mobile Application",
    status: "Completed",
    description:
      "Developed a feature-rich real-time chat application using Flutter and Firebase, enabling users to communicate seamlessly through text, images, videos, voice calls, and video calls. The application includes secure Google Authentication, real-time messaging, online/offline presence, media sharing, user search, and profile management.",
    technologies: ["Flutter", "Dart", "Firebase", "ZegoCloud"],
    features: [
      "Google Authentication",
      "Add Friends",
      "Real-Time Chat",
      "Online / Offline Status",
      "Edit Messages",
      "Image Sharing",
      "Video Sharing",
      "Audio Calling",
      "Video Calling",
      "User Search",
      "Profile Management",
      "Secure Logout",
      "Firebase Synchronization",
      "Responsive UI",
    ],
    images: [
      "/projects/we-chat/we-chat-3.jpg",
      "/projects/we-chat/we-chat-1.jpg",
      "/projects/we-chat/we-chat-2.jpg",
      "/projects/we-chat/we-chat-4.jpg",
      "/projects/we-chat/we-chat-6.jpg",
      "/projects/we-chat/we-chat-7.jpg",
      "/projects/we-chat/we-chat-5.jpg",
    ],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    id: "college-event-app",
    number: "02",
    title: "College Event & News Management System",
    category: "Mobile Application",
    status: "Completed",
    description:
      "A Flutter mobile application developed for students to access college events, announcements, news, image galleries, quarterly PDF reports, bookmarks, and college information.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Realtime Database",
      "PHP Mailer",
      "Provider",
      "BLoC",
    ],
    features: [
      "Email Authentication",
      "Google Authentication",
      "Student Registration",
      "Home Dashboard",
      "Latest News",
      "Category Filter",
      "Quarterly PDF Reports",
      "Image Gallery",
      "Bookmark",
      "About College",
      "Profile Management",
      "Settings",
      "Share App",
      "Help & Support",
    ],
    images: [
      "/projects/college-event/college-event-2.jpg",
      "/projects/college-event/college-event-3.jpg",
      "/projects/college-event/college-event-4.jpg",
      "/projects/college-event/college-event-1.jpg",
      "/projects/college-event/college-event-5.jpg",
      "/projects/college-event/college-event-6.jpg",
      "/projects/college-event/college-event-7.jpg",
      "/projects/college-event/college-event-8.jpg",
      "/projects/college-event/college-event-9.jpg",
      "/projects/college-event/college-event-10.jpg",
      "/projects/college-event/college-event-11.jpg",
      "/projects/college-event/college-event-12.jpg",
      "/projects/college-event/college-event-13.jpg",
      "/projects/college-event/college-event-14.jpg",
      "/projects/college-event/college-event-15.jpg",
    ],
    gradient: "from-violet-500 via-purple-500 to-pink-500",
  },
  {
    id: "college-event-admin-panel",
    number: "03",
    title: "College Event & News Management System Admin Panel",
    category: "Web Application",
    status: "Completed",
    description:
      "A centralized web application for managing college events, news, announcements, teachers, coordinators, departments, analytics, reports, media content, and student application synchronization.",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "PHP 8.x",
      "Firebase",
    ],
    features: [
      "Role Based Authentication",
      "Teacher Management",
      "Coordinator Management",
      "Email Notifications",
      "Dashboard Analytics",
      "User Statistics",
      "Trending News",
      "News Management",
      "Event Management",
      "Quarterly PDF Reports",
      "Gallery Management",
      "User Management",
      "Department Management",
      "Content Settings",
      "System Activity Logs",
      "PDF Export",
      "Firebase Synchronization",
      "Mobile App Integration",
    ],
    images: [
      "/projects/college-admin/college-admin-3.png",
      "/projects/college-admin/college-admin-1.png",
      "/projects/college-admin/college-admin-2.png",
      "/projects/college-admin/college-admin-4.png",
      "/projects/college-admin/college-admin-5.png",
      "/projects/college-admin/college-admin-8.png",
      "/projects/college-admin/college-admin-9.png",
      "/projects/college-admin/college-admin-7.png",
      "/projects/college-admin/college-admin-6.png",
      "/projects/college-admin/college-admin-10.png",
      "/projects/college-admin/college-admin-12.png",
      "/projects/college-admin/college-admin-13.png",
      "/projects/college-admin/college-admin-14.png",
      "/projects/college-admin/college-admin-15.png",
      "/projects/college-admin/college-admin-16.png",
      "/projects/college-admin/college-admin-17.png",
      "/projects/college-admin/college-admin-18.png",
      "/projects/college-admin/college-admin-19.png",
      "/projects/college-admin/college-admin-20.png",
      "/projects/college-admin/college-admin-11.png",
    ],
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
  },
];

export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}
