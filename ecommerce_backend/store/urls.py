from django.urls import path
from .views import ProductListAPIView
from .views import SingleProductAPIView

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/', ProductListAPIView.as_view(), name='product_list_create'),
    path('products/<int:pk>/', SingleProductAPIView.as_view(), name='single_product'),
]
