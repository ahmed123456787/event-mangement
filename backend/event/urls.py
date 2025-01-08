from django.urls import path,include
from .views import EventViewSet, TicketViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('events', EventViewSet, basename='event')
router.register('tickets',TicketViewSet,basename='ticket')

urlpatterns = [
    path('',include(router.urls)),
]
