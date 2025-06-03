# import of external modules
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status

# import of internal modules 
from store.models import Product
from store.serializers import ProductSerializer

class ProductListAPIView(APIView):
    # Handle GET requests to retrieve all products
    def get(self, request):
        # Query all product objects from the database
        products = Product.objects.all()
        # Serialize the list of products (many=True because it's a queryset)
        serializer = ProductSerializer(products, many=True)
        # Return serialized data as JSON response
        return Response(serializer.data)
    
    # Handle POST requests to create a new product
    def post(self, request):
        # check if the request is not coming from admin user
        print(f'User: {request.user}')
        print(f'Data: {request.data}')
        if not request.user.is_staff:
            return Response({'Error message': 'Only admin can add products.'}, status=403)
        # Deserialize and validate incoming product data
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            # Save the new product instance if data is valid
            serializer.save()
            # Return the serialized data with HTTP 201 Created status
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # If data is invalid, return errors with 400 Bad Request status
        print("Serializer errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SingleProductAPIView(APIView):
    # Handle GET requests to retrieve a single product by primary key (id)
    def get(self, request, pk):
        # Fetch the product by id or return 404 if not found
        product = get_object_or_404(Product, pk=pk)
        # Serialize the single product instance
        serializer = ProductSerializer(product)
        # Return the serialized product data
        return Response(serializer.data)
    
    # Handle PUT requests to update an existing product by primary key
    def put(self, request, pk):
        # check if the request is not coming from admin user
        if not request.user.is_staff:
            return Response({'Error message': 'Only admin can update product.'}, status=403)
        # Fetch the product by id or return 404 if not found
        product = get_object_or_404(Product, pk=pk)
        # Deserialize and validate the incoming updated data against the existing product instance
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            # Save updates if data is valid
            serializer.save()
            # Return the updated product data
            return Response(serializer.data)
        # Return validation errors with HTTP 400 Bad Request status if invalid
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Handle DELETE requests to remove a product by primary key
    def delete(self, request, pk):
        # check if the request is not coming from admin user
        if not request.user.is_staff:
            return Response({'Error message': 'Only admin can delete product.'}, status=403)
        # Fetch the product by id or return 404 if not found
        product = get_object_or_404(Product, pk=pk)
        # Delete the product instance from the database
        product.delete()
        # Return HTTP 204 No Content status indicating successful deletion
        return Response(status=status.HTTP_204_NO_CONTENT)

    
    

