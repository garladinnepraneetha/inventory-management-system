from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database import Base


class Product(Base):

    __tablename__ = "products"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(String)

    sku = Column(
        String,
        unique=True
    )

    price = Column(Integer)

    stock_quantity = Column(Integer)