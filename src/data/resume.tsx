import { Icons } from "@/components/icons";

export const DATA = {
  name: "Micah Omondi",
  initials: "MO",
  url: "https://google.ca",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "I'm a Software Engineer and CS student at the University of Waterloo.",
  summary:
    "In the summer of 2022, I completed Google CSSI and entered the University of Waterloo. Since then, I've been studying CS and building [Preserve](https://usepreserve.ca), an in-app search palette and copilot for SaaS applications to improve onboarding & UX for new users. In my free-time I like to [write](/#blog) about technology, psychology, music, fitness, and personal learnings.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C",
    "C++",
  ],
  contact: {
    email: "micah.omondi6@gmail.com",
    tel: "+16476760858",
    social: {
      GitHub: {
        url: "https://github.com/micahomnd",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/micah-omondi/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/micahomnd",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "Google",
      href: "https://google.com",
      badges: [],
      location: "Remote",
      title: "Computer Science Summer Institute Scholar",
      logoUrl: "/google.png",
      start: "May 2022",
      end: "July 2022",
      description:
        "Participated in a program for high-achieving rising freshmen to build web applications using HTML, CSS, and JavaScript under the instruction of Google software engineering managers. ",
    },
  ],
  education: [
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Preserve",
      href: "https://chatcollect.com",
      dates: "May 2024 - Present",
      active: true,
      description:
        "With AI improving and AI 'Copilots' becoming more common, I built a simple way to integrate spotlight search and copilots into any software application, to augment better UX/onboarding for end-users. Launching this month!",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://usepreserve.ca",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
