from rest_framework.generics import CreateAPIView
from .serializers import CreateOrganizerSerializer
from  core.models import CustomUser
from rest_framework.settings import api_settings


class CreateUserView(CreateAPIView):
    serializer_class = CreateOrganizerSerializer
    queryset = CustomUser.objects.all()
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


