from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Customer



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'is_superuser', 'first_name', 'last_name', 'email']
        extra_kwargs = {
            'password': {
                'write_only': True,
            },
        }


             




class  CustomerSerializer(serializers.ModelSerializer):
      
      class Meta:
           model = Customer
           fields = '__all__' 
      
  
      
           
    




        
               
