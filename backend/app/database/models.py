from sqlalchemy import Column, Float, Integer, String

from app.database.database import Base


class Store(Base):
    __tablename__ = "stores"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    city = Column(String)
    state = Column(String)
    platform = Column(String, default="manual")


class InventoryItem(Base):
    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)
    store_id = Column(Integer, nullable=False)
    card_name = Column(String, nullable=False)
    scryfall_id = Column(String)
    quantity = Column(Integer, default=0)
    price = Column(Float)
    condition = Column(String, default="NM")
    foil = Column(Integer, default=0)