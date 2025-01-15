from django.urls import path,include
from .views import EventViewSet, TicketViewSet, AttendeView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('events', EventViewSet, basename='event')
router.register('tickets',TicketViewSet,basename='ticket')

urlpatterns = [
    path('',include(router.urls)),
    path('events/<int:event_id>/attendees/',AttendeView.as_view(),name='attendees')
]
