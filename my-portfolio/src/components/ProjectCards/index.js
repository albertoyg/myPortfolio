import placeholderIMG from '../../assets/images/Screenshot 2023-08-01 at 11.19.14 PM.png'

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">

            <div className="text-content">
                <h2>{project.name}</h2>

                <div class="content-row">
                    <div className='left'>
                        <p>My paragraph text.</p>
                            <div class="buttons">
                                <button class="flat-button">Live Demo</button>
                                <button class="flat-button">See Code</button>
                            </div>
                    </div>
                    <div className="card-image">
                        <img src={placeholderIMG} alt="Project" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;