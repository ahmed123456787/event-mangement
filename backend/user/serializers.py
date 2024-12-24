from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import Serializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.utils.translation import gettext as _
from django.contrib.auth import authenticate
from core.models import Attendee, Organizer


class UserSerializer (ModelSerializer):
    """"""
    class Meta:
        model = get_user_model()
        fields = ['email','first_name','last_name','password']
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}


class CreateOrganizerSerializer(ModelSerializer): 
    user = UserSerializer()
    class Meta:
        model = Organizer
        fields = '__all__'

    def create(self,validated_data):
        """create and return a user with encrypted password"""
        print(validated_data)
        user_data = validated_data.pop('user')
        user_data['role'] = 'ORGANIZER'
        
        user = get_user_model().objects.create_user(**user_data)
         
        return Organizer.objects.create(user=user,**validated_data)
    
    
    
class CreateAttendeSerializer(ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Attendee
        exclude = ['is_comed','event']
        
    def create(self,validated_data):
        """create and return a user with encrypted password"""
        user_data = validated_data.pop('user')
        user_data['role'] = 'ATTENDEE'
        user = get_user_model().objects.create_user(**user_data)
        return Attendee.objects.create(user=user,**validated_data)