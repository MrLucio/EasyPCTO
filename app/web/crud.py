from sqlalchemy.orm import Session

from . import models, schemas

def get_ateco(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Ateco).offset(skip).limit(limit).all()