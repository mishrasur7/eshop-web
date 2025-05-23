from django.db import models
from django.contrib.auth.models import User

# This model represents a product in the store with basic details such as name, description, price, and an optional image URL.
class Product(models.Model):
    name = models.CharField(max_length=255)  # Name of the product
    description = models.TextField()         # Detail description of the product
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Product price with 2 decimal places
    image_url = models.URLField(blank=True)  # URL to the product's image

    def __str__(self):
        return self.name 


# This model represents an item in a user's shopping cart, linking a user to a product and recording the quantity and time added.
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to the user who owns the cart
    product = models.ForeignKey(Product, on_delete=models.CASCADE)  # Link to the product, which is added to the cart
    quantity = models.PositiveIntegerField(default=1)  # Number of product in the cart
    added_date = models.DateTimeField(auto_now_add=True)  # Timestamp when the product was added to the cart

    # Returns a readable string with user, product, quantity, and the time it was added
    def __str__(self):
        return f'{self.user.username} - {self.product.name} x {self.quantity} added at {self.added_date}'
