# 게시글 리스트와 상세보기 페이지에 댓글의 개수를 표시

# article/models.py
class Free(models.Model):
    comments = models.PositiveIntegerField(verbose_name='댓글수', null=True)

# DB에 적용하기 위해서 migrations 적용
# python manage.py makemigrations
# python manage.py migrate

#  article/views.py
def detail(request, pk):
    comment = Comment.objects.filter(post=pk).order_by('created')
    comment_count = comment.exclude(deleted=True).count()

    context = {
        'comments': comment,
        'comment_count': comment_count,
    }