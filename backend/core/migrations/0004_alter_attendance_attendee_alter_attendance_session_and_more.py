# Generated by Django 5.1.4 on 2024-12-22 12:20

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_customuser_managers_organizer_company_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='attendee',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attendances', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='session',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='attendees', to='core.session'),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='ticket',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.ticket'),
        ),
    ]
