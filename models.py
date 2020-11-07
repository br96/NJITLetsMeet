from app import db

class EventClass(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_type = db.Column(db.String(16))
    event_location = db.Column(db.String(64))
    event_time = db.Column(db.String(16))

    def __init__(self, event_type, event_location, event_time):
        self.event_type = event_type
        self.event_location = event_location
        self.event_time = event_time



db.create_all()
db.session.commit()