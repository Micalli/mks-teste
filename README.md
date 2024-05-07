<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Api com autentificação JWT e um CRUD de filme que so pode ser acessado com usuario autentificado.

  #### URL da API - https://mks-teste-sage.vercel.app/
  ### Ferramentes da API
  - TypeScript
  - Nest.js
  - TypeORM
  - Swagger
  - Docker
  - Redis
  - PostgreSQL

## Instalaçao

```bash
$ npm install
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rotas
### Auth
```bash
[Post] - https://mks-teste-sage.vercel.app/singup // Criar conta
  - body: {
      name: string,
      email: string,
      password: string,
    }

[Post] - https://mks-teste-sage.vercel.app/singin // Logar
- body: {
      email: string,
      password: string,
    }
```

### Movies
Para essas chamadas envie no Authorizarion Bearer Token o token do usuário
```bash
  [Get] - https://mks-teste-sage.vercel.app/movies # Pega filmes do usuário logado
  [Post] - https://mks-teste-sage.vercel.app/movies # Cria filme do usuário logado
   body: {
        name: string,
        category: string,
      }

  [Put] - https://mks-teste-sage.vercel.app/movies/:movieId # Edita filme do usuário logado
   body: {
      name: string,
      category: string,
    }

  [Delete] - https://mks-teste-sage.vercel.app/movies/:movieId # Apaga filme do usuário logado
```




## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Bruno Micalli](https://www.linkedin.com/in/brunomicalli/)

## License

Nest is [MIT licensed](LICENSE).
