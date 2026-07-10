from fastapi import FastAPI, HTTPException

from app.database.init_db import init_db
from app.api.sync import router as sync_router
from app.api.stores import router as stores_router
from app.connectors.scryfall import search_card
from app.api.inventory import router as inventory_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

init_db()

app.include_router(stores_router, prefix="/api")
app.include_router(inventory_router, prefix="/api")
app.include_router(sync_router, prefix="/api")


@app.get("/")
def home():
    return {
        "app": "ManaVault API",
        "version": "0.1",
        "status": "running",
    }


@app.get("/api/cards/{name}")
def get_card(name: str):
    card = search_card(name)

    if not card:
        raise HTTPException(status_code=404, detail="Card not found")

    return card