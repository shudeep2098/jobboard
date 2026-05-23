from pydantic import BaseModel
from typing import List

class Job(BaseModel):

    title: str
    company: str
    location: str
    type: str
    salary: str
    skills: List[str]
    experience: str