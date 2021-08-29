const express = require('express');
const app = new express();

app.get('/', (req, res) => {
    res.send('Hello express');
});

app.listen(3000, () => {
    console.log('服务已启动');
});