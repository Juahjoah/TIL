# Create : 사용자로부터 댓글 데이터를 입력 받기 위한 CommentForm 작성

# article/forms..py
from django import forms
from .models import Article, Comment
#  ~
class CommentForm(forms.ModelForm):
    class Meta :
        model = Comment
        # fields = '__all__'
        exclude = ('article',)

#  article/views.py
from .forms import ArticleForm, CommentForm

def detail(request, pk):
    article = Article.objects.get(pk=pk)
    comment_form = CommentForm()
    context = {
        'article': article,
        'comment_form' : comment_form,
    }
    return render(request, 'articles/detail.html', context)

def comments_create(request, pk):
    article = Article.objects.get(pk=pk)
    comment_form = CommentForm(request.POST)
    if comment_form.is_valid():
        # 바로 save하는게 아니라, DB저장하기 전에 잠깐 대기 시키기
        comment = comment_form.save(commit=False)
        comment.article = article
        comment.save()
    return redirect('articles:detail', article.pk)