from django.db import models
from apps.category.models import Category
from django.conf import settings


class Post(models.Model):
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True, db_index=True)
    photo1 = models.ImageField(default="sample.jpg", null=True, blank=True)
    photo2 = models.ImageField(default="sample.jpg", null=True, blank=True)
    photo3 = models.ImageField(default="sample.jpg", null=True, blank=True)
    excerpt = models.CharField(max_length=150, blank=False)
    content = models.TextField()
    views = models.IntegerField(verbose_name="Total Views", default=0)
    date_created = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING)
    category= models.ForeignKey(Category, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'all posts'

    def __str__(self):
        return self.title
   
class PostViews(models.Model):
    ip = models.CharField(verbose_name="IP Address", max_length=250)
    post = models.ForeignKey(Post, related_name="post_views", on_delete=models.CASCADE
    )

    def __str__(self):
        return (
            f"Total views on - {self.post.title} is - {self.post.views} view(s)"
        )

    class Meta:
        verbose_name = "Post Views"
        verbose_name_plural = "Views of Posts"
