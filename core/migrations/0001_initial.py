# Generated by Django 5.1.4 on 2024-12-21 15:04

import core.models
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('start', models.DateField()),
                ('end', models.DateField()),
                ('venue', models.CharField(max_length=30)),
                ('status', models.CharField(choices=[('UPCOMING', 'upcoming'), ('CANCELED', 'canceled'), ('Passed', 'passed')], default='UPCOMING', max_length=10)),
                ('max_nb_attendee', models.IntegerField()),
                ('event_banner', models.ImageField(upload_to='')),
                ('budget', models.DecimalField(decimal_places=0, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Speaker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(max_length=30)),
                ('linkedin_url', models.URLField(blank=True, null=True)),
                ('twitter_url', models.URLField(blank=True, null=True)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='')),
                ('bio', models.CharField(max_length=200)),
                ('total_rating', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_superuser', models.BooleanField(default=False)),
                ('user_type', models.CharField(choices=[('ORGANIZER', 'organizer'), ('ATTENDEE', 'attendee'), ('SPEAKER', 'speaker')], max_length=10)),
            ],
            options={
                'unique_together': {('first_name', 'last_name')},
            },
            managers=[
                ('user_objects', core.models.CustomUserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Attendee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_comed', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attendee', to='core.customuser')),
                ('event', models.ManyToManyField(related_name='attendees', to='core.event')),
            ],
        ),
        migrations.CreateModel(
            name='Organizer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nb_employee', models.IntegerField()),
                ('company_name', models.CharField(max_length=30)),
                ('phone_number', models.CharField(max_length=10)),
                ('company_headquarter', models.CharField(choices=[('NORHT AMERICA', 'North America'), ('SOUTH AMERICA', 'South America'), ('EUROPE', 'Europe'), ('ASIA', 'Asia'), ('AFRICA', 'Africa'), ('AUSTRALIA', 'Australia')], max_length=30)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='oraganizer', to='core.customuser')),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='organizer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.organizer'),
        ),
        migrations.AddField(
            model_name='event',
            name='speakers',
            field=models.ManyToManyField(related_name='events', to='core.speaker'),
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticket', models.CharField(choices=[('free', 'Free'), ('vip', 'VIP'), ('general', 'General')], max_length=10)),
                ('max_nb_ticket', models.PositiveIntegerField()),
                ('sold_quantity', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=0, max_digits=10)),
                ('coupon_code', models.CharField(max_length=10)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tickets', to='core.event')),
            ],
            options={
                'unique_together': {('event', 'ticket')},
            },
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.DateTimeField()),
                ('end', models.DateTimeField()),
                ('title', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=200)),
                ('typ', models.CharField(choices=[('WORKSHOP', 'workshop'), ('CONFERENCE', 'conference'), ('WEBINAR', 'webinar')], max_length=30)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sessions', to='core.event')),
                ('speaker', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sessions', to='core.speaker')),
                ('accessible_tickets', models.ManyToManyField(related_name='sessions', to='core.ticket')),
            ],
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attendee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attendances', to='core.attendee')),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attendees', to='core.session')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.ticket')),
            ],
            options={
                'unique_together': {('attendee', 'session')},
            },
        ),
    ]
