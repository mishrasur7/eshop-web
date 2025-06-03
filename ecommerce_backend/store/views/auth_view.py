# import of external modules
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import authenticate

# import of internal modules
from store.serializers import UserSerializer


class RegisterUserAPIView(APIView):
    # Handle user registration via POST request
    def post(self, request):
        # Deserialize incoming data with UserSerializer
        serializer = UserSerializer(data=request.data)
        # Validate the serializer data
        if serializer.is_valid():
            # Save the new user to the database
            user = serializer.save()
            # Generate or retrieve an authentication token for the user
            token, _ = Token.objects.get_or_create(user=user)
            # Return the token in the response
            return Response({'token': token.key})
        # Return validation errors if data is invalid
        print('Serializer error: ', serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginUserAPIView(APIView):
    # Handle user login via POST request
    def post(self, request):
        # Extract username and password from the request data
        username = request.data.get("username")
        password = request.data.get("password")
        # Authenticate user credentials
        user = authenticate(username=username, password=password)
        if user:
            # Generate or retrieve an authentication token for the user
            token, _ = Token.objects.get_or_create(user=user)
            # Return the token in the response
            return Response({'token': token.key})
        # Return error if authentication fails
        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
