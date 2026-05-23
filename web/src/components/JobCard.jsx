import { Link } from "react-router-dom"

import SkillBadge from "./SkillBadge"

function JobCard({ job }) {

    return (

        <Link to={`/jobs/${job.id}`} className="job-link">

            <div className="job-card">
                <h2>{job.title}</h2>
                <h3>{job.company}</h3>
                <p>{job.location}</p>
                <p>{job.type}</p>
                <p>{job.salary}</p>
                <div className="skills-container">
                    {
                        job.skills.map((skill, index) => (
                            <SkillBadge key={index} skill={skill} />
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}

export default JobCard