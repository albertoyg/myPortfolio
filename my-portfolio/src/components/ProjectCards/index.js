
const ProjectCard = ({project}) => {
    return (
        <div className="project-card">

            <div className="text-content">
                <h2>{project.name}</h2>

                <div class="content-row">
                    <div className='left'>
                        <p>{project.description}</p>
                            <div class="buttons">
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    <button className="flat-button">Live Demo</button>
                                </a>
                                <a href={project.seeCode} target="_blank" rel="noopener noreferrer">
                                    <button className="flat-button">See Code</button>
                                </a>
                            </div>
                    </div>
                    <div className="card-image">
                        <img src={project.image} alt="Project" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;