import React, {useEffect, useState} from "react";
import {Grid, Cell} from "react-mdl";
import ProjectData from "../assets/data/ProjectData";
import ProjectCard from "../components/ProjectCard";

function Project() {
    const [project, setProject] = useState(ProjectData);

    return (
      <Grid className="projectList"> 
            {project.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
              />
             
            ))}
          
         
          </Grid>
    )
};

export default Project;