from fastapi import APIRouter

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
    """
    AI analysis contract.

    The actual Gemma implementation will be integrated later
    through a dedicated service interface owned by the AI team.
    """

    return IssueAnalysis(
        title="AI analysis pending",
        description=issue.text,
    )