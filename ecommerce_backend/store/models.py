

from django.db import models



#Name of generated db tables:
# ecommerce_backend_category
# ecommerce_backend_customer
# ecommerce_backend_image
# ecommerce_backend_order
# ecommerce_backend_order_orderedProduct (with fields: id PK, order_id FK and product_id FK)
# ecommerce_backend_product


class Customer(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return f"Category: {self.name}"


class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    discount = models.FloatField(default=0)
    stock = models.IntegerField(default=0)

    def __str__(self):
        return self.name




class Order(models.Model):

    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL,null=True)
    orderedProducts = models.ManyToManyField(Product)
    date = models.DateField()

    def __str__(self):
        return f"Customer_id: {self.customer}'s Order."



class Image(models.Model):
    product = models.ForeignKey(Product,on_delete=models.SET_NULL,null=True)
    url = models.CharField(max_length=200)









