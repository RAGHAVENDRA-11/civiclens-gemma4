from enum import Enum
from typing import Optional

from pydantic import BaseModel, Field


class IssuePriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class IssueStatus(str, Enum):
    REPORTED = "reported"
    UNDER_REVIEW = "under_review"
    IN_PROGRESS = "in_progress"
    RESOLVED = "resolved"


class IssueCreate(BaseModel):
    text: str = Field(
        ...,
        min_length=10,
        max_length=5000,
        description="Natural-language description of the civic issue.",
    )


class IssueAnalysis(BaseModel):
    category: Optional[str] = None
    title: Optional[str] = None
    description: Optional[str] = None
    location: Optional[str] = None
    duration: Optional[str] = None
    impact: Optional[str] = None
    priority: Optional[IssuePriority] = None
    confidence: Optional[float] = Field(
        default=None,
        ge=0.0,
        le=1.0,
    )


class IssueResponse(IssueAnalysis):
    id: str
    status: IssueStatus = IssueStatus.REPORTED