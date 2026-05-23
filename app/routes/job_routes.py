from fastapi import APIRouter

from app.models.job_model import Job

from app.services.job_service import (
    get_all_jobs,
    get_single_job,
    get_jobs_by_type,
    get_jobs_by_location,
    create_job
)

router = APIRouter()

# GET ALL JOBS
@router.get("/jobs")
def fetch_jobs():

    return get_all_jobs()


# GET SINGLE JOB
@router.get("/jobs/{id}")
def fetch_single_job(id: str):

    return get_single_job(id)


# FILTER BY TYPE
@router.get("/jobs/type/{type}")
def fetch_jobs_type(type: str):

    return get_jobs_by_type(type)


# FILTER BY LOCATION
@router.get("/jobs/location/{location}")
def fetch_jobs_location(location: str):

    return get_jobs_by_location(location)


# CREATE JOB
@router.post("/jobs")
def add_job(job: Job):

    return create_job(job.dict())