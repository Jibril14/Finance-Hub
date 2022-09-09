from rest_framework import serializers
from . models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


class UpdateCommentSerializer(serializers.ModelSerializer):
    #user_name = serializers.ReadOnlyField(source = "user_name.username")
    class Meta:
        model = Comment
        fields = ['text']
