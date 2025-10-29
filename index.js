const express = require('express');
process.loadEnvFile();

const app = express();
const port = 3000 || process.env.PORT;
app.use(express.json());

app.use('/comics', require('./routes/comics'));

app.use("/ability", require('./routes/ability'));

app.use('/type', require('./routes/type'));
app.use('/pokemon', require('./routes/pokemon'));
app.listen(port, () => {
  console.log(`uola`);
});
