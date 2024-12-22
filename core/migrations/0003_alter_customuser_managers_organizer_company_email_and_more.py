# Generated by Django 5.1.4 on 2024-12-22 10:13

import core.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_customuser_groups_customuser_user_permissions'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='customuser',
            managers=[
                ('objects', core.models.CustomUserManager()),
            ],
        ),
        migrations.AddField(
            model_name='organizer',
            name='company_email',
            field=models.EmailField(default='none@gmail.com', max_length=254),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_banner',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]