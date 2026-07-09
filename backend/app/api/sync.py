from fastapi import APIRouter

from app.connectors.shopify import sync_shopify_inventory
from app.connectors.lightspeed import sync_lightspeed_inventory
from app.connectors.square import sync_square_inventory

router = APIRouter()


@router.post("/sync/shopify/{store_id}")
def sync_shopify(store_id: int):
    return sync_shopify_inventory(store_id)


@router.post("/sync/lightspeed/{store_id}")
def sync_lightspeed(store_id: int):
    return sync_lightspeed_inventory(store_id)


@router.post("/sync/square/{store_id}")
def sync_square(store_id: int):
    return sync_square_inventory(store_id)