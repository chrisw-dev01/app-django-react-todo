from rest_framework import generics
from .serializers import TodoSerializer
from todo.models import Todo

class TodoListCreate(generics.ListCreateAPIView):
  serializer_class = TodoSerializer

  def get_queryset(self):
    user = self.request.user

    return Todo.objects.filter(user=user).order_by('-created')

  def perform_create(self, serializer):
    serializer.save(user=self.request.user)
