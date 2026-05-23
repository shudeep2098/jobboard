def job_serializer(job):

    return {
        "id": str(job["_id"]),
        "title": job["title"],
        "company": job["company"],
        "location": job["location"],
        "type": job["type"],
        "salary": job["salary"],
        "skills": job["skills"],
        "experience": job["experience"]
    }


def jobs_serializer(jobs):

    return [job_serializer(job) for job in jobs]