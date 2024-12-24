from rest_framework.generics import CreateAPIView
from .serializers import CreateOrganizerSerializer,CreateAttendeSerializer
from  core.models import CustomUser
from rest_framework.settings import api_settings


class CreateOrganizerView(CreateAPIView):
    serializer_class = CreateOrganizerSerializer
    queryset = CustomUser.objects.all()
    
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)                

    
class CreateAttendeeView(CreateAPIView):
    serializer_class = CreateAttendeSerializer
    queryset = CustomUser.objects.all()
    
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
