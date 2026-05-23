from fastapi import FastAPI

from app.routes.job_routes import router
from app.middleware.cors import add_cors

app = FastAPI()

# CORS
add_cors(app)

# ROUTES
app.include_router(router)