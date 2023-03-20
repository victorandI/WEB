import os

from sqlalchemy import Integer, String, Column, Date, ForeignKey

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import relationship, sessionmaker, scoped_session

DB_URL = os.getenv("DB_URL", "mysql+pymysql://root:qwerty1234567@localhost:3306/pp")

engine = create_engine(DB_URL)

SessionFactory = sessionmaker(bind=engine)

Session = scoped_session(SessionFactory)
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Administrator(Base):
    __tablename__="Administrator"

    idAdministrator = Column(Integer, primary_key=True)
    FirstName = Column(String(25), nullable=False)
    LastName = Column(String(225), nullable=False)
    phone = Column(String(225), nullable=False)

class Passenger(Base):
    __tablename__="Passenger"

    idPassenger = Column(Integer, primary_key=True)
    FirstName = Column(String(225))
    LastName = Column(String(225))
    phone = Column(String(225))
    documentNum = Column(String(225))
    address =  Column(String(225))

class RentalService(Base):
    __tablename__="RentalService"

    idService = Column(Integer, primary_key=True)
    name = Column(String(225))
    email = Column(String(225))
    phone = Column(String(225))
    website = Column(String(225))
    address =  Column(String(225))

class Car(Base):
    __tablename__="Car"

    idCar = Column(Integer, primary_key=True)
    brand = Column(String(225))
    model = Column(String(225))
    year = Column(Integer)
    seatsNum = Column(Integer)
    status =  Column(String(225))