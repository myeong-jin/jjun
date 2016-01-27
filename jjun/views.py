from django.shortcuts import render
from django.http import JsonResponse
import sys

# Create your views here.
def upload(request):
		return render(request, 'jjun/upload.html', {})

def parseImage(request):
		print(request.FILES['file'].read())
		return JsonResponse({'foo':'bar'})