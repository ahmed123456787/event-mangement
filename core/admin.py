from django.contrib import admin
from core.models import * 
from django.contrib.auth.admin import UserAdmin


class CustomUserAdmin(UserAdmin):
    # Define how the model should be displayed in the admin
    model = CustomUser
    list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active', 'user_type')
    list_filter = ('is_staff', 'is_active', 'user_type')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'user_type')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2', 'is_staff', 'is_active', 'user_type'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Organizer)
admin.site.register(Event)
admin.site.register(Session)
admin.site.register(Speaker)
admin.site.register(Ticket)
admin.site.register(Attendee)
admin.site.register(Attendance)