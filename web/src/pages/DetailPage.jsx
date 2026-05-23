import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import Navbar from "../components/Navbar"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"
import SkillBadge from "../components/SkillBadge"

import { getSingleJob } from "../services/apiService"

function DetailPage() {
    const { id } = useParams()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchSingleJob()
    }, [id])

    const fetchSingleJob = async () => {
        try {
            setLoading(true)
            const response = await getSingleJob(id)
            setJob(response.data)
        } catch (err) {
            setError("Failed to fetch job details")
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Loader />

    if (error) return <ErrorMessage message={error} />

    if (!job) return <ErrorMessage message="Job not found" />

    return (
        <div>
            <Navbar />
            
            <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
                {/* Back Link */}
                <Link to="/jobs" className="back-link">
                    &larr; Back to Jobs
                </Link>

                {/* Job Detail Card */}
                <div className="detail-card">
                    <h1>{job.title}</h1>
                    <h3>{job.company}</h3>
                    
                    <div style={{ marginTop: "20px", borderBottom: "1px solid var(--border-glass)", paddingBottom: "20px" }}>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Job Type:</strong> {job.type}</p>
                        <p><strong>Salary:</strong> {job.salary}</p>
                        <p><strong>Experience:</strong> {job.experience}</p>
                    </div>

                    <div style={{ marginTop: "24px" }}>
                        <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px" }}>Required Skills</h4>
                        <div className="skills-container">
                            {job.skills && job.skills.map((skill, index) => (
                                <SkillBadge key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage