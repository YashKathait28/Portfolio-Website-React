import React from "react";
import { Projectcard } from "./Projectcard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <Projectcard
          title="Blogging Website"
          main="A blogging website where users can create, edit, and delete their blog posts."
        />
        <Projectcard
          title="E-Commerce Website"
          main="The e-commerce website where users can create, edit, and delete their blog posts."
        />
        <Projectcard
          title="Admin Dashboard Website"
          main="The admin dashboard website where users can create, edit, and delete their blog posts."
        />
      </div>
    </div>
  );
};

export default Projects;
