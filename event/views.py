from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from core.models import Event, Organizer
from .serializers import EventSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class EventViewSet(ModelViewSet):
    """The viwe set for the event model"""
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    
    
    def get_queryset(self):
        try:
            organizer = Organizer.objects.get(user=self.request.user)
            return Event.objects.filter(organizer=organizer)
            
        except Organizer.DoesNotExist:
            return Organizer.objects.none()
    
    def get_serializer_class(self, *args, **kwargs):
        if self.action == 'create':
            return EventSerializer 
        return self.serializer_class
    

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        print(request.user.id)
        print(data)
        serializer = self.get_serializer(data=data)
        organizer = Organizer.objects.get(user=request.user)
        if serializer.is_valid():
            serializer.save(organizer=organizer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


