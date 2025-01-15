from rest_framework.serializers import ModelSerializer, ValidationError
from core.models import Event, Ticket, Attendee
from user.serializers import UserSerializer

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
    
    
class TicketSerializer(ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id','event','price','ticket','quantity']
        extra_kwargs = {'id': {'read_only': True}}
        
    def validate(self, attrs):
        if attrs['quantity'] < 0:
            raise ValidationError('The quantity must be greater than 0')
        return super().validate(attrs)
    
    def create(self, validated_data):
        validated_data['sold_quantity'] = 0 # set the sold quantity to 0
        return super().create(validated_data)
    

class AttendeeSerializer(ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Attendee  
        fields = ['id','user','is_comed','event']  