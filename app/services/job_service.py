from bson import ObjectId

from app.config.database import jobs_collection
from app.schemas.job_schema import (
    job_serializer,
    jobs_serializer
)

# GET ALL JOBS
def get_all_jobs():

    jobs = jobs_collection.find()

    return jobs_serializer(jobs)


# GET SINGLE JOB
def get_single_job(job_id: str):

    job = jobs_collection.find_one({
        "_id": ObjectId(job_id)
    })

    return job_serializer(job)


# GET JOBS BY TYPE
def get_jobs_by_type(job_type: str):

    jobs = jobs_collection.find({
        "type": job_type
    })

    return jobs_serializer(jobs)


# GET JOBS BY LOCATION
def get_jobs_by_location(location: str):

    jobs = jobs_collection.find({
        "location": location
    })

    return jobs_serializer(jobs)


# CREATE JOB
def create_job(job_data):

    result = jobs_collection.insert_one(job_data)

    return {
        "message": "Job created successfully",
        "id": str(result.inserted_id)
    }