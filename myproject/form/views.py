from django.shortcuts import render, redirect
from .models import Student # ✅ correct model import
# Home page
def home(request):
return render(request, 'form.html')
# Form submit
def submit_form(request):
if request.method == 'POST':
name = request.POST.get('name')
email = request.POST.get('email')
age = request.POST.get('age')
# ✅ Fix: handle empty age
if age:
age = int(age)
else:
age = 0 # default value (or you can show error)
# Save to database
Student.objects.create(
name=name,
email=email,
age=age
)
return redirect('home'