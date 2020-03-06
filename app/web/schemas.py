from typing import List
from pydantic import BaseModel

from datetime import date, datetime, time, timedelta
from decimal import Decimal


class AddressBase(BaseModel):
    name: str
    cap: str = None
    lat: Decimal
    lng: Decimal


class AddressCreate(AddressBase):
    pass


class Address(AddressBase):
    id: int
    city: int

    class Config:
        orm_mode = True


class AtecoBase(BaseModel):
    code: str
    description: str


class AtecoCreate(AtecoBase):
    pass


class Ateco(AtecoBase):
    id: int

    class Config:
        orm_mode = True


class BusinessBase(BaseModel):
    name: str
    phone: str
    email: str
    website: str
    employees_number: int
    agreement_date: date = None
    creation_date: datetime = datetime.utcnow


class BusinessCreate(BusinessBase):
    pass


class Business(BusinessBase):
    id: int
    _type: int
    address: int
    course: int
    ateco_code: int

    class Config:
        orm_mode = True


class CityBase(BaseModel):
    name: str


class CityCreate(CityBase):
    pass


class City(CityBase):
    id: int
    country: int

    class Config:
        orm_mode = True


class CountryBase(BaseModel):
    code: str
    name: str


class CountryCreate(CountryBase):
    pass


class Country(CountryBase):
    id: int

    class Config:
        orm_mode = True


class CourseBase(BaseModel):
    name: str


class CourseCreate(CourseBase):
    pass


class Course(CourseBase):
    id: int

    class Config:
        orm_mode = True


class TypeBase(BaseModel):
    name: str


class TypeCreate(TypeBase):
    pass


class Type(TypeBase):
    id: int

    class Config:
        orm_mode = True
