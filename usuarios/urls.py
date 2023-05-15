from django.urls import path
from . import views
from key_lizard_2_0 import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

app_name = 'usuarios'

urlpatterns =[
    path('', views.index, name='index')
]

# Configurações para servir arquivos estáticos do React
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)