/* koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım. */

const Koa = require('koa');
const KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

// response
router.get("/", (ctx) => {
  ctx.body = "<h1>Index sayfasına hoşgeldiniz</h1>";
});

router.get("/about", (ctx) => {
  ctx.body = "<h1>Hakkımda sayfasına hoşgeldiniz</h1>";
});

router.get("/contact", (ctx) => {
  ctx.body = "<h1>İletişim sayfasına hoşgeldiniz</h1>";
});



app.use(router.routes()).use(router.allowedMethods());




const port = 3000;

app.listen(port || 3000, (req, res) => {
  console.log('Port is open on 3000');
});