from rest_framework import serializers

from .models import User,Product

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email','password','username','photoUrl']

        extra_kwargs = {
            "password":{"write_only":True}
        }


    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance
        

class ProductSeriazlizer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'