from enum import Enum
from typing import Optional

from pydantic import BaseModel, Field


class CivicCategory(str, Enum):
    ROAD_DAMAGE = "road_damage"
    WASTE = "waste"
    WATER = "water"
    DRAINAGE = "drainage"
    STREETLIGHT = "streetlight"
    OTHER = "other"


class CivicPriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


class CivicIssueAnalysis(BaseModel):
    category: CivicCategory
    title: str
    description: str
    location: Optional[str] = None
    duration: Optional[str] = None
    impact: Optional[str] = None
    priority: CivicPriority
    confidence: float = Field(ge=0.0, le=1.0)