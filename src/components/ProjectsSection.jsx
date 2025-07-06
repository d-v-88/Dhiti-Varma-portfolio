import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Qonvo: Real-time chat application",
    description:
      "A responsive real-time chat application that allows users to sign up, log in, and chat instantly with others. Built using Socket.io for real-time communication and MongoDB for storing user data and chat history. The app supports one-on-one messaging, sharing of pictures and online/offline status updates. Designed with a clean UI using modern frontend practices.",
    image: "/projects/project1.png",
    tags: [
      "React.js",
      "TailwindCSS",
      "MongoDB",
      "Socket.io",
      "Node.js",
      "Express.js",
      "JWT ",
    ],
    demoUrl: "https://chatting-app-liard.vercel.app",
    githubUrl: "https://github.com/d-v-88/chatting-app",
  },

  {
    id: 2,
    title: "Online Appointment Booking system.",
    description:
      "A full-stack web application that allows patients to register, log in, and book appointments with doctors based on availability. Doctors can manage their schedules, view bookings, confirm appointments adn payment. The system also supports user authentication, role-based access (admin, doctor, patient), and appointment tracking. The project is currently in development and undergoing bug fixes, so the live demo and source code are not publicly shared yet.",
    image: "/projects/project2.png",
    tags: [
      "React.js",
      "TailwindCSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "JWT ",
    ],
  },

  {
    id: 3,
    title: "Nike-Inspired Landing Page",
    description:
      "A pixel-perfect frontend clone of Nike’s homepage, designed for practice and visual accuracy. The layout is fully responsive, showcasing a clean product-focused UI, sleek hover effects, and modern typography. Built using only HTML and CSS to sharpen frontend layout and styling skills.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://d-v-88.github.io/Nike-clone/",
    githubUrl: "https://github.com/d-v-88/Nike-clone",
  },

  {
    id: 4,
    title: "Myntra-Inspired Landing Page",
    description:
      "A fully responsive clone of the Myntra homepage, built to practice real-world e-commerce layouts and responsive design. It includes category sections, a promotional banner, and navigation components — all styled to closely match Myntra's sleek and fashion-focused interface. This project helped strengthen my layout, media queries, and CSS design skills.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://d-v-88.github.io/Myntra-clone/",
    githubUrl: "https://github.com/d-v-88/Myntra-clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/d-v-88"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
