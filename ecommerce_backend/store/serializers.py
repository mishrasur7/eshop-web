from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Product
from .models import Cart

# Serializer for the Product model, includes all fields
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

# Serializer for the User model
class UserSerializer(serializers.ModelSerializer):
    # Password is write-only so it won't be included in responses
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    
    # Custom method to create a user with hashed password
    def create_user(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password']
        )
        return user

# Serializer for the Cart model, includes selected fields
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'user', 'product', 'quantity', 'added_at']


