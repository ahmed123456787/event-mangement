from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from core.models import Event, Ticket, Organizer, Attendee
from .serializers import EventSerializer, TicketSerializer, AttendeeSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from user.permissions import IsOrgnaizer
from rest_framework.generics import ListCreateAPIView

class EventViewSet(ModelViewSet):
    """The viwe set for the event model"""
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated,IsOrgnaizer]
    authentication_classes = [JWTAuthentication]
    
    def get_permissions(self):
        return super().get_permissions()
    
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
 

class TicketViewSet(ModelViewSet):
    """The view set for the Ticket model"""
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsOrgnaizer]

    def create(self, request, *args, **kwargs):
        event_id = request.data.get('event')

        try:
            event = Event.objects.get(id=event_id)
        except Event.DoesNotExist:
            return Response({'error': 'Event does not exist'}, status=status.HTTP_404_NOT_FOUND)

        # Check if the user created this event
        if event.organizer.user != request.user:
            return Response(
                {'error': 'You are not allowed to create a ticket for this event'},
                status=status.HTTP_403_FORBIDDEN
            )

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        # Filter tickets by the current user's events
        self.queryset = Ticket.objects.filter(event__organizer__user=self.request.user)
        return self.queryset

    def list(self, request, *args, **kwargs):
        # List all tickets created by the current user
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, *args, **kwargs):
        # Retrieve a ticket created by the current user
        instance = self.get_object()
        serializer = self.serializer_class(instance)
        return Response(serializer.data)
    

class AttendeView(ListCreateAPIView):
    """List the attendees of an event"""
    serializer_class = AttendeeSerializer
    queryset = Attendee.objects.all()
    def list(self, request, *args, **kwargs):
        event_id = self.kwargs.get('event_id', None)
        print(event_id)
        try :
            print(Attendee.objects.all().values()) 
            event = Attendee.objects.filter(event__id=event_id)
            serializer = self.get_serializer(event, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Attendee.DoesNotExist:
            return Response({'error':'Event does not exist'}, status=status.HTTP_404_NOT_FOUND)    