const express = require('express');
const data = require('./data');

// mongoose
//   .connect(
//     'mongodb+srv://go-fullstack:go-fullstack@cluster0.6z7f7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }
//   )
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PUT, DELETE, PATCH, OPTIONS'
//   );
//   next();
// });

module.exports = app;
