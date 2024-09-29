import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id:1,
    title:"snjdsnh",
    description:"Project 1 decription",
    image:"/images/projects/1.png",
    tag:["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:2,
    title:"snjdsnh",
    description:"Project 2 decription",
    image:"/images/projects/2.png",
    tag:["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:3,
    title:"snjdsnh",
    description:"Project 3 decription",
    image:"/images/projects/3.png",
    tag:["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:4,
    title:"snjdsnh",
    description:"Project 4 decription",
    image:"/images/projects/4.png",
    tag:["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:5,
    title:"snjdsnh",
    description:"Project 5 decription",
    image:"/images/projects/5.png",
    tag:["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:6,
    title:"snjdsnh",
    description:"Project 6 decription",
    image:"/images/projects/6.png",
    tag:["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
];

const ProjectsSection = () => {
  return (
   <>
   <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
    My Project
   </h2>
   <div className="grid md:grid-cols-3 gap-8 md:gap-12 ">
    {projectsData.map((project) => 
    <ProjectCard
    key={project.id}
     title ={project.title} 
     description={project.description} 
     imgUrl={project.image}
     tags={project}
     gitUrl={project.gitUrl}
     previewUrl={project.previewUrl}
   />
   )}
   </div>
   </>
  )
}

export default ProjectsSection
