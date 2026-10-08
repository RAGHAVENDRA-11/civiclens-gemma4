# CivicLens

> An open-source AI-powered civic issue understanding platform that uses Gemma 4 to transform natural-language citizen reports into structured and actionable civic information.

## Team

**Team Name:** Chill stack


| Member | Contribution |
| ------ | ------------ |
| Raghavendra R| Team Lead, Gemma 4 AI integration, civic issue classification, structured information extraction, priority analysis |
| Pravin Raja M | FastAPI backend, API contracts, Gemma backend integration, CORS configuration |
| Ragul S | Next.js frontend, CivicLens UI, issue reporting form, AI analysis result interface |
| Sudharsan N K | AI/Data engineering, semantic similarity and duplicate issue detection prototype |

## Problem Statement

### The Problem

Citizens encounter everyday civic problems such as potholes, garbage accumulation, water leakage, blocked drainage, and broken streetlights.

Although citizens can identify these problems, reporting them in a structured and useful way can be difficult. Important information such as the type of issue, location, duration, impact, and priority may be missing or inconsistently described.

This makes it harder to transform individual citizen observations into useful and actionable civic information.

### Why We Chose This Problem

Civic problems directly affect people's daily lives and communities.

We chose this problem because a large amount of valuable civic information already exists in the form of natural-language observations from citizens. We wanted to explore how open-source/open-weight AI can transform these unstructured descriptions into structured information that can support future civic issue management and community-level analysis.

## Solution

CivicLens allows citizens to describe a civic problem naturally instead of requiring them to understand complex reporting categories.

The description is sent to a FastAPI backend, which uses Gemma 4 to analyze the report and return structured civic information.

The system identifies the civic category and extracts useful information such as location, duration, impact, priority, and confidence.

### Key Features

- Natural-language civic issue reporting
- Gemma 4-powered civic issue classification
- Structured information extraction
- Automatic priority recommendation
- Confidence scoring
- FastAPI REST API
- Interactive Next.js frontend
- Semantic similarity prototype for future duplicate/community issue detection

## Innovation and Differentiation

CivicLens focuses on using Gemma 4 as a structured civic issue understanding engine rather than as a generic chatbot.

Instead of requiring citizens to manually select multiple fields, the system accepts a natural-language description and automatically transforms it into structured civic information.

For example:

> "There is a huge pothole near the bus stand. Bikes are struggling to pass and it has been there for two weeks."

can be transformed into:

- Category: Road Damage
- Location: Near the bus stand
- Duration: 2 weeks
- Impact: Bikes are struggling to pass
- Priority: High
- Confidence: 0.98

This creates a foundation for future duplicate detection, community issue grouping, and civic analytics.

## Technical Implementation

### Architecture

```mermaid
flowchart TD
    A[Citizen] --> B[Next.js Frontend]
    B -->|HTTP POST /api/analyze| C[FastAPI Backend]
    C --> D[Gemma 4 AI Engine]
    D --> E[Structured Civic Analysis]
    E --> C
    C --> B
    B --> F[Analysis Result UI]
