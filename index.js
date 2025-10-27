const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
app.use(express.json());

app.use('/comics', require('./routes/comics'));
app.listen(port, () => {
  console.log(`uola`);
});
app.listen(port, () => {
  HEAD
  console.log(`uiujhjnhjhbjhba`);
});
