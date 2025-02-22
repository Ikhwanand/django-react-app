from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient
        fields = ['patient_id', 'last_name', 'first_name', 'blood']