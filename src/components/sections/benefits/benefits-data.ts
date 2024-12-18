import { Book, Code2, Globe, Heart, MessageSquare, Users } from "lucide-react";

export const benefits = [
  {
    title: "Open Source Forever",
    description: "All resources and tools are freely available to the community under open source licenses.",
    icon: Heart,
  },
  {
    title: "Global Community",
    description: "Connect with WordPress enthusiasts from around the world, sharing knowledge and experiences.",
    icon: Globe,
  },
  {
    title: "Learning Resources",
    description: "Access comprehensive guides, tutorials, and documentation created by the community.",
    icon: Book,
  },
  {
    title: "Code Collaboration",
    description: "Work together on plugins, themes, and tools that benefit the WordPress ecosystem.",
    icon: Code2,
  },
  {
    title: "Active Discussions",
    description: "Engage in meaningful conversations about WordPress development and best practices.",
    icon: MessageSquare,
  },
  {
    title: "Mentorship",
    description: "Learn from experienced developers and help others grow in their WordPress journey.",
    icon: Users,
  },
] as const;