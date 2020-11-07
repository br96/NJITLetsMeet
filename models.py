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

class User(db.Model):
    __tablename__ = "users"

    email = db.Column(db.Text, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    bio = db.Column(db.String(1024))
    profile_picture = db.Column(db.String(256))

    def __init__(self, email, name, bio, profile_picture):
        self.email = email
        self.name = name
        self.bio = bio
        self.profile_picture = profile_picture

db.create_all()
db.session.commit()