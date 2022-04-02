import React from "react";
import Image from "next/image";
import { Project } from "../../../interfaces/project";
import { LinkButton } from "../../elements/button";
import generateUniqueID from "../../../lib/utility/generateUniqueID";
import { ProjectTag, TechLabel } from "../../elements/label";

type Props = {
  arr: Project[];
};

const ProjectDetail = ({ arr }: Props) => {
  return (
    <>
      {arr.map((project: Project) => (
        <div className="p-4" key={project.id}>
          <div className="bg-ocean-green rounded-lg p-6">
            <figure className="flex justify-center">
              <Image
                className="rounded-lg"
                width={500}
                height={300}
                src={project.snapshotUrl}
              />
            </figure>
            <h3 className="p-1 font-bold text-center">{project.title}</h3>
            <div className="flex flex-row flex-wrap">
              {project.tags &&
                project.tags.map((tag) => (
                  <div className="pr-2 py-1 md:py-0" key={generateUniqueID()}>
                    <ProjectTag tagTitle={tag} />
                  </div>
                ))}
            </div>
            <p className="p-1">{project.description}</p>
            <div className="flex flex-row p-1">
              {project.githubUrl && (
                <div className="">
                  <LinkButton
                    text="Github Repo"
                    linkUrl={project.githubUrl}
                    devicon="devicon-github-original"
                  />
                </div>
              )}
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
            </div>
            {/* Map the tech stack */}
            {project.techStack && (
              <>
                <p className="p-1">Tech stack:</p>
                <div className="flex flex-row flex-wrap">
                  {project.techStack.map((tech) => (
                    <div className="p-1" key={generateUniqueID()}>
                      <TechLabel
                        labelTitle={tech.tech}
                        devicon={tech.devicon}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectDetail;