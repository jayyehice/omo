from django.urls import path, re_path
from products import views

urlpatterns = [
    path("", views.index),
    re_path("pages/.*", views.pages),
]