import React from "react";
import { Project } from "../../models/Project";

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h3>{project.title}</h3>
                            <div>
                                {project.link && project.githubLink && (
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                className="fas fa-external-link-alt icon-large"
                                                title="View Project"
                                            ></i>
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                className="fa-brands fa-github icon-large"
                                                title="View Github Repo"
                                            ></i>
                                        </a>
                                    </div>
                                )}
                                {project.link && !project.githubLink && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <i
                                            className="fas fa-external-link-alt icon-large"
                                            title="View Project"
                                        ></i>
                                    </a>
                                )}
                                {!project.link && project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i
                                            className="fa-brands fa-github icon-large"
                                            title="View Github Repo"
                                        ></i>
                                    </a>
                                )}
                            </div>
                        </div>
                        <ul>
                            {project.description.map((desc, descIndex) => (
                                <li key={descIndex}>{desc}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;