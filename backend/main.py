from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel, HttpUrl
from utils import perform_url_analysis, THRESHOLD_PHISHING
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import HTTPException

app = FastAPI()
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UrlInput(BaseModel):
    url: str

class URLCheckResult(BaseModel):
    url: str
    is_phishing: bool
    danger_score: float
    reason: list[str]

@app.post("/analyse", response_model=URLCheckResult)
async def analyse_url(url_input: UrlInput):
    """Performs heuristic analysis on a submitted URL.

    Coordinates with the utility engine to calculate a risk score and 
    determine if the URL matches phishing patterns.

    Args:
        url_input (UrlInput): A Pydantic model containing the 'url' string.

    Returns:
        URLCheckResult: The analyzed result including phishing verdict, 
            danger score, and list of detected red flags.
    """
    url = url_input.url.strip()
    if not url.startswith("http://") and not url.startswith("https://"):
        url = "https://" + url
    
    if not url_input.url.strip():
        raise HTTPException(status_code=400, detail="URL cannot be empty")

    final_score, reasons = perform_url_analysis(url)
    is_phishing = final_score >= THRESHOLD_PHISHING

    return {
        "url": url,
        "is_phishing": is_phishing,
        "danger_score": final_score, 
        "reason": reasons
    }
    

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}