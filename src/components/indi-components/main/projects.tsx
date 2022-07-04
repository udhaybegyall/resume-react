import Title from "./title";
import SubTitle from './sub-title'
import Sstitle from "./sstitle";
import Discription from "./discription";

import { projectsData } from "../../../utils/projectsData";

const Projects = () => {
    return (
        <div>
            <Title title="Projects" />
            {projectsData.map((project, index) => {
                return (
                    <div key={index}>
                        <SubTitle title={project.title} tag={project.type} />
                        <Sstitle title={project.technologies} />
                        <ul>
                            {
                                project.description.map((discription, index) => {
                                    return (
                                        <Discription key={index} description={discription} showbullet lineheight />
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;