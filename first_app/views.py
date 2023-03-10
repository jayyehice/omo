from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse
from first_app.models import AccessRecord, Webpage, Topic
# Create your views here.


def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    date_dict = {
        'access_records': webpages_list,
    }
    return render(request, "index.html", context=date_dict)

def two(request):
    return HttpResponse("Two")

def vuetify(request):
    my_dict = {'insert_me': "Hello from view.py"}
    return render(request, "vuetify.html", context=my_dict)
