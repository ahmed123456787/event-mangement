from rest_framework.permissions import BasePermission


class IsOrgnaizer(BasePermission):
    def has_permission(self, request, view):
        print("def")
        if not request.user.is_authenticated:
            return False
        return request.user.role == 'ORGANIZER'
   
    
class IsAttendee(BasePermission):
    def has_object_permission(self, request, view, obj):
        if not request.user.is_authenticated:
            return False
        return request.user.role == 'ATTENDEE'    
    
    