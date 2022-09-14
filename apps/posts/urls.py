from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.PostListView.as_view(), name='post_list'),
    path('post/<str:slug>/detail/', views.PostDetailView.as_view(),
         name='post_detail'),
    #path('post/<str:category_slug>/', views.PostByCategoryView.as_view(),
       #  name='post_by_category'),
]
