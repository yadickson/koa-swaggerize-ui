### koa-swaggerize-ui

[![TravisCI Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]

koa-swaggerize-ui is an node koa middleware to show swagger-ui 3 for your local (or external) api.

#### Installation

```
npm install --save koa-swaggerize-ui
```

#### Usage

```
const Koa   = require('koa');
const app       = new Koa();
const swaggerUi = require('koa-swaggerize-ui');

app.use('/api-docs.json', async function (ctx) {
  ctx.body = await require('./path/to/swaggerize/docs.json');
});

app.use(swaggerUi());

app.listen(3000);

```

## Routes

> http://localhost:3000/api-docs

> http://localhost:3000/api-docs.json

#### Generate swagger doc.json

[koa-swagger-generator](https://github.com/arizorin/koa-swagger-generator)


## License

MIT © [Yadickson Soto](https://github.com/yadickson)

Thanks to [express-swaggerize-ui](https://github.com/pgroot/express-swaggerize-ui)

[travis-image]: https://travis-ci.org/yadickson/koa-swaggerize-ui.svg?branch=master
[travis-url]: https://travis-ci.org/yadickson/koa-swaggerize-ui

[npm-image]: https://badge.fury.io/js/koa-swaggerize-ui.svg
[npm-url]: https://badge.fury.io/js/koa-swaggerize-ui
