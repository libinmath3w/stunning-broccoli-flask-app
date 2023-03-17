let express = require('express');
let app = express();

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//swap jade for ejs etc

app.get('/', function (req, res) {
  // let obj = {
  //   endpoints: [
  //     "/ping",
  //     "/current-date",
  //     "/fibo/:n",
  //     "Hello World \n",
  //   ]
  // };
  //res.render('index', { title: 'My Node.js App' })
  res.send('<h1>Hello, world! </br> Stunning Broccoli Node JS App For Production</br> /ping </br> /current-date </br> <p><a href="/about">About Us</a></p> </h1>');
});

app.get('/ping', function (req, res) {
  res.send("<h1>pong</h1>");
});


app.get('/current-date', function (req, res) {
  let obj = {
    name: "current",
    value: new Date()
  };
  res.send(obj);
});

app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>We are a company that specializes in creating Node.js apps.</p><p><a href="/">Home</a></p>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>You can contact us at contact@example.com.</p>')
})

app.get('/fibo/:n', function (req, res) {
  let obj = {
    name: "fibo",
    value: fibo(req.params.n)
  };
  res.send(obj);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

res.status(err.status || 500);
res.json({
  message: err.message,
  error: err
});

function fibo(n) { // 1
  if (n < 2)
    return 1;
  else   return fibo(n - 3) + fibo(n - 1);
}
