import koa from 'koa'
import data from './data.json' assert {type: "json"}
import cors from '@koa/cors';

const app = new koa();
const port = process.env.PORT || 3001
app.use(cors());

app.use(async ctx => {
    ctx.body = data;
});

  

app.listen(port);