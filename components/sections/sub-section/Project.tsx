import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  snapshotUrl: string;
  // Tech stack icon file path
  techStack: string[];
};

const Project = ({ title, description, snapshotUrl, techStack }: Props) => {
  return (
    <div className="bg-ocean-green rounded-lg w-fit sm:w-fit md:max-w-[30vw] md:min-w-[15vw] lg:max-w-[30vw] lg:min-w-[15vw] min p-6">
      <figure className="flex justify-center">
        <Image
          className="rounded-lg"
          width={300}
          height={300}
          src={snapshotUrl}
        />
      </figure>
      <h3 className="text-center">{title}</h3>
      <p>{description}</p>
      {/* Map the tech stack */}
      <p>
        Tech stack:
        <br />
        {techStack}
      </p>
    </div>
  );
};

export default Project;
