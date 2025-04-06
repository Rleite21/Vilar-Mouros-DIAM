
# Create your models here.
from django.db import models
from django.utils import timezone
from six import string_types
import datetime
# Questao: texto da questão e data de publicação
class Questao(models.Model):
    questao_texto = models.CharField(max_length=200)
    pub_data = models.DateTimeField('data de publicacao')
    def __str__(self):
        return self.questao_texto
    
    def foi_publicada_recentemente(self):
        return self.pub_data >= timezone.now() - datetime.timedelta(days=1)
# Opcao: texto da opção e número de votos
# chave estrangeira muitos-para-um - uma Questao pode ter várias instâncias de Opcao
class Opcao(models.Model):
    questao = models.ForeignKey(Questao, on_delete=models.CASCADE)
    opcao_texto = models.CharField(max_length=200)
    votos = models.IntegerField(default=0)
    def __str__(self):
        return self.opcao_texto
    