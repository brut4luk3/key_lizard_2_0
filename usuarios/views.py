from django.shortcuts import render, get_object_or_404
import datetime


# FUNC DO INDEX #
def index(request):

    return render(request, 'inicio/index.html')

# FUNC DO INDEX - FIM #
