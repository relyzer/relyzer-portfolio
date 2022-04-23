import React from "react";
import Image from "next/image";
import { Project } from "../../../interfaces/project";
import { LinkButton } from "../../elements/button";
import generateUniqueID from "../../../lib/utility/generateUniqueID";
import { ProjectTag, TechLabel } from "../../elements/label";
import { ReadMore } from "../../elements/container";

type Props = {
  arr: Project[];
};

const ProjectDetail = ({ arr }: Props) => {
  let inputIsEven: boolean;

  if (arr.length % 2 == 0) {
    inputIsEven = true;
  } else {
    inputIsEven = false;
  }

  return (
    <div
      className={
        inputIsEven
          ? "lg:p-6 2xl:p-10 lg:flex lg:flex-row lg:flex-wrap"
          : "lg:p-6 xl:p-8 2xl:py-10 lg:flex lg:flex-col"
      }
    >
      {arr.map((project: Project) => (
        <div className="lg:basis-1/2 p-4 flex justify-center" key={project.id}>
          {/* bg-ocean-green */}
          <div className="border-2 border-green-illuminating-emerald rounded-lg h-full p-4 md:p-6 lg:p-8 2xl:p-10">
            <figure className="flex lg:p-4 justify-center">
              <Image
                className="rounded-lg"
                alt={project.altText}
                width={500}
                height={300}
                src={project.snapshotUrl}
              />
            </figure>
              <h4 className="p-1 lg:p-2 tracking-wide font-bold text-center">
                {project.title}
              </h4>
              <div className="flex flex-row flex-wrap">
                {project.tags &&
                  project.tags.map((tag) => (
                    <div
                      className="pr-2 py-1 md:py-0 lg:py-2"
                      key={generateUniqueID()}
                    >
                      <ProjectTag tagTitle={tag} />
                    </div>
                  ))}
              </div>
              <div className="flex justify-center">
                <ReadMore
                  text={project.description}
                  className="p-2 lg:p-3 xl:p-4 leading-relaxed tracking-tight max-w-prose"
                />
              </div>
              <div className="flex flex-row p-1">
                {project.demoUrl && (
                  <div className="">
                    <LinkButton
                      text={
                        project.demoButtonText ? project.demoButtonText : "Demo"
                      }
                      linkUrl={project.demoUrl}
                      devicon=""
                      passHref={project.redirectExternal}
                    />
                  </div>
                )}
                {project.githubUrl && (
                  <div className="">
                    <LinkButton
                      text="Github Repo"
                      linkUrl={project.githubUrl}
                      devicon="devicon-github-original"
                    />
                  </div>
                )}
              </div>
              {/* Map the tech stack */}
              {project.techStack && (
                <div className="flex flex-row flex-wrap pt-2 lg:pt-4">
                  {project.techStack.map((tech) => (
                    <div className="p-1" key={generateUniqueID()}>
                      <TechLabel
                        labelTitle={tech.tech}
                        devicon={tech.devicon}
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
