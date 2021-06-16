import React, {useEffect, useState} from "react";
import {Grid, Cell} from "react-mdl";
import ProjectData from "../assets/data/ProjectData";
import ProjectCard from "../components/ProjectCard";
import PageLayout from "../components/PageLayout";

function Project() {
    const [project, setProject] = useState(ProjectData);

    return (
      <PageLayout>
      <Grid className="projectList"> 
            {project.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
                tech={item.tech}
                gitHubLink={item.gitHubLink}
                demoLink={item.demoLink}
              />
             
            ))}  
      </Grid>
      </PageLayout>
    )
};

export default Project;