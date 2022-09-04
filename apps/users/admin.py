from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import User


class UserAdminClass(BaseAdmin):
    ordering = ["email"]
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ["id", "username", "email", "first_name", "last_name", "is_staff", "is_active"]
    list_display_links = ["id", "email"]
    list_filter = ["username", "email", "first_name", "last_name", "is_staff", "is_active"]
    fieldsets = (
        (
            _("Login Credencials"),
            {
                "fields": ("email", "password",)
            },
        ),
        (
            _("Personal Information"),
            {"fields": ("username", "first_name", "last_name",)}
        ),
        (
            _("Permissions and Groups"),
            {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}
        ),
        (
            _("Important Dates"), {"fields": ("last_login", "date_joined")}
        )
    )
    add_fieldsets = (
        (None, {
            #"classes": ("wide",),
            "fields": ("email", "password1", "password2", "username","first_name", "last_name",
             "is_staff", "is_active")
        }),
    )
    search_fields = ["email", "username", "first_name", "last_name"]


admin.site.register(User, UserAdminClass)
