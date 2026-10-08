from typing import Optional

from pydantic import BaseModel, Field


class CivicIssueAnalysis(BaseModel):
    category: str
    title: str
    description: str
    location: Optional[str] = None
    duration: Optional[str] = None
    impact: Optional[str] = None
    priority: str
    confidence: float = Field(ge=0.0, le=1.0)