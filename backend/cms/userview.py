from .serializers import UserSerializer
from rest_framework.authtoken.views import Token
from rest_framework import status, viewsets
from .models import Customer
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer,CustomerSerializer
from django.contrib.auth.hashers import make_password


class userviewset(APIView):
     def post(self, request, *args, **kwargs):
          
          user_data = request.data.get('user', {})
          customer_data = request.data.get('customer', {})
          user_data['password'] = make_password(user_data.get('password'))
          
        
          user_serializer =UserSerializer(data=user_data)
          if user_serializer.is_valid():
               user_instance = user_serializer.save()
               customer_data['userId'] = user_instance.id
               

               customer_serializer = CustomerSerializer(data=customer_data)
               if customer_serializer.is_valid():
                    customer_serializer.save()
                    return Response({
                                    "message" : "user added Successfully",
                                    "user_data":user_serializer.data,
                                     "customer_data" : customer_serializer.data,
                                     },status=status.HTTP_200_OK)
               else:
                    user_instance.delete()
                    return Response({"error":customer_serializer.errors})
                     

               
          else:
               return Response({"error":user_serializer.errors},status=status.HTTP_400_BAD_REQUEST)
               
          
          