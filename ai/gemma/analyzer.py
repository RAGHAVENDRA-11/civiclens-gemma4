import json

from .client import client, MODEL_NAME
from .prompts import CIVIC_ISSUE_ANALYSIS_PROMPT
from .schemas import CivicIssueAnalysis


def analyze_civic_issue(text: str) -> CivicIssueAnalysis:
    if not text or not text.strip():
        raise ValueError("Civic issue description cannot be empty.")

    prompt = f"""
{CIVIC_ISSUE_ANALYSIS_PROMPT}

Citizen report:
{text}
"""

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt,
    )

    raw_text = response.text.strip()

    try:
        data = json.loads(raw_text)
    except json.JSONDecodeError as exc:
        raise ValueError(
            f"Gemma returned invalid JSON: {raw_text}"
        ) from exc

    return CivicIssueAnalysis.model_validate(data)