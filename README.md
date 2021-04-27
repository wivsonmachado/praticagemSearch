# Projeto App PraticagemSearch :ship:

### :dart: Objetivo
Este projeto tem como objeto criar um app que notifique o usuário toda vez que um navio buscado entre no site da [praticagem](https://www.newpilots.com.br/) do Rio de Janeiro.

### Regras de negócio
O usuário deve cadastrar o nome de um navio a ser monitorado pelo app, o app deve notificar o usuario toda vez que o navio monitorado entrar na listagem do site da praticagem, mudar data e hora da manobra ou mesmo sair da listagem antes da manobra ser realizada.

### Fase 1: Back-End(Node.js)

- [x] Retirar do site da [praticagem](https://www.newpilots.com.br/) a listagem de navios atualizada através de web scraping.
- [x] Criar uma função construtora com os atributos:
    ~~~ Javascript
    navio = {
        dataHora:,
        nomeNavio:,
        manobra:,
        de:,
        para:
    }
    ~~~
- [x] Separar em modulos(boa prática).
- [ ] Criar uma função que agregue o axios e o cheerio. (Essa função pode ser o próprio axios???)
    - O axios deve desvolver o html(data)
    - O cheerio recupera o html(data) e faz o web scraping
- [ ] Implementar um async/await na rota no express para o script web scraping conseguir devolver o array de objetos criado.
    - O async/await vai trabalhar em cima da função que junta o axios e o cheerio.
- [ ] Desenvolver uma API REST em formato JSON com os dados retirados para ser consumida pelo app.
- [ ] Implementar requisição constante ao site da praticagem para atualizar o JSON.(atualmente o site da praticagem atualiza a cada 5 minutos)

### Fase 2: Front-end(Kotlin)

- [ ] Implementar requisição constante à API REST para verificar mudanças no JSON.
- [ ] Desenvolver o código para buscar o JSON na API REST.
    * Fazer a busca direta no JSON?
    * Transformar o JSON em array?
- [ ] Implementar a notificação ao usuario(entender perfil do usuário)
    * Via e-mail?
    * Via Push?
    * Via SMS?
- [ ] Desevolver interface gráfica
