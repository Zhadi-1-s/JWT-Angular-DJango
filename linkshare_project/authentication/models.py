from django.db import models

from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager

import jwt

from datetime import datetime
from datetime import timedelta
# Create your models here.


class User(AbstractUser):
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255, unique = True)
    password = models.CharField(max_length = 255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    