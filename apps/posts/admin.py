from django.contrib import admin
from .models import Post


class PostAdmin(admin.ModelAdmin):
    list_filter = ('author', 'date_created', 'category')
    list_display = ('title', 'views','last_updated', 'author')
    prepopulated_fields = {'slug':('title',)}
admin.site.register(Post, PostAdmin)
