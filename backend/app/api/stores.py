from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.database.models import Store

router = APIRouter()


class StoreCreate(BaseModel):
    name: str
    city: str
    state: str
    platform: str = "manual"


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/stores")
def create_store(store: StoreCreate, db: Session = Depends(get_db)):
    new_store = Store(
        name=store.name,
        city=store.city,
        state=store.state,
        platform=store.platform,
    )

    db.add(new_store)
    db.commit()
    db.refresh(new_store)

    return new_store


@router.get("/stores")
def list_stores(db: Session = Depends(get_db)):
    return db.query(Store).all()