from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.analyze import router as analyze_router
from app.api.routes.issues import router as issues_router
from app.core.config import settings


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description=(
        "Backend API for CivicLens civic issue understanding "
        "and community action platform."
    ),
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(issues_router)
app.include_router(analyze_router)


@app.get("/health", tags=["Health"])
def health_check():
    return {
        "status": "healthy",
        "service": settings.app_name,
        "version": settings.app_version,
    }