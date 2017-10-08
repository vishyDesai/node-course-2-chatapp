const path=require('path');
const express=require('express');

var app=express();

var publicPath=path.join(__dirname, '../public');
var port = process.env.PORT || 3000;

console.log(publicPath);

app.use(express.static(publicPath));

app.listen(port,() => {
  console.log(`Server is up on port ${port}`);
});
