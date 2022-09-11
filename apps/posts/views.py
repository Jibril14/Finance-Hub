from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer, PostUpdateSerializer
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.exceptions import APIException


class PostListView(generics.ListAPIView):
    queryset = Post.objects.all().order_by("-date_created")
    serializer_class = PostSerializer


class PostDetailView(generics.RetrieveAPIView):
    serializer_class = PostSerializer
    lookup_field = "slug"

    def get_queryset(self):
        try:
            slug = Post.objects.get(slug=self.kwargs["slug"])
            print("Slug", slug)
        except Post.DoesNotExist:
            raise APIException("Post not found!")
        return Post.objects.filter(title=slug)
