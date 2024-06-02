"use client";
import { useTransition, useState } from "react";
import { TabButton } from "../TabButton/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Redux</li>
        <li>Sequelize</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Academy of Code</li>
        <li>University of CAlifornia, Santa cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <img
            src="https://i.ibb.co/j4pxTd0/pexels-danny-meneses-340146-943096.jpg"
            alt="about"
            width={500}
            height={500}
          />

          <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
            <h2 className="text-4xl font-bold text-white mb-4 ">About me</h2>
            <p className="text-base lg:text-lg text-justify">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express,
              PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I am
              a team player and I am excited to work with others to create
              amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8 ">
              <TabButton
                selecTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selecTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selecTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
