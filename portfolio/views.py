from django.shortcuts import render
from django.core.mail import send_mail
from .forms import ContactForm

def home(request):
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # You can save to DB or send email
            send_mail(
                subject=f"Message from {form.cleaned_data['name']}",
                message=form.cleaned_data['message'],
                from_email=form.cleaned_data['email'],
                recipient_list=['youremail@example.com'],
                fail_silently=False,
            )
            return render(request, 'portfolio/home.html', {'form': ContactForm(), 'success': True})
    return render(request, 'portfolio/home.html', {'form': form})
