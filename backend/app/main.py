from fastapi import FastAPI

from app.database import Base
from app.database import engine

from app.models import product
from app.routers.product import router as product_router
from app.routers.customer import router as customer_router
from app.routers.order import router as order_router


Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(product_router)
app.include_router(customer_router)
app.include_router(order_router)

@app.get("/")
def home():
    return {
        "message": "Inventory Management System API"
    }