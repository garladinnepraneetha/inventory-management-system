from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from app.database import Base
from app.database import engine

from app.models import product
from app.routers.product import router as product_router
from app.routers.customer import router as customer_router
from app.routers.order import router as order_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(product_router)
app.include_router(customer_router)
app.include_router(order_router)

@app.get("/")
def home():
    return {
        "message": "Inventory Management System API"
    }