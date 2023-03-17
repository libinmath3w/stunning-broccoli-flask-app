let express = require('express');
let app = express();

app.get('/', function (req, res) {
   res.send('<h1>Hello, world! </br> <center>Stunning Broccoli Node JS App For Development </center> </h1>  </br>  </br> <p><a href="/about">About Us </a><a href="/ping"> | Ping</a><a href="/contact"> | Contact us</a></p>');
});

app.get('/ping', function (req, res) {
  res.send('<h1>pong :) </h1><p><a href="/">Home</a></p>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>We are a company that specializes in creating Node.js apps.</p><p><a href="/">Home</a><a href="/ping"> | Ping</a><a href="/contact"> | Contact us</a></p>')
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>You can contact us at contact@example.com.</p> <p><a href="/">Home</a></p>')
});

app.get('/current-date', function (req, res) {
  let obj = {
    name: "current",
    value: new Date()
  };
  res.send(obj);
});

app.get('/fibo/:n', function (req, res) {
  let obj = {
    name: "fibo",
    value: fibo(req.params.n)
  };
  res.send(obj);
});

// res.status(err.status || 500);
// res.json({
//   message: err.message,
//   error: err
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function fibo(n) { // 1
  if (n < 2)
    return 1;
  else   return fibo(n - 3) + fibo(n - 1);
}