import koa from 'koa'
import data from './data.json' assert {type: "json"}
import cors from '@koa/cors';

const app = new koa();
app.use(cors());

app.use(async ctx => {
    ctx.body = data;
});

  

app.listen(3001);