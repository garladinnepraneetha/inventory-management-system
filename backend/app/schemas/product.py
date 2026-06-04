from pydantic import BaseModel


class ProductCreate(BaseModel):
    name: str
    sku: str
    price: int
    stock_quantity: int


class ProductResponse(ProductCreate):
    id: int

    class Config:
        from_attributes = True