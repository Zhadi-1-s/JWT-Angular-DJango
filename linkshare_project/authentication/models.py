from django.db import models

from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255, unique = True)
    password = models.CharField(max_length = 255)
    username = models.CharField(max_length=255, default='userName')
    photoUrl = models.TextField(default='src')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    photo = models.TextField()
    rating = models.FloatField()
