import axios from "axios"

const API = axios.create({
    baseURL: "http://127.0.0.1:8000"
})

export const getJobs = () =>
    API.get("/jobs")

export const getSingleJob = (id) =>
    API.get(`/jobs/${id}`)

export const getJobsByType = (type) =>
    API.get(`/jobs/type/${type}`)

export const getJobsByLocation = (location) =>
    API.get(`/jobs/location/${location}`)