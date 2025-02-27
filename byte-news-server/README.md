
## Configuração

### Pré-requisitos

- Node.js
- MongoDB

### Instalação

1. Clone o repositório:

```sh
git clone <URL_DO_REPOSITORIO>

2. Navegue até o diretório do projeto:

cd byte-news-server

3. Instale as dependências

npm install

4. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

MONGO_URI=mongodb://localhost:27017/Byte_News
PORT=8000

### **Executando o Projeto**

Para iniciar o servidor, execute:

npm start

O servidor estará rodando na porta definida no arquivo .env (por padrão, 8000).

## **Endpoints**

### **Notícias**

- `POST /api/noticias` - Criar uma nova notícia
- `GET /api/noticias` - Obter todas as notícias
- `DELETE /api/noticias/:id` - Deletar uma notícia pelo ID
- `PATCH /api/noticias/:id` - Atualizar uma notícia pelo ID
- `GET /api/noticias/categoria/:categoria` - Obter notícias por categoria

## **Contribuição**

Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Crie um novo Pull Request

## **Licença**

## Este projeto está licenciado sob a licença ISC.

## Entregáveis

## Link do repositório GitHub:

O código fonte completo do projeto pode ser acessado no seguinte link:
[GitHub](https://github.com/FelipeRodrigu/Hackathon.git)


## Video de demonstração

O vídeo demonstrando todo o fluxo da aplicação frontend e backend, incluindo navegação entre as páginas, listagem de notícias, adição de notícias, edição e deleção de notícias
está disponível no link abaixo:

[Youtube](https://youtu.be/aey8JBfc62U)

## Contato

Para mais informações, entre em contato através do email: [felipe028pereira@hotmail.com](mailto:felipe028pereira@hotmail.com).

[LinkedIN](https://www.linkedin.com/in/felipe-rodrigues-pereira-010200176/)

---

Desenvolvido por Felipe Rodrigues Pereira e Matheus Toshio Mizuta para o Hackathon Challenge.
