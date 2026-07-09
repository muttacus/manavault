from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.database.models import InventoryItem

router = APIRouter()


class InventoryCreate(BaseModel):
    store_id: int
    card_name: str
    scryfall_id: str
    quantity: int
    price: float
    condition: str = "NM"
    foil: int = 0


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/inventory")
def create_inventory(item: InventoryCreate, db: Session = Depends(get_db)):
    inventory = InventoryItem(
        store_id=item.store_id,
        card_name=item.card_name,
        scryfall_id=item.scryfall_id,
        quantity=item.quantity,
        price=item.price,
        condition=item.condition,
        foil=item.foil,
    )

    db.add(inventory)
    db.commit()
    db.refresh(inventory)

    return inventory


@router.get("/inventory")
def list_inventory(db: Session = Depends(get_db)):
    return db.query(InventoryItem).all()