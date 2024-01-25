# myapp/models.py

from django.db import models
from django.contrib.auth.models import User

class Customer(models.Model):
   
    country = models.CharField(max_length=100)
    short_description = models.TextField()
    # profile_picture = models.ImageField(upload_to='profile_pictures/')
    # agreements = models.FileField(upload_to='agreements/')

    userId = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reservations')