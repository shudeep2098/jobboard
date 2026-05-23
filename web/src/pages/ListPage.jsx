import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import JobCard from "../components/JobCard"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"

import {
    getJobs,
    getJobsByType,
    getJobsByLocation
} from "../services/apiService"

function ListPage() {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // Location & Type Filter states
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState("")
    const [activeFilter, setActiveFilter] = useState("all")

    useEffect(() => {

        fetchJobs()

    }, [])

    // FETCH ALL JOBS
    const fetchJobs = async () => {

        try {

            setLoading(true)
            setActiveFilter("all")
            setSelectedLocation("")

            const response = await getJobs()
            setJobs(response.data)

            // Dynamically collect unique locations from all loaded jobs
            const uniqueLocations = Array.from(
                new Set(response.data.map(j => j.location).filter(Boolean))
            )
            setLocations(uniqueLocations)

        } catch (err) {

            setError("Failed to fetch jobs")

        } finally {

            setLoading(false)
        }
    }

    // FILTER BY TYPE
    const filterJobs = async (type) => {

        try {

            setLoading(true)
            setActiveFilter(type)
            setSelectedLocation("") // Reset location selector on type filter click

            const response = await getJobsByType(type)
            setJobs(response.data)

        } catch (err) {

            setError("Failed to filter jobs")

        } finally {

            setLoading(false)
        }
    }

    // FILTER BY LOCATION
    const handleLocationChange = async (e) => {
        const location = e.target.value
        setSelectedLocation(location)

        if (!location) {
            fetchJobs()
            return
        }

        try {
            setLoading(true)
            setActiveFilter("") // Reset active type filter badge on location select

            const response = await getJobsByLocation(location)
            setJobs(response.data)

        } catch (err) {
            setError("Failed to filter jobs by location")
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Loader />

    if (error) return <ErrorMessage message={error} />

    return (

        <div>

            <Navbar />

            {/* Premium Filter Toolbar */}
            <div className="filter-buttons" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", padding: "30px 40px 10px", gap: "20px" }}>

                {/* Job Type Selector buttons */}
                <div style={{ display: "flex", gap: "10px" }}>
                    <button 
                        onClick={fetchJobs}
                        className={activeFilter === "all" ? "active" : ""}
                    >
                        All Jobs
                    </button>
                    <button
                        onClick={() => filterJobs("Full Time")}
                        className={activeFilter === "Full Time" ? "active" : ""}
                    >
                        Full Time
                    </button>
                    <button
                        onClick={() => filterJobs("Internship")}
                        className={activeFilter === "Internship" ? "active" : ""}
                    >
                        Internship
                    </button>
                </div>

                {/* Dynamic Location Dropdown */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-secondary)" }}>
                        Location:
                    </span>
                    <select 
                        value={selectedLocation} 
                        onChange={handleLocationChange}
                        className="location-select"
                        style={{
                            padding: "10px 20px",
                            borderRadius: "30px",
                            border: "1px solid var(--border-glass)",
                            backgroundColor: "var(--bg-secondary)",
                            color: "var(--text-primary)",
                            fontSize: "14px",
                            fontWeight: "600",
                            outline: "none",
                            cursor: "pointer",
                            minWidth: "180px",
                            transition: "all 0.3s ease"
                        }}
                    >
                        <option value="">All Locations</option>
                        {locations.map((loc, idx) => (
                            <option key={idx} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

            </div>

            <div className="jobs-container">

                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                        />
                    ))
                ) : (
                    <div className="center" style={{ gridColumn: "1 / -1", marginTop: "40px" }}>
                        No jobs found matching your criteria.
                    </div>
                )}

            </div>

        </div>
    )
}

export default ListPage