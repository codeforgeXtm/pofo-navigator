export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
}

// Add your posts here - newest first
export const posts: Post[] = [
  {
    id: "welcome",
    title: "Welcome to My Creative Journey",
    date: "December 25, 2024",
    excerpt: "Excited to share updates about my work, projects, and creative process with you.",
  },
  {
    id: "new-project",
    title: "New Film Project Announcement",
    date: "December 20, 2024",
    excerpt: "Something exciting is in the works. Stay tuned for more details coming soon.",
  },
];
