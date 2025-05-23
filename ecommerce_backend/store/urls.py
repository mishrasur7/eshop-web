#import of external module
from django.urls import path

#import of internal modules
from .views.product_view import ProductListAPIView
from .views.product_view import SingleProductAPIView
from .views.auth_view import RegisterUserAPIView
from .views.auth_view import LoginUserAPIView
from .views.cart_view import CartAPIView

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/', ProductListAPIView.as_view(), name='product_list_create'),
    path('products/<int:pk>/', SingleProductAPIView.as_view(), name='single_product'),
    path('register/', RegisterUserAPIView.as_view(), name='register-user'),
    path('login/', LoginUserAPIView.as_view(), name='login-user'),
    path('cart/',CartAPIView.as_view(), name='cart')
]
