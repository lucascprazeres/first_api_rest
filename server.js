import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log(`\nCtrl + Click -> http://localhost:${port}\n`);
});
