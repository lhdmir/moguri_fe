# Generated by Django 5.0.7 on 2024-07-24 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=13)),
                ('user_pw', models.CharField(max_length=13)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
    ]
