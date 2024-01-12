const express = require('express');
const path = require('path');
const app = express();

app.get('/health', function (req, res) {
    res.send('ok');
})

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// const root = require('path').join(__dirname, 'build')
// app.use(express.static(root));
// app.get("/", (_, res) => {
//     res.sendFile('index.html', { root });
// })

// app.get("/*", (_, res) => {
//     res.sendFile('index.html', { root });
// })

app.listen(8080);