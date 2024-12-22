from rest_framework.serializers import ModelSerializer, ValidationError
from core.models import Event

class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = ['name', 'start','end', 'venue','max_nb_attendee',
                  'budget', ]    
    
    def validate(self, attrs):
        if attrs['start'] > attrs['end']:
            raise ValidationError('The start date must be before the end date')
        return super().validate(attrs)