import datetime
from sqlalchemy import Column, ForeignKey, Integer, String, Text, DECIMAL, Date, DateTime
from sqlalchemy.orm import relationship

from .database import Base

class Address(Base):
    __tablename__ = 'address'

    id = Column('id', Integer, primary_key=True, index=True, autoincrement=True)
    name = Column('name', String(255))
    cap = Column('cap', String(12), default=None)
    lat = Column('lat', DECIMAL(9,6))
    lng = Column('lng', DECIMAL(9,6))
    city = Column('city', Integer, ForeignKey('city.id'))

    city_rel = relationship("City", back_populates="addresses")
    businesses = relationship("Business", back_populates="address_rel")


class Ateco(Base):
    __tablename__ = 'ateco'

    id = Column('id', Integer, primary_key=True, index=True)
    code = Column('code', String(8))
    description = Column('description', Text)

    businesses = relationship("Business", back_populates="ateco_rel")


class Business(Base):
    __tablename__ = 'business'
    
    id = Column('id', Integer, primary_key=True, index=True)
    name = Column('name', String(127))
    _type = Column('type', Integer, ForeignKey("type.id"))
    address = Column('address', Integer, ForeignKey("address.id"))
    phone = Column('phone', String(15), default=None)
    email = Column('email', String(255), default=None)
    website = Column('website', String(2083), default=None)
    employees_number = Column('employees_number', Integer, default=None)
    course = Column('course', Integer, ForeignKey("course.id"))
    ateco_code = Column('ateco_code', Integer, ForeignKey("ateco.id"))
    agreement_date = Column('agreement_date', Date(), default=None)
    creation_date =  Column('creation_date', DateTime(), default=datetime.datetime.utcnow)

    type_rel = relationship("Type", back_populates="businesses")
    address_rel = relationship("Address", back_populates="businesses")
    course_rel = relationship("Course", back_populates="businesses")
    ateco_rel = relationship("Ateco", back_populates="businesses")



class City(Base):
    __tablename__ = 'city'

    id = Column('id', Integer, primary_key=True, index=True)
    name = Column('name', String(128))
    country = Column('country', Integer, ForeignKey('country.id'))

    country_rel = relationship("Country", back_populates="cities")
    addresses = relationship("Address", back_populates="city_rel")


class Country(Base):
    __tablename__ = 'country'

    id = Column('id', Integer, primary_key=True, index=True)
    code = Column('code', String(3))
    name = Column('name', String(64))

    cities = relationship("City", back_populates="country_rel")


class Course(Base):
    __tablename__ = 'course'

    id = Column('id', Integer, primary_key=True, index=True)
    name = Column('name', String(64))

    businesses = relationship("Business", back_populates="course_rel")


class Type(Base):
    __tablename__ = 'type'

    id = Column('id', Integer, primary_key=True, index=True)
    name = Column('name', String(32))

    businesses = relationship("Business", back_populates="type_rel")