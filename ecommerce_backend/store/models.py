from django.db import models

# Create your models here.


class Customer(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    

class Order(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.SET_NULL)
    date = models.DateField()


class OrderField(models.Model):
    order_id = models.ManyToOneRel(Order,on_delete=models.SET_NULL)
    product_id = models.ForeignKey(Product,on_delete=models.CASCADE)
    unitprice = models.FloatField()
    amount = models.IntegerField()


class Product(models.Model):
    name = models.CharField(max_length=200)
    category_id = models.ForeignKey(Category)
    image_id = models.ManyToOneRel(ProductImage)
    price = models.FloatField()
    discount = models.FloatField(default=0)
    stock = models.IntegerField()

class ProductImage(models.Model):
    product_id = models.ForeignKey(Product)


class Category(models.Model):
    name = models.CharField(max_length=100)

