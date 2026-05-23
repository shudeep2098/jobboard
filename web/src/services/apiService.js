import axios from "axios"

const API = axios.create({
    baseURL: "http://127.0.0.1:8000"
})

// GET ALL JOBS
export const getJobs = () => API.get("/jobs")

// GET SINGLE JOB
export const getSingleJob = (id) => API.get(`/jobs/${id}`)

// FILTER BY TYPE
export const getJobsByType = (type) =>
    API.get(`/jobs/type/${type}`)

export const getJobsByLocation = (location) =>
    API.get(`/jobs/location/${location}`)