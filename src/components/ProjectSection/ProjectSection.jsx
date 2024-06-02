"use client";
import { motion, useInView } from "framer-motion";
import { ProjectTag } from "../ProjectTag";
import { ProjectCard } from "../ProjectCard";
import { useRef, useState } from "react";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "project 1 description",
    image: "https://i.ibb.co/ZBxBShh/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potografhy Portfolio Website",
    description: "project 2 description",
    image: "https://i.ibb.co/H2W8nFY/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Ecommerce Aplication",
    description: "project 3 description",
    image: " https://i.ibb.co/djn0NG1/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "project 4 description",
    image: " https://i.ibb.co/nzJL1rr/5.png  ",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authenticacion and CRUD operations",
    image: "    https://i.ibb.co/nzJL1rr/5.png  ",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full Stack Roadmap",
    description: "Full Stack Developer",
    image: "https://i.ibb.co/pfqtp1H/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export const ProjectSection = () => {
  const [tag, setTab] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTab(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
      <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
