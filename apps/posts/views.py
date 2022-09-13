from django.shortcuts import render
from apps.category.models import Category
from .pagination import PostPagination
from .models import Post
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import generics, permissions
from rest_framework.exceptions import APIException


class PostListView(generics.ListAPIView):
    queryset = Post.objects.all().order_by("-date_created")
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = PostPagination


class PostDetailView(generics.RetrieveAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug"

    def get_queryset(self):
        try:
            slug = Post.objects.get(slug=self.kwargs["slug"])
            print("Slug", slug)
        except Post.DoesNotExist:
            raise APIException("Post not found!")
        return Post.objects.filter(title=slug)


        
class PostByCategoryView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(category__slug=self.kwargs["category_slug"])

          