from rest_framework.permissions import BasePermission


class IsOrgnaizer(BasePermission):
    def has_object_permission(self, request, view, obj):
        if not request.user.is_authenticated:
            return False
        return request.user.typ == 'ORGANIZER'
   
    
class IsAttendee(BasePermission):
    def has_object_permission(self, request, view, obj):
        if not request.user.is_authenticated:
            return False
        return request.user.typ == 'ATTENDEE'    