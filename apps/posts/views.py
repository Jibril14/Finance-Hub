from urllib import request
from django.shortcuts import render
from apps.category.models import Category
from .pagination import PostPagination
from .models import Post, PostViews
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import generics, permissions, status
from rest_framework.exceptions import APIException
from rest_framework.views import APIView


class PostListView(generics.ListAPIView):
    queryset = Post.objects.all().order_by("-date_created")
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]
    pagination_class = PostPagination


class PostDetailView(APIView):
    def get(self, request, slug):
        post = Post.objects.get(slug=slug)
        user_ip_address = request.META.get("HTTP_X_FORWARDED_FOR")  # store ip address of the user
        if user_ip_address:
            ip = user_ip_address.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR")  # server ip address
        if not PostViews.objects.filter(post=post, ip=ip).exists():
            PostViews.objects.create(post=post, ip=ip)
            post.views += 1
            post.save()
        serializer = PostSerializer(post, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class PostByCategoryView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(category__slug=self.kwargs["category_slug"])
