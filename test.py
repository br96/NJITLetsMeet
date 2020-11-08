import unittest
from unittest.mock import patch
import app

class TestApp(unittest.TestCase):
    def test_example(self):
        pass

class LocationResponse:
    def __init__(self, location):
        self.location = location

class TimeResponse:
    def __init__(self, time):
        self.time = time

class DescriptionResponse:
    def __init__(self, description):
        self.description = description

if __name__ == "__main__":
    unittest.main()