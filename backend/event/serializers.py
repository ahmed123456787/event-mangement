from rest_framework.serializers import ModelSerializer, ValidationError
from core.models import Event


class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','name', 'start','end', 'venue','max_nb_attendee',
                  'budget', ] 
        extra_kwargs = {'id': {'read_only': True}}   
    
    def validate(self, attrs):
        if attrs['start'] > attrs['end']:
            raise ValidationError('The start date must be before the end date')
        return super().validate(attrs)