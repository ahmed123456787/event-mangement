from django.urls import path 
from .views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('register-organizer/', CreateOrganizerView.as_view(), name='organizers'),
    path('register-attendee/', CreateAttendeeView.as_view(), name='attendees'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
 