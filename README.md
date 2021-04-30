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
- [x] Criar uma função que agregue o axios e o cheerio. Essa função pode ser o próprio axios??? Sim
    - O axios deve devolver o html(data)
    - O cheerio recupera o html(data) e faz o web scraping
- [x] Implementar um async/await na rota no express para o script web scraping conseguir devolver o array de objetos criado.
    - O async/await vai trabalhar em cima da função que junta o axios e o cheerio.
- [x] Desenvolver uma API REST em formato JSON com os dados retirados para ser consumida pelo app.
- [ ] ~~Implementar requisição constante ao site da praticagem para atualizar o JSON.(atualmente o site da praticagem atualiza a cada 5 minutos)~~

### Fase 2: Front-end web(JavaScript)

- [x] Desenvolver função para buscar e retornar navio buscado.
- [ ] Realizar tratamento de dados com o retorno da busca.
    > CASE 1
    Lista mostra o mesmo navio com manobras diferentes:
    *O navio LINCOLN PARK está com prático marcado para 29/04 16:30hs, realizará uma MUDANÇA para WPT 64
    O navio LINCOLN PARK está com prático marcado para 30/04 06:30hs, realizará uma MUDANÇA para SHELL*
    **Desenvolver código para tratar caso com manobras diferentes e retornar as duas.**

    > CASE 2
    Lista mostra o mesmo navio com a mesma manobra mais de uma vez:
    *O navio MSC SOFIA CELESTE está com prático marcado para 02/05 15:00hs, realizará uma ENTRADA para TECONT3
    O navio MSC SOFIA CELESTE está com prático marcado para 02/05 15:00hs, realizará uma ENTRADA para TECONT3*
    **Desenvolver código para comparar e retornar somente uma manobra**

    >CASE 3
    *O navio MSC SOFIA CELESTE está com prático marcado para 03/05 06:00hs, realizará uma SAÍDA para*
    **Tratar código para que retorne de forma correta manobras de entrada(para), saída(de) e mudança(de -> para)
    primeira idéia é fazer com switch**

- [ ] Desenvolver função na qual o usuário insira um nome de navio e a função armazene e a partir daí começe a monitorar esse nome fazendo requisições periódicas na API.
    - [ ] Inserir opção para que o usuário possa escolher entre monitorar ou não o nome inserido.

### Fase 3: Front-end mobile(Kotlin)

- [ ] Implementar requisição constante à API REST para verificar mudanças no JSON.
- [ ] Desenvolver o código para buscar o JSON na API REST.
    * Fazer a busca direta no JSON?
    * Transformar o JSON em array?
- [ ] Implementar a notificação ao usuario(entender perfil do usuário)
    * Via e-mail?
    * Via Push?
    * Via SMS?
- [ ] Desevolver interface gráfica
