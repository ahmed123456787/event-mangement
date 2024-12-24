from django.db import models
from django.contrib.auth.models import AbstractBaseUser,UserManager
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _

class CustomUserManager(UserManager):

    def create_user(self, email,  password, **extra_fields):
        
        if not email:
            return ValueError('The Email must be set')
        
        email = self.normalize_email(email)
        user = self.model(email=email,**extra_fields)
        user.set_password(password)
        
        user.save()
        return user
        
    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser,PermissionsMixin):
    TYPE = [
        ('ORGANIZER','organizer'),
        ('ATTENDEE','attendee'),
        ('SPEAKER','speaker')
    ]
    
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    role = models.CharField(max_length=10,choices=TYPE)    
    
    USERNAME_FIELD = 'email'
    objects = CustomUserManager()
    
    REQUIRED_FIELDS  = ['first_name','last_name']
    
    class Meta:
        unique_together = ['first_name','last_name']
    
    
    def __str__(self):
        return self.first_name



class Organizer(models.Model):
    
    HEADQUARTER = [
        ('NORHT AMERICA','North America'),
        ('SOUTH AMERICA','South America'),
        ('EUROPE','Europe'),
        ('ASIA','Asia'),
        ('AFRICA','Africa'),
        ('AUSTRALIA','Australia'),
        
    ]
    
    user = models.OneToOneField(CustomUser,on_delete=models.CASCADE,related_name='oraganizer')
    company_email = models.EmailField(default='none@gmail.com')
    nb_employee = models.IntegerField()
    company_name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=10)
    company_headquarter = models.CharField(max_length=30,choices=HEADQUARTER)
    
    
class Speaker(models.Model):
    topic = models.CharField(max_length=30)
    linkedin_url = models.URLField(null=True,blank=True)
    twitter_url = models.URLField(null=True,blank=True)
    photo = models.ImageField(blank=True,null=True)
    bio = models.CharField(max_length=200)
    total_rating = models.IntegerField(default=0)

    def __str__(self):
        return self.topic
    

class Event(models.Model):
    
    EVENT_STATUS = [
       ( "UPCOMING","upcoming",),
       ( "CANCELED","canceled"),
       ( "Passed",'passed')
       
    ]
     
    name = models.CharField(max_length=30)
    organizer = models.ForeignKey(Organizer,on_delete=models.CASCADE)
    start = models.DateField()
    end = models.DateField()
    venue = models.CharField(max_length=30) # place wher the event occured
    status = models.CharField(max_length=10,choices=EVENT_STATUS,default='UPCOMING')
    max_nb_attendee = models.IntegerField() # the maximum number of attendee that can attend the event
    event_banner = models.ImageField(blank=True,null=True)
    budget = models.DecimalField(max_digits=10,decimal_places=0)
    speakers = models.ManyToManyField(Speaker,related_name='events')
    
    def __str__(self):  
        return self.name
    
    
class Attendee(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name='attendee')
    is_comed = models.BooleanField(default=False) # it monitor the attendence (use for analytics)
    event = models.ManyToManyField(Event,related_name='attendees')
    
    
    def __str__(self):
        return self.user.first_name +' ' + self.user.last_name



class Ticket(models.Model):
    TICKET_TYPES = [
        ('free', 'Free'),
        ('vip', 'VIP'),
        ('general', 'General'),
    ]
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="tickets")
    ticket = models.CharField(max_length=10,choices=TICKET_TYPES)   
    max_nb_ticket = models.PositiveIntegerField() # the maximum number of ticket available for the event
    sold_quantity = models.IntegerField()  # the amount of ticket reserved 
    price = models.DecimalField(max_digits=10,decimal_places=0) # the price of the ticket
    coupon_code = models.CharField(max_length=10) # the code to get discount.  

    class Meta:
        unique_together = ("event", "ticket")  # Prevent duplicate ticket types for the same event
            
    
    @property
    def remaining_tickets(self):
        """Calculate the remaining tickets."""
        return self.max_nb_ticket - self.sold_quantity
        
        
class Session(models.Model):
    TYPES = [
        ('WORKSHOP','workshop'),
        ('CONFERENCE','conference'),
        ('WEBINAR','webinar')
    ]
    
    event = models.ForeignKey(Event,on_delete=models.CASCADE,related_name='sessions')
    start = models.DateTimeField()
    end = models.DateTimeField()
    speaker = models.ForeignKey(Speaker,on_delete=models.CASCADE,related_name='sessions')
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=200)
    typ = models.CharField(max_length=30,choices=TYPES) # the type of the session (workshop,conference,webinar)
    accessible_tickets = models.ManyToManyField(Ticket, related_name="sessions")  # Which tickets grant access
     
    def __str__(self):
        return self.topic
    
                
       
# Attendance model: Tracks which sessions an attendee attends
class Attendance(models.Model):
    attendee = models.ForeignKey(Attendee, on_delete=models.CASCADE, related_name="attendances")
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name="attendees")
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('attendee', 'session')  # Prevent duplicate attendance entries

    def __str__(self):
        return f"{self.attendee.user.first_name + self.attendee.user.last_name} attending {self.session.title} ({self.ticket.ticket_type})"
              