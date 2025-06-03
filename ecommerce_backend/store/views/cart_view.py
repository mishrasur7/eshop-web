from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from store.models import Cart
from store.serializers import CartSerializer

# API view to handle Cart-related operations for authenticated users
class CartAPIView(APIView):
    #permission_classes = [IsAuthenticated]

    # Handle GET request: retrieve all cart items for the current user
    def get(self, request):
        cart_items = Cart.objects.filter(user=request.user)
        serializer = CartSerializer(cart_items, many=True)
        return Response(serializer.data)
    
    # Custom method to create a cart item
    def post(self, request):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            print('Cart data:', request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    