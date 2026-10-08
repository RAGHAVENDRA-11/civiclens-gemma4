from fastapi import APIRouter, HTTPException, status

from ai.gemma.analyzer import analyze_civic_issue
from app.schemas.issue import IssueAnalysis, IssueCreate


router = APIRouter(
    prefix="/api",
    tags=["AI Analysis"],
)


@router.post(
    "/analyze",
    response_model=IssueAnalysis,
)
def analyze_issue(issue: IssueCreate):
    try:
        analysis = analyze_civic_issue(issue.text)

        return IssueAnalysis(
            category=analysis.category,
            title=analysis.title,
            description=analysis.description,
            location=analysis.location,
            duration=analysis.duration,
            impact=analysis.impact,
            priority=analysis.priority,
            confidence=analysis.confidence,
        )

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Civic issue analysis service failed.",
        )