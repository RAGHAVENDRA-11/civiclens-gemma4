from uuid import uuid4

from fastapi import APIRouter, HTTPException, status

from app.schemas.issue import IssueCreate, IssueResponse


router = APIRouter(
    prefix="/api/issues",
    tags=["Issues"],
)


@router.post(
    "",
    response_model=IssueResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_issue(issue: IssueCreate):
    return IssueResponse(
        id=str(uuid4()),
        title="Civic issue received",
        description=issue.text,
        status="reported",
    )


@router.get(
    "/{issue_id}",
    response_model=IssueResponse,
)
def get_issue(issue_id: str):
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail=f"Issue '{issue_id}' not found.",
    )